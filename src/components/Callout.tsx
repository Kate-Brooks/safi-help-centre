import { Box, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import { useTranslation } from 'react-i18next';
import { safiTokens } from '../theme';
import { RichText } from './RichText';

type Variant = 'note' | 'tip' | 'important';

const STYLES: Record<Variant, { color: string; bg: string; Icon: typeof InfoOutlinedIcon; labelKey: string }> = {
  note: { color: safiTokens.info, bg: 'rgba(45,156,219,0.08)', Icon: InfoOutlinedIcon, labelKey: 'article.note' },
  tip: { color: safiTokens.success, bg: 'rgba(39,174,96,0.08)', Icon: LightbulbOutlinedIcon, labelKey: 'article.tip' },
  important: { color: safiTokens.warning, bg: 'rgba(245,166,35,0.10)', Icon: WarningAmberOutlinedIcon, labelKey: 'article.important' },
};

/** Highlighted note box, à la Figma's article callouts. Never relies on colour alone (icon + label). */
export function Callout({ variant, body }: { variant: Variant; body: string }) {
  const { t } = useTranslation();
  const s = STYLES[variant];
  return (
    <Box
      role="note"
      sx={{
        display: 'flex',
        gap: 1.5,
        p: 2,
        my: 2,
        borderRadius: 2,
        bgcolor: s.bg,
        borderLeft: `4px solid ${s.color}`,
      }}
    >
      <s.Icon sx={{ color: s.color, mt: '2px' }} fontSize="small" aria-hidden />
      <Box>
        <Typography
          component="span"
          sx={{ color: s.color, fontWeight: 700, fontSize: 13, display: 'block', mb: 0.5 }}
        >
          {t(s.labelKey)}
        </Typography>
        <Typography variant="body1" component="div">
          <RichText text={body} />
        </Typography>
      </Box>
    </Box>
  );
}
