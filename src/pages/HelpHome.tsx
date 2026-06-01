import { Box, Card, CardActionArea, Chip, Container, Typography } from '@mui/material';
import * as Icons from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES, articlesInCategory } from '../content/registry';
import { safiTokens } from '../theme';

export function HelpHome() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero */}
      <Box sx={{ bgcolor: safiTokens.primary, color: '#fff', py: { xs: 5, md: 7 } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 800, mb: 1.5 }}>
            {t('home.heading')}
          </Typography>
          <Typography sx={{ fontSize: 16, opacity: 0.92, maxWidth: 640, mx: 'auto' }}>
            {t('home.subheading')}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Typography variant="h6" component="h2" sx={{ mb: 3 }}>
          {t('home.browseByCategory')}
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' },
          }}
        >
          {CATEGORIES.map((cat) => {
            const Icon = (Icons as Record<string, typeof Icons.Help>)[cat.icon] ?? Icons.Article;
            const articles = articlesInCategory(cat.id);
            const count = articles.length;
            return (
              <Card key={cat.id} variant="outlined" sx={{ borderRadius: 3 }}>
                <Box sx={{ p: 3 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      bgcolor: 'rgba(91,79,207,0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 1.5,
                    }}
                  >
                    <Icon sx={{ color: safiTokens.primary }} aria-hidden />
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {t(cat.labelKey)}
                  </Typography>
                  <Typography sx={{ fontSize: 12, color: safiTokens.textSecondary, mb: 1.5 }}>
                    {t('home.articleCount', { count })}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {articles.map((a) => (
                      <CardActionArea
                        key={a.slug}
                        disabled={!a.published}
                        onClick={() => navigate(`/article/${a.slug}`)}
                        sx={{ borderRadius: 2, px: 1, py: 1, display: 'flex', justifyContent: 'space-between' }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
                          <Typography sx={{ fontSize: 14, fontWeight: a.published ? 600 : 500, color: a.published ? safiTokens.primary : safiTokens.textSecondary }}>
                            {t(a.titleKey)}
                          </Typography>
                          {!a.published && (
                            <Chip label={t('home.comingSoon')} size="small" sx={{ height: 18, fontSize: 10 }} />
                          )}
                        </Box>
                        {a.published && <ArrowForwardIcon fontSize="small" sx={{ color: safiTokens.primary }} />}
                      </CardActionArea>
                    ))}
                  </Box>
                </Box>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
