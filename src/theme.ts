import { createTheme } from '@mui/material/styles';

/**
 * Safi-aligned MUI theme for the Help Centre prototype.
 *
 * Tokens are taken from the Safi Design skill (Section 3). Exact hex values
 * should be verified against the Safi UI Kit Figma variables before any real
 * implementation — this prototype uses the documented approximations.
 *
 * Font: Safi uses CircularXXTT everywhere. The licensed font is not shipped
 * in this open prototype, so we declare it first and fall back to a close
 * geometric sans. Drop the real woff2 into /public/fonts and add an @font-face
 * in index.css to match production exactly.
 */

export const safiTokens = {
  primary: '#5B4FCF', // Safi brand purple/violet — all primary CTAs, active nav, links
  primaryDark: '#4A3FB0',
  success: '#27AE60', // in spec / correct
  warning: '#F5A623', // action-needed warnings
  error: '#E74C3C', // out of spec / failed
  info: '#2D9CDB',
  textPrimary: 'rgba(0,0,0,0.87)',
  textSecondary: 'rgba(0,0,0,0.60)',
  divider: 'rgba(0,0,0,0.12)',
  surface: '#F5F5F5',
  bgLight: '#FFFFFF',
  pageBg: '#FAFAFA',
} as const;

const fontStack =
  '"CircularXXTT", "Circular Std", "Inter", "Helvetica Neue", Arial, sans-serif';

export const safiTheme = createTheme({
  palette: {
    primary: { main: safiTokens.primary, dark: safiTokens.primaryDark },
    success: { main: safiTokens.success },
    warning: { main: safiTokens.warning },
    error: { main: safiTokens.error },
    info: { main: safiTokens.info },
    text: { primary: safiTokens.textPrimary, secondary: safiTokens.textSecondary },
    divider: safiTokens.divider,
    background: { default: safiTokens.pageBg, paper: safiTokens.bgLight },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: fontStack,
    // Safi rule: default text minimum 13px.
    fontSize: 14,
    h4: { fontWeight: 700, fontSize: '2rem', letterSpacing: '-0.01em' },
    h5: { fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.01em' }, // page titles
    h6: { fontWeight: 700, fontSize: '1.125rem' },
    subtitle1: { fontWeight: 600 },
    body1: { fontSize: '0.9375rem', lineHeight: 1.65 }, // 15px, 1.5x+ line-height (WCAG)
    body2: { fontSize: '0.8125rem', lineHeight: 1.6 }, // 13px floor
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 8 } },
    },
    MuiCssBaseline: {
      styleOverrides: {
        // Respect reduced-motion preference (WCAG 2.3.3 / skill §10).
        '@media (prefers-reduced-motion: reduce)': {
          '*': {
            animationDuration: '0.001ms !important',
            transitionDuration: '0.001ms !important',
          },
        },
        // Always-visible focus ring (skill §10 — never remove focus styles).
        'a:focus-visible, button:focus-visible': {
          outline: `3px solid ${safiTokens.primary}`,
          outlineOffset: 2,
        },
      },
    },
  },
});
