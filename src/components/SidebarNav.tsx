import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Chip,
} from '@mui/material';
import * as Icons from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { CATEGORIES, articlesInCategory } from '../content/registry';
import { safiTokens } from '../theme';

/** Left-hand category navigation listing every category and its articles. */
export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { slug } = useParams();

  const go = (to: string) => {
    navigate(to);
    onNavigate?.();
  };

  return (
    <Box sx={{ py: 2 }}>
      {CATEGORIES.map((cat) => {
        const Icon = (Icons as Record<string, typeof Icons.Help>)[cat.icon] ?? Icons.Article;
        const articles = articlesInCategory(cat.id);
        return (
          <Box key={cat.id} sx={{ mb: 1.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 2.5, py: 0.75 }}>
              <Icon fontSize="small" sx={{ color: safiTokens.primary }} aria-hidden />
              <Typography sx={{ fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.04em', color: safiTokens.textSecondary }}>
                {t(cat.labelKey)}
              </Typography>
            </Box>
            <List dense disablePadding>
              {articles.map((a) => {
                const active = a.slug === slug;
                return (
                  <ListItemButton
                    key={a.slug}
                    selected={active}
                    disabled={!a.published}
                    onClick={() => go(`/article/${a.slug}`)}
                    sx={{
                      pl: 5.5,
                      pr: 2,
                      borderRadius: 2,
                      mx: 1,
                      '&.Mui-selected': { bgcolor: safiTokens.primary, color: '#fff', '&:hover': { bgcolor: safiTokens.primaryDark } },
                    }}
                  >
                    <ListItemText
                      primary={t(a.titleKey)}
                      primaryTypographyProps={{ fontSize: 13, fontWeight: active ? 700 : 500 }}
                    />
                    {!a.published && (
                      <Chip label={t('home.comingSoon')} size="small" sx={{ height: 18, fontSize: 10, ml: 1 }} />
                    )}
                  </ListItemButton>
                );
              })}
            </List>
          </Box>
        );
      })}
    </Box>
  );
}
