import { Box, Card, CardActionArea, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import type { Article } from '../content/types';
import { safiTokens } from '../theme';

/** Chronological previous / next navigation at the foot of an article. */
export function ArticleNav({ prev, next }: { prev?: Article; next?: Article }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'grid',
        gap: 2,
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
        mt: 5,
        pt: 3,
        borderTop: `1px solid ${safiTokens.divider}`,
      }}
    >
      {prev ? (
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
          <CardActionArea onClick={() => navigate(`/article/${prev.slug}`)} sx={{ p: 2 }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontSize: 12, color: safiTokens.textSecondary }}>
              <ArrowBackIcon fontSize="small" /> {t('article.previous')}
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 15, color: safiTokens.primary, mt: 0.5 }}>
              {t(prev.titleKey)}
            </Typography>
          </CardActionArea>
        </Card>
      ) : (
        <Box />
      )}
      {next ? (
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
          <CardActionArea onClick={() => navigate(`/article/${next.slug}`)} sx={{ p: 2, textAlign: 'right' }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 0.5, fontSize: 12, color: safiTokens.textSecondary }}>
              {t('article.next')} <ArrowForwardIcon fontSize="small" />
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 15, color: safiTokens.primary, mt: 0.5 }}>
              {t(next.titleKey)}
            </Typography>
          </CardActionArea>
        </Card>
      ) : (
        <Box />
      )}
    </Box>
  );
}
