import { Box, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import { useTranslation } from 'react-i18next';
import { safiTokens } from '../theme';
import { RichText } from './RichText';

type Variant = 'note' | 'tip' | 'important';

interface VariantStyle {
  accent: string; // icon, label, left border
  bg: string;
  text?: string; // body/title copy colour (defaults to theme)
  Icon: typeof InfoOutlinedIcon;
  labelKey: string;
}

const STYLES: Record<Variant, VariantStyle> = {
  note: {
    accent: safiTokens.info,
    bg: 'rgba(45,156,219,0.08)',
    Icon: InfoOutlinedIcon,
    labelKey: 'article.note',
  },
  tip: {
    // Green alert — all copy uses #1B5E20.
    accent: safiTokens.tipText,
    bg: 'rgba(27,94,32,0.08)',
    text: safiTokens.tipText,
    Icon: LightbulbOutlinedIcon,
    labelKey: 'article.tip',
  },
  important: {
    accent: safiTokens.warning,
    bg: 'rgba(245,166,35,0.10)',
    Icon: WarningAmberOutlinedIcon,
    labelKey: 'article.important',
  },
};

interface Props {
  variant: Variant;
  body?: string;
  title?: string;
  items?: string[];
}

/** Highlighted note box. Never relies on colour alone (icon + label). */
export function Callout({ variant, body, title, items }: Props) {
  const { t } = useTranslation();
  const s = STYLES[variant];
  const textColor = s.text;

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
        borderLeft: `4px solid ${s.accent}`,
      }}
    >
      <s.Icon sx={{ color: s.accent, mt: '2px' }} fontSize="small" aria-hidden />
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          component="span"
          sx={{ color: s.accent, fontWeight: 700, fontSize: 13, display: 'block', mb: 0.5 }}
        >
          {t(s.labelKey)}
        </Typography>
        {title && (
          <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5, ...(textColor && { color: textColor }) }}>
            <RichText text={title} />
          </Typography>
        )}
        {body && (
          <Typography variant="body1" component="div" sx={textColor ? { color: textColor } : undefined}>
            <RichText text={body} />
          </Typography>
        )}
        {items && items.length > 0 && (
          <Box component="ul" sx={{ pl: 3, my: 0.5, '& li': { mb: 0.5 } }}>
            {items.map((item, i) => (
              <Typography
                key={i}
                component="li"
                variant="body1"
                sx={textColor ? { color: textColor } : undefined}
              >
                <RichText text={item} />
              </Typography>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
