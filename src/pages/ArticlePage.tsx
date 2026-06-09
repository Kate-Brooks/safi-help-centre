import { useRef, useState } from 'react';
import {
  Alert,
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Link as MuiLink,
  Typography,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { CATEGORIES, getArticle, getNeighbours } from '../content/registry';
import type { LanguageCode } from '../i18n';
import { SUPPORTED_LANGUAGES } from '../i18n';
import { safiTokens } from '../theme';
import { ArticleBody } from '../components/ArticleBody';
import { OnThisPage } from '../components/OnThisPage';
import { ShareBar } from '../components/ShareBar';
import { VideoPlayer } from '../components/VideoPlayer';
import { ArticleNav } from '../components/ArticleNav';

export function ArticlePage() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const printRef = useRef<HTMLDivElement>(null);
  const [preparingPdf, setPreparingPdf] = useState(false);
  const [feedback, setFeedback] = useState<null | 'yes' | 'no'>(null);

  const article = slug ? getArticle(slug) : undefined;

  if (!article) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography variant="h5">404</Typography>
        <MuiLink component="button" onClick={() => navigate('/')}>{t('nav.home')}</MuiLink>
      </Container>
    );
  }

  const lang = i18n.language as LanguageCode;
  const langLabel = SUPPORTED_LANGUAGES.find((l) => l.code === lang)?.label ?? lang;
  const localised = article.content[lang];
  const english = article.content.en;
  const content = localised ?? english;
  const isFallback = Boolean(english) && !localised;

  const category = CATEGORIES.find((c) => c.id === article.categoryId);
  const { prev, next } = getNeighbours(article.slug);

  if (!article.published || !content) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>{t(article.titleKey)}</Typography>
        <Alert severity="info">{t('home.comingSoon')}</Alert>
      </Container>
    );
  }

  const lastUpdated = new Intl.DateTimeFormat(lang, { dateStyle: 'long' }).format(
    new Date(article.lastUpdatedISO),
  );

  const downloadPdf = async () => {
    if (!printRef.current) return;
    setPreparingPdf(true);
    try {
      // Render the article block-by-block: each step / screenshot / callout is
      // captured as one image and placed whole, so nothing is ever split across
      // a page, content flows continuously (no wasted pages) and everything
      // stays inside the page margins (no horizontal cut-off).
      const [{ jsPDF }, html2canvasMod] = await Promise.all([
        import('jspdf'),
        import('html2canvas'),
      ]);
      const html2canvas = html2canvasMod.default;

      // Safi logo (the real brand asset in /public) for the PDF page header.
      const baseUrl =
        (import.meta as unknown as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/';
      const logoSrc = `${baseUrl}${encodeURI('_safi_final_logo_black (1).png')}`;
      const logo = await new Promise<{ data: string; w: number; h: number } | null>((resolve) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          try {
            const c = document.createElement('canvas');
            c.width = img.naturalWidth;
            c.height = img.naturalHeight;
            const ctx = c.getContext('2d');
            if (!ctx) return resolve(null);
            ctx.drawImage(img, 0, 0);
            resolve({ data: c.toDataURL('image/png'), w: img.naturalWidth, h: img.naturalHeight });
          } catch {
            resolve(null); // cross-origin taint (e.g. in the standalone preview)
          }
        };
        img.onerror = () => resolve(null);
        img.src = logoSrc;
      });

      // Detached clone at a fixed render width so layout is consistent.
      const RENDER_W = 760;
      const clone = printRef.current.cloneNode(true) as HTMLElement;
      clone.querySelectorAll('.pdf-exclude').forEach((el) => el.remove());
      clone.querySelectorAll('a').forEach((a) => {
        const el = a as HTMLElement;
        el.style.color = 'inherit';
        el.style.textDecoration = 'none';
        el.style.fontWeight = '700';
      });
      // Cap screenshot size so any single figure comfortably fits one page.
      clone.querySelectorAll('img').forEach((img) => {
        const el = img as HTMLImageElement;
        el.style.maxWidth = '100%';
        el.style.maxHeight = '520px';
        el.style.width = 'auto';
        el.style.height = 'auto';
        el.style.objectFit = 'contain';
        el.style.display = 'block';
        el.style.margin = '0 auto';
      });

      const holder = document.createElement('div');
      holder.style.cssText = `position:fixed;left:-10000px;top:0;width:${RENDER_W}px;background:#ffffff;`;
      holder.appendChild(clone);
      document.body.appendChild(holder);

      try {
        // Collect atomic units (never split) in document order.
        const units: HTMLElement[] = [];
        Array.from(clone.children).forEach((child) => {
          const el = child as HTMLElement;
          if (el.tagName === 'HR') return; // drop dividers
          if (el.querySelector('section')) {
            // The ArticleBody container: descend into each <section>.
            el.querySelectorAll(':scope > section').forEach((sec) => {
              const section = sec as HTMLElement;
              if (section.querySelector(':scope > [role="note"]')) {
                units.push(section); // alert section (e.g. "Before you begin")
              } else {
                // Section heading, then each numbered step, as separate units.
                Array.from(section.children).forEach((c) => units.push(c as HTMLElement));
              }
            });
          } else {
            units.push(el); // title, summary, meta, fallback alert
          }
        });

        const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
        const pageW = pdf.internal.pageSize.getWidth();
        const pageH = pdf.internal.pageSize.getHeight();
        const marginX = 14;
        const contentW = pageW - marginX * 2;
        const logoX = 14;
        const logoY = 8;
        const logoW = 22; // mm
        const logoH = logo ? logoW * (logo.h / logo.w) : 0;
        const topMargin = logo ? logoY + logoH + 5.3 : 14; // ~20px below the logo
        const bottomMargin = 16;
        const maxH = pageH - topMargin - bottomMargin;
        const pageBottom = pageH - bottomMargin;

        // Pre-render every unit to an image first, so we can keep a section
        // heading on the same page as its first step (no stranded headings).
        // 3x scale (~300 DPI) keeps text sharp; text-only blocks use lossless
        // PNG, photo-heavy blocks use high-quality JPEG so the file stays small.
        type Rendered = { data: string; fmt: 'PNG' | 'JPEG'; w: number; h: number; isHeading: boolean };
        const rendered: Rendered[] = [];
        for (const unit of units) {
          const canvas = await html2canvas(unit, {
            scale: 3,
            backgroundColor: '#ffffff',
            useCORS: true,
            windowWidth: RENDER_W,
          });
          if (!canvas.width || !canvas.height) continue;
          let w = contentW;
          let h = (canvas.height * contentW) / canvas.width;
          if (h > maxH) {
            // Oversized unit: shrink to fit a single page rather than split it.
            h = maxH;
            w = (canvas.width * maxH) / canvas.height;
          }
          const hasImage = !!unit.querySelector('img');
          const fmt: 'PNG' | 'JPEG' = hasImage ? 'JPEG' : 'PNG';
          const data = hasImage
            ? canvas.toDataURL('image/jpeg', 0.97)
            : canvas.toDataURL('image/png');
          rendered.push({ data, fmt, w, h, isHeading: unit.tagName === 'H2' });
        }

        let y = topMargin;
        rendered.forEach((u, i) => {
          if (u.isHeading && y > topMargin) y += 4; // breathing room above headings
          // Keep a section heading with its first following unit (step).
          let needed = u.h;
          if (u.isHeading && rendered[i + 1]) needed += 3 + rendered[i + 1].h;
          if (y + needed > pageBottom && y > topMargin) {
            pdf.addPage();
            y = topMargin;
          }
          const x = marginX + (contentW - u.w) / 2; // centre when shrunk
          pdf.addImage(u.data, u.fmt, x, y, u.w, u.h);
          y += u.h + 3; // small gap between units
        });

        // Safi logo header + page numbers on every page.
        const total = pdf.getNumberOfPages();
        for (let i = 1; i <= total; i++) {
          pdf.setPage(i);
          if (logo) pdf.addImage(logo.data, 'PNG', logoX, logoY, logoW, logoH);
          pdf.setFontSize(9);
          pdf.setTextColor(110, 109, 119);
          pdf.text(`${i} / ${total}`, pageW - 14, pageH - 8, { align: 'right' });
        }

        pdf.save(`${article.slug}-${lang}.pdf`);
      } finally {
        document.body.removeChild(holder);
      }
    } finally {
      setPreparingPdf(false);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 3, md: 5 } }}>
      <Breadcrumbs sx={{ mb: 2, fontSize: 13 }} aria-label="breadcrumb">
        <MuiLink
          component="button"
          underline="hover"
          onClick={() => navigate('/')}
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: safiTokens.textSecondary }}
        >
          <HomeOutlinedIcon fontSize="small" /> {t('nav.home')}
        </MuiLink>
        {category && <Typography sx={{ fontSize: 13, color: safiTokens.textSecondary }}>{t(category.labelKey)}</Typography>}
        <Typography sx={{ fontSize: 13, color: safiTokens.textPrimary, fontWeight: 600 }}>{content.title}</Typography>
      </Breadcrumbs>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'minmax(0,1fr) 220px' }, gap: { xs: 0, md: 5 } }}>
        {/* Main column */}
        <Box sx={{ minWidth: 0 }}>
          {/* Printable region */}
          <Box ref={printRef}>
            <Typography variant="h5" component="h1" sx={{ fontWeight: 800, mb: 1 }}>
              {content.title}
            </Typography>
            <Typography variant="body1" sx={{ color: safiTokens.textSecondary, mb: 2 }}>
              {content.summary}
            </Typography>

            <Typography sx={{ fontSize: 12, color: safiTokens.textSecondary, mb: 2 }}>
              {t('article.estReadTime', { minutes: article.estReadMinutes })} · {t('article.lastUpdated', { date: lastUpdated })}
            </Typography>

            {isFallback && (
              <Alert severity="info" sx={{ mb: 2 }}>
                <strong>{t('translation.pendingTitle')}</strong> — {t('translation.pendingBody', { language: langLabel })}
              </Alert>
            )}

            <Divider sx={{ mb: 3 }} />

            {/* Tutorial video + transcript at the top */}
            {article.video && (
              <div className="pdf-exclude">
                <VideoPlayer
                  sources={article.video.sources}
                  poster={article.video.poster}
                  transcript={content.transcript}
                />
              </div>
            )}

            {/* Step-by-step guide */}
            <ArticleBody sections={content.sections} />
          </Box>

          {/* Share / export (not part of the PDF) */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontWeight: 700, fontSize: 13, mb: 1 }}>{t('article.share')}</Typography>
            <ShareBar title={content.title} onDownloadPdf={downloadPdf} preparingPdf={preparingPdf} />
          </Box>

          {/* Was this helpful */}
          <Box sx={{ mt: 4, p: 2.5, bgcolor: safiTokens.surface, borderRadius: 2, textAlign: 'center' }}>
            {feedback ? (
              <Typography sx={{ fontWeight: 600 }}>{t('article.helpfulThanks')}</Typography>
            ) : (
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Typography sx={{ fontWeight: 600 }}>{t('article.helpfulQuestion')}</Typography>
                <Button size="small" variant="outlined" startIcon={<ThumbUpOffAltIcon />} onClick={() => setFeedback('yes')}>
                  {t('article.helpfulYes')}
                </Button>
                <Button size="small" variant="outlined" startIcon={<ThumbDownOffAltIcon />} onClick={() => setFeedback('no')}>
                  {t('article.helpfulNo')}
                </Button>
              </Box>
            )}
          </Box>

          <ArticleNav prev={prev} next={next} />
        </Box>

        {/* Right-hand content stepper (desktop only) */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <OnThisPage items={content.sections.map((s) => ({ id: s.id, heading: s.heading }))} />
        </Box>
      </Box>
    </Container>
  );
}
