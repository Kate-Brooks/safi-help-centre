import { useState } from 'react';
import { Box, Button, Collapse, Typography } from '@mui/material';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useTranslation } from 'react-i18next';
import type { VideoSource } from '../content/types';
import { safiTokens } from '../theme';

interface Props {
  sources: VideoSource[];
  poster?: string;
  /** Full transcript for the active language — shown for accessibility. */
  transcript: string;
}

/**
 * Tutorial video with a language-matched source and an always-available
 * transcript (WCAG 1.2 — supports deaf and hard-of-hearing users). The video
 * element also accepts a WebVTT captions track when one is provided.
 */
export function VideoPlayer({ sources, poster, transcript }: Props) {
  const { t, i18n } = useTranslation();
  const [showTranscript, setShowTranscript] = useState(false);
  const [failed, setFailed] = useState(false);

  // Pick the source for the active language, falling back to the first (English).
  const source = sources.find((s) => s.lang === i18n.language) ?? sources[0];

  return (
    <Box sx={{ mb: 3 }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          borderRadius: 3,
          overflow: 'hidden',
          bgcolor: '#000',
          border: `1px solid ${safiTokens.divider}`,
        }}
      >
        {!failed ? (
          <video
            key={source.src}
            controls
            poster={poster}
            preload="metadata"
            onError={() => setFailed(true)}
            style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000' }}
          >
            <source src={source.src} type="video/mp4" />
            {source.captionsSrc && (
              <track kind="captions" src={source.captionsSrc} srcLang={source.lang} label={source.label} default />
            )}
          </video>
        ) : (
          // Graceful fallback when the mp4 has not been dropped into /public/videos yet.
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              color: 'rgba(255,255,255,0.85)',
              textAlign: 'center',
              px: 3,
            }}
          >
            <PlayCircleOutlineIcon sx={{ fontSize: 56 }} aria-hidden />
            <Typography sx={{ fontWeight: 700 }}>{t('article.watchTutorial')}</Typography>
            <Typography sx={{ fontSize: 13, opacity: 0.8 }}>
              {source.label} — add the file at <code>{source.src}</code>
            </Typography>
          </Box>
        )}
      </Box>

      <Button
        onClick={() => setShowTranscript((v) => !v)}
        startIcon={<SubtitlesOutlinedIcon />}
        aria-expanded={showTranscript}
        sx={{ mt: 1.5, color: safiTokens.primary }}
      >
        {showTranscript ? t('article.hideTranscript') : t('article.showTranscript')}
      </Button>

      <Collapse in={showTranscript} unmountOnExit>
        <Box
          sx={{
            mt: 1,
            p: 2.5,
            bgcolor: safiTokens.surface,
            borderRadius: 2,
            border: `1px solid ${safiTokens.divider}`,
            maxHeight: 360,
            overflowY: 'auto',
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: 13, mb: 0.5 }}>
            {t('article.transcript')}
          </Typography>
          <Typography sx={{ fontSize: 12, color: safiTokens.textSecondary, mb: 1.5 }}>
            {t('article.transcriptIntro')}
          </Typography>
          {transcript.split('\n\n').map((para, i) => (
            <Typography key={i} variant="body2" sx={{ mb: 1.25 }}>
              {para}
            </Typography>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
}
