import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import { useTranslation } from 'react-i18next';
import type { MediaPlaceholder } from '../content/types';
import { safiTokens } from '../theme';

/**
 * Renders article media. When a real `src` is set and the image loads, it shows
 * the image; otherwise (no src yet, or the file isn't in the repo) it renders an
 * accessible, correctly-sized placeholder so the layout never breaks. Alt text
 * is always carried through for WCAG.
 */
export function MediaFigure({ media }: { media: MediaPlaceholder }) {
  const { t } = useTranslation();
  const [imgError, setImgError] = useState(false);
  const aspect = media.aspect ?? 16 / 9;
  const Icon = media.kind === 'gif' ? GifBoxOutlinedIcon : ImageOutlinedIcon;

  // Resolve repo-hosted images against the app base path so they load both
  // locally ('/') and on GitHub Pages ('/<repo>/'). External URLs pass through.
  // (Cast avoids needing a separate vite/client types file.)
  const baseUrl =
    (import.meta as unknown as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/';
  const resolvedSrc =
    media.src && !/^https?:\/\//.test(media.src)
      ? `${baseUrl}${media.src.replace(/^\//, '')}`
      : media.src;

  const showImage = Boolean(media.src) && !imgError;

  return (
    <Box component="figure" sx={{ m: 0, my: 2.5 }}>
      {showImage ? (
        <Box
          component="img"
          src={resolvedSrc}
          alt={media.alt}
          onError={() => setImgError(true)}
          sx={{ width: '100%', borderRadius: 2, border: `1px solid ${safiTokens.divider}`, display: 'block' }}
        />
      ) : (
        <Box
          role="img"
          aria-label={media.alt}
          sx={{
            width: '100%',
            aspectRatio: String(aspect),
            borderRadius: 2,
            border: `1px dashed ${safiTokens.primary}`,
            bgcolor: 'rgba(91,79,207,0.04)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            color: safiTokens.primary,
            textAlign: 'center',
            px: 2,
          }}
        >
          <Icon fontSize="large" aria-hidden />
          <Typography sx={{ fontWeight: 600, fontSize: 13 }}>
            {t('article.imagePlaceholder')}
          </Typography>
          <Typography sx={{ fontSize: 12, color: safiTokens.textSecondary, maxWidth: 460 }}>
            {media.alt}
          </Typography>
        </Box>
      )}
      {media.caption && (
        <Typography
          component="figcaption"
          sx={{ mt: 1, fontSize: 12, color: safiTokens.textSecondary, fontStyle: 'italic' }}
        >
          {media.caption}
        </Typography>
      )}
    </Box>
  );
}
