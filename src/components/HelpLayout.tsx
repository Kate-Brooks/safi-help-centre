import { useState, type ReactNode } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  useMediaQuery,
  Link as MuiLink,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import BoltIcon from '@mui/icons-material/Bolt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { SidebarNav } from './SidebarNav';
import { safiTokens } from '../theme';

const SIDEBAR_WIDTH = 264;

/** Safi web-app shell adapted for the Help Centre: top bar + collapsible category sidebar. */
export function HelpLayout({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebar = <SidebarNav onNavigate={() => setMobileOpen(false)} />;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ bgcolor: '#fff', color: safiTokens.textPrimary, borderBottom: `1px solid ${safiTokens.divider}` }}
      >
        <Toolbar sx={{ gap: 2 }}>
          {!isDesktop && (
            <IconButton edge="start" onClick={() => setMobileOpen(true)} aria-label="Open navigation">
              <MenuIcon />
            </IconButton>
          )}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <BoltIcon sx={{ color: safiTokens.primary }} />
            <Typography sx={{ fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em' }}>
              {t('app.name')}
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: 18, color: safiTokens.textSecondary, ml: 0.5 }}>
              {t('app.helpCentre')}
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }} />

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              gap: 1,
              bgcolor: safiTokens.surface,
              borderRadius: 2,
              px: 1.5,
              py: 0.5,
              minWidth: 200,
            }}
          >
            <SearchIcon fontSize="small" sx={{ color: safiTokens.textSecondary }} />
            <InputBase placeholder={t('search.placeholder')} sx={{ fontSize: 14, flex: 1 }} inputProps={{ 'aria-label': t('search.placeholder') }} />
          </Box>

          <LanguageSwitcher />

          <MuiLink
            href="https://app.safi.co"
            underline="none"
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5, color: safiTokens.primary, fontWeight: 600, fontSize: 14 }}
          >
            <ArrowBackIcon fontSize="small" /> {t('app.backToApp')}
          </MuiLink>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', flex: 1 }}>
        {isDesktop ? (
          <Box
            component="nav"
            sx={{
              width: SIDEBAR_WIDTH,
              flexShrink: 0,
              borderRight: `1px solid ${safiTokens.divider}`,
              bgcolor: '#fff',
              overflowY: 'auto',
              position: 'sticky',
              top: 64,
              height: 'calc(100vh - 64px)',
            }}
          >
            {sidebar}
          </Box>
        ) : (
          <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)} ModalProps={{ keepMounted: true }}>
            <Box sx={{ width: SIDEBAR_WIDTH }}>{sidebar}</Box>
          </Drawer>
        )}

        <Box component="main" sx={{ flex: 1, minWidth: 0 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
