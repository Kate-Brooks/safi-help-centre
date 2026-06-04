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
      const { default: html2pdf } = await import('html2pdf.js');

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

      // Small logo, top-left, with ~20px (≈5.3mm) of padding before the content.
      const logoX = 14;
      const logoY = 8;
      const logoW = 22; // mm
      const logoH = logo ? logoW * (logo.h / logo.w) : 0;
      const topMargin = logo ? logoY + logoH + 5.3 : 14;

      // Work on a detached clone so the on-screen article is untouched.
      const clone = printRef.current.cloneNode(true) as HTMLElement;

      // Drop the video + "show transcript" from the PDF.
      clone.querySelectorAll('.pdf-exclude').forEach((el) => el.remove());

      // Links: keep bold, remove link colour + underline.
      clone.querySelectorAll('a').forEach((a) => {
        const el = a as HTMLElement;
        el.style.color = 'inherit';
        el.style.textDecoration = 'none';
        el.style.fontWeight = '700';
      });

      // Screenshots: smaller, centred, and never split across a page break.
      clone.querySelectorAll('figure').forEach((f) => {
        const el = f as HTMLElement;
        el.style.breakInside = 'avoid';
        el.style.pageBreakInside = 'avoid';
        el.style.textAlign = 'center';
      });
      clone.querySelectorAll('img').forEach((img) => {
        const el = img as HTMLImageElement;
        el.style.maxWidth = '320px';
        el.style.maxHeight = '560px';
        el.style.width = 'auto';
        el.style.height = 'auto';
        el.style.objectFit = 'contain';
        el.style.margin = '0 auto';
        el.style.display = 'block';
      });

      // Alerts / callouts: never split across a page break.
      clone.querySelectorAll('[role="note"]').forEach((n) => {
        const el = n as HTMLElement;
        el.style.breakInside = 'avoid';
        el.style.pageBreakInside = 'avoid';
      });

      // Each major section starts on a fresh page, so a subheading like
      // "Read your results" is never stranded at the foot of the previous page.
      clone.querySelectorAll('section').forEach((s, i) => {
        if (i > 0) {
          const el = s as HTMLElement;
          el.style.breakBefore = 'page';
          el.style.pageBreakBefore = 'always';
        }
      });

      // Render off-screen at a fixed width for consistent layout.
      clone.style.width = '720px';
      const holder = document.createElement('div');
      holder.style.position = 'fixed';
      holder.style.left = '-10000px';
      holder.style.top = '0';
      holder.appendChild(clone);
      document.body.appendChild(holder);

      try {
        await html2pdf()
          .set({
            margin: [topMargin, 14, 18, 14],
            filename: `${article.slug}-${lang}.pdf`,
            image: { type: 'jpeg', quality: 0.95 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak: { mode: ['css', 'legacy'] },
          })
          .from(clone)
          .toPdf()
          .get('pdf')
          .then((pdf: { internal: { getNumberOfPages: () => number; pageSize: { getWidth: () => number; getHeight: () => number } }; setPage: (n: number) => void; setFontSize: (n: number) => void; setTextColor: (r: number, g: number, b: number) => void; text: (s: string, x: number, y: number, o?: object) => void; addImage: (d: string, f: string, x: number, y: number, w: number, h: number) => void }) => {
            // Safi logo header + page numbers on every page.
            const total = pdf.internal.getNumberOfPages();
            const w = pdf.internal.pageSize.getWidth();
            const h = pdf.internal.pageSize.getHeight();
            for (let i = 1; i <= total; i++) {
              pdf.setPage(i);
              if (logo) pdf.addImage(logo.data, 'PNG', logoX, logoY, logoW, logoH);
              pdf.setFontSize(9);
              pdf.setTextColor(110, 109, 119);
              pdf.text(`${i} / ${total}`, w - 14, h - 8, { align: 'right' });
            }
          })
          .save();
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
