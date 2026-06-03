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
      await html2pdf()
        .set({
          margin: [12, 12, 16, 12],
          filename: `${article.slug}-${lang}.pdf`,
          image: { type: 'jpeg', quality: 0.95 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
          pagebreak: { mode: ['css', 'legacy'] },
        })
        .from(printRef.current)
        .save();
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
              <VideoPlayer sources={article.video.sources} poster={article.video.poster} transcript={content.transcript} />
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
