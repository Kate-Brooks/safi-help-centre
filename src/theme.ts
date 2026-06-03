import { createTheme } from '@mui/material/styles';

/**
 * Safi-aligned MUI theme for the Help Centre prototype.
 *
 * Brand colours confirmed June 2026:
 *   primary purple   #6347FF
 *   titles/headings  #0D0C1D
 *   body / grey copy #6E6D77
 *   purple alert copy #6347FF
 *   green tip copy   #1B5E20
 *
 * Font: Safi uses CircularXXTT everywhere. The licensed font is not shipped in
 * this open prototype, so it's declared first and falls back to a close
 * geometric sans. Drop the real woff2 into /public/fonts and add an @font-face
 * in index.css to render in CircularXXTT exactly.
 */

export const safiTokens = {
  primary: '#6347FF', // Safi brand purple — CTAs, active nav, links, purple alert copy
  primaryDark: '#4F38D6',
  success: '#27AE60', // in spec / correct
  tipText: '#1B5E20', // green alert (Tip) copy
  warning: '#F5A623', // action-needed warnings
  error: '#E74C3C', // out of spec / failed
  info: '#2D9CDB',
  textPrimary: '#0D0C1D', // titles & subheadings
  textSecondary: '#6E6D77', // general body copy (light grey)
  divider: 'rgba(13,12,29,0.12)',
  surface: '#F5F5F7',
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
    fontSize: 14,
    // Titles & headings use #0D0C1D (palette text.primary).
    h4: { fontWeight: 700, fontSize: '2rem', letterSpacing: '-0.01em', color: safiTokens.textPrimary },
    h5: { fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.01em', color: safiTokens.textPrimary },
    h6: { fontWeight: 700, fontSize: '1.125rem', color: safiTokens.textPrimary },
    subtitle1: { fontWeight: 600, color: safiTokens.textPrimary },
    // General copy uses the light grey #6E6D77.
    body1: { fontSize: '0.9375rem', lineHeight: 1.65, color: safiTokens.textSecondary },
    body2: { fontSize: '0.8125rem', lineHeight: 1.6, color: safiTokens.textSecondary },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 8 } },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '@media (prefers-reduced-motion: reduce)': {
          '*': {
            animationDuration: '0.001ms !important',
            transitionDuration: '0.001ms !important',
          },
        },
        'a:focus-visible, button:focus-visible': {
          outline: `3px solid ${safiTokens.primary}`,
          outlineOffset: 2,
        },
      },
    },
  },
});
