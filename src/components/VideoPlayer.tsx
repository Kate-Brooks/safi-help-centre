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
 * Converts a normal YouTube/Vimeo URL into an embeddable iframe URL.
 * Returns null if the value is a direct video file (mp4) rather than a hosted link.
 *
 * Accepts: youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID,
 *          vimeo.com/ID, player.vimeo.com/video/ID,
 *          drive.google.com/file/d/ID/view, drive.google.com/open?id=ID
 *
 * Note: Google Drive files must be shared "Anyone with the link – Viewer" for
 * the embed to play on a public site.
 */
function toEmbedUrl(src: string): string | null {
  try {
    const url = new URL(src, window.location.origin);
    const host = url.hostname.replace(/^www\./, '');

    if (host === 'youtu.be') {
      return `https://www.youtube.com/embed${url.pathname}`;
    }
    if (host.endsWith('youtube.com')) {
      if (url.pathname.startsWith('/embed/')) return url.href;
      const id = url.searchParams.get('v');
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    if (host.endsWith('vimeo.com')) {
      if (host.startsWith('player.')) return url.href;
      const id = url.pathname.split('/').filter(Boolean)[0];
      if (id && /^\d+$/.test(id)) return `https://player.vimeo.com/video/${id}`;
    }
    if (host.endsWith('drive.google.com')) {
      const match = url.pathname.match(/\/file\/d\/([^/]+)/);
      const id = match ? match[1] : url.searchParams.get('id');
      if (id) return `https://drive.google.com/file/d/${id}/preview`;
    }
    return null; // not a recognised hosted link → treat as a direct file
  } catch {
    return null;
  }
}

/**
 * Tutorial video with a language-matched source and an always-available
 * transcript (WCAG 1.2 — supports deaf and hard-of-hearing users).
 *
 * A source's `src` can be either a hosted link (YouTube/Vimeo — rendered as an
 * embed) or a direct video file path (rendered with the native player + an
 * optional WebVTT captions track).
 */
export function VideoPlayer({ sources, poster, transcript }: Props) {
  const { t, i18n } = useTranslation();
  const [showTranscript, setShowTranscript] = useState(false);
  const [failed, setFailed] = useState(false);

  // Pick the source for the active language, falling back to the first (English).
  const source = sources.find((s) => s.lang === i18n.language) ?? sources[0];
  const embedUrl = source.src ? toEmbedUrl(source.src) : null;
  const isPlaceholder = !source.src || source.src.includes('REPLACE_WITH');

  return (
    <Box sx={{ mb: 3 }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          // The tutorial videos are square (1:1); matching the container stops
          // the Drive player stretching them. Capped + centred so it isn't huge.
          maxWidth: 460,
          mx: 'auto',
          aspectRatio: '1 / 1',
          borderRadius: 3,
          overflow: 'hidden',
          bgcolor: '#000',
          border: `1px solid ${safiTokens.divider}`,
        }}
      >
        {isPlaceholder ? (
          // No real link yet — friendly placeholder.
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
              {source.label} — add the video link in <code>src/content/registry.ts</code>
            </Typography>
          </Box>
        ) : embedUrl ? (
          <iframe
            key={embedUrl}
            src={embedUrl}
            title={`${t('article.watchTutorial')} (${source.label})`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
          />
        ) : !failed ? (
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
              {source.label} — could not load <code>{source.src}</code>
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
