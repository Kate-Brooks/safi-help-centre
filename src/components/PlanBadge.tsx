import { Box, Chip, Typography, Tooltip } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTranslation } from 'react-i18next';
import type { PlanId } from '../content/types';
import { safiTokens } from '../theme';

const ALL_PLANS: PlanId[] = ['starter', 'professional', 'enterprise'];

/**
 * "Who can use this feature" — shows the subscription plans the article applies
 * to, à la Figma's plan indicator at the top of an article.
 *
 * NOTE: plan names (Starter / Professional / Enterprise) are placeholders.
 * Replace with Safi's real plan tiers when known.
 */
export function PlanBadge({ plans }: { plans: PlanId[] }) {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
      <Typography sx={{ fontSize: 13, color: safiTokens.textSecondary, fontWeight: 600 }}>
        {t('article.availableOn')}:
      </Typography>
      {ALL_PLANS.map((plan) => {
        const included = plans.includes(plan);
        return (
          <Tooltip key={plan} title={t(`plans.${plan}`)} disableInteractive>
            <Chip
              size="small"
              icon={included ? <CheckCircleOutlineIcon /> : undefined}
              label={t(`plans.${plan}`)}
              variant={included ? 'filled' : 'outlined'}
              sx={{
                fontWeight: 600,
                fontSize: 12,
                ...(included
                  ? { bgcolor: 'rgba(91,79,207,0.10)', color: safiTokens.primary, '& .MuiChip-icon': { color: safiTokens.primary } }
                  : { color: safiTokens.textSecondary, opacity: 0.6, textDecoration: 'line-through' }),
              }}
            />
          </Tooltip>
        );
      })}
    </Box>
  );
}
