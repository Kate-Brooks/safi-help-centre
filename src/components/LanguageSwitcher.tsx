import { useState } from 'react';
import {
  Box,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../i18n';
import { safiTokens } from '../theme';

/**
 * Language selector matching the in-app Settings > Language control
 * (English, Español, Deutsch, Srpski, Italiano). Changing it re-renders all
 * UI strings and article content in the chosen language and persists the choice.
 */
export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const current = SUPPORTED_LANGUAGES.find((l) => l.code === i18n.language) ?? SUPPORTED_LANGUAGES[0];

  return (
    <>
      <Button
        onClick={(e) => setAnchor(e.currentTarget)}
        startIcon={<LanguageIcon />}
        endIcon={<KeyboardArrowDownIcon />}
        color="inherit"
        aria-haspopup="menu"
        aria-label={`${t('language.label')}: ${current.label}`}
        sx={{ color: safiTokens.textPrimary, fontWeight: 600 }}
      >
        {current.label}
      </Button>
      <Menu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={() => setAnchor(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{ paper: { sx: { minWidth: 220, mt: 1 } } }}
      >
        <Box sx={{ px: 2, pt: 1, pb: 0.5 }}>
          <Typography sx={{ fontSize: 12, color: safiTokens.textSecondary, fontWeight: 700 }}>
            {t('language.label')}
          </Typography>
        </Box>
        {SUPPORTED_LANGUAGES.map((lang) => {
          const active = lang.code === i18n.language;
          return (
            <MenuItem
              key={lang.code}
              selected={active}
              onClick={() => {
                void i18n.changeLanguage(lang.code);
                setAnchor(null);
              }}
            >
              <ListItemIcon sx={{ minWidth: 32 }}>
                {active && <CheckIcon fontSize="small" sx={{ color: safiTokens.primary }} />}
              </ListItemIcon>
              <ListItemText
                primary={lang.label}
                primaryTypographyProps={{ fontWeight: active ? 700 : 500 }}
              />
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
