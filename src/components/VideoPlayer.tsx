import { useState } from 'react';
import { Box, Button, Collapse, Dialog, IconButton, Typography } from '@mui/material';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import CloseIcon from '@mui/icons-material/Close';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import { useTranslation } from 'react-i18next';
import type { VideoSource } from '../content/types';
import { safiTokens } from '../theme';

interface Props {
  sources: VideoSource[];
  poster?: string;
  /** Full transcript for the active language — shown for accessibility. */
  transcript: string;
}

/** Extracts a Google Drive file id from a share/preview URL. */
function driveId(src: string): string | null {
  const m = src.match(/\/file\/d\/([^/]+)/);
  if (m) return m[1];
  try {
    return new URL(src, window.location.origin).searchParams.get('id');
  } catch {
    return null;
  }
}

/** Embeddable iframe URL for the lightbox player (YouTube / Vimeo / Drive / direct mp4). */
function toEmbedUrl(src: string): string | null {
  try {
    const url = new URL(src, window.location.origin);
    const host = url.hostname.replace(/^www\./, '');
    if (host === 'youtu.be') return `https://www.youtube.com/embed${url.pathname}`;
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
      const id = driveId(src);
      if (id) return `https://drive.google.com/file/d/${id}/preview`;
    }
    return null;
  } catch {
    return null;
  }
}

/** A full-width poster frame to show before play (no stretch — it's a plain image). */
function toPosterUrl(src: string, poster?: string): string | null {
  if (poster) return poster;
  try {
    const url = new URL(src, window.location.origin);
    const host = url.hostname.replace(/^www\./, '');
    if (host.endsWith('drive.google.com')) {
      const id = driveId(src);
      if (id) return `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
    }
    if (host === 'youtu.be') return `https://img.youtube.com/vi${url.pathname}/hqdefault.jpg`;
    if (host.endsWith('youtube.com')) {
      const id = url.searchParams.get('v');
      if (id) return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Tutorial video. The poster is shown full-width (the image sets the size, so it
 * never stretches); pressing play opens the video at its true aspect ratio in a
 * centred lightbox. The transcript stays available below for accessibility
 * (WCAG 1.2 — deaf and hard-of-hearing users).
 */
export function VideoPlayer({ sources, poster, transcript }: Props) {
  const { t, i18n } = useTranslation();
  const [showTranscript, setShowTranscript] = useState(false);
  const [open, setOpen] = useState(false);
  const [posterError, setPosterError] = useState(false);

  const source = sources.find((s) => s.lang === i18n.language) ?? sources[0];
  const embedUrl = source.src ? toEmbedUrl(source.src) : null;
  const posterUrl = source.src ? toPosterUrl(source.src, poster) : null;
  const isPlaceholder = !source.src || source.src.includes('REPLACE_WITH');
  const canPlay = Boolean(embedUrl) && !isPlaceholder;

  return (
    <Box sx={{ mb: 3 }}>
      {/* Full-width poster / play surface */}
      <Box
        component={canPlay ? 'button' : 'div'}
        type={canPlay ? 'button' : undefined}
        onClick={canPlay ? () => setOpen(true) : undefined}
        aria-label={canPlay ? `${t('article.watchTutorial')} (${source.label})` : undefined}
        sx={{
          position: 'relative',
          display: 'block',
          width: '100%',
          aspectRatio: '16 / 9',
          borderRadius: 3,
          overflow: 'hidden',
          p: 0,
          border: `1px solid ${safiTokens.divider}`,
          bgcolor: '#0d0c1d',
          cursor: canPlay ? 'pointer' : 'default',
        }}
      >
        {posterUrl && !posterError ? (
          <Box
            component="img"
            src={posterUrl}
            alt=""
            aria-hidden
            onError={() => setPosterError(true)}
            sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
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
            <VideocamOutlinedIcon sx={{ fontSize: 48 }} aria-hidden />
            <Typography sx={{ fontWeight: 700 }}>{t('article.watchTutorial')}</Typography>
            {isPlaceholder && (
              <Typography sx={{ fontSize: 13, opacity: 0.8 }}>
                {source.label} — add the video link in <code>src/content/registry.ts</code>
              </Typography>
            )}
          </Box>
        )}

        {canPlay && (
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'rgba(13,12,29,0.25)',
            }}
          >
            <Box
              sx={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                bgcolor: 'rgba(255,255,255,0.92)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
              }}
            >
              <PlayArrowRoundedIcon sx={{ fontSize: 44, color: safiTokens.primary, ml: '4px' }} />
            </Box>
          </Box>
        )}
      </Box>

      {/* Lightbox — plays the video at its true (square) aspect ratio */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth={false}
        PaperProps={{ sx: { bgcolor: 'transparent', boxShadow: 'none', m: 2, overflow: 'visible' } }}
      >
        <IconButton
          onClick={() => setOpen(false)}
          aria-label="Close video"
          sx={{ position: 'absolute', top: -44, right: 0, color: '#fff' }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          sx={{
            width: 'min(90vw, 560px)',
            aspectRatio: '1 / 1',
            bgcolor: '#000',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          {open && embedUrl && (
            <iframe
              src={`${embedUrl}${embedUrl.includes('?') ? '&' : '?'}autoplay=1`}
              title={`${t('article.watchTutorial')} (${source.label})`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 0 }}
            />
          )}
        </Box>
      </Dialog>

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
