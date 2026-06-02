import { Box, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import type { ArticleSection, ContentBlock, Step } from '../content/types';
import { Callout } from './Callout';
import { MediaFigure } from './MediaFigure';
import { RichText } from './RichText';
import { safiTokens } from '../theme';

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <Typography variant="body1" sx={{ mb: 1.5 }} component="p">
          <RichText text={block.body} />
        </Typography>
      );
    case 'callout':
      return <Callout variant={block.variant} body={block.body} />;
    case 'list':
      return (
        <Box
          component={block.ordered ? 'ol' : 'ul'}
          sx={{ pl: 3, my: 1.5, '& li': { mb: 0.75 } }}
        >
          {block.items.map((item, i) => (
            <Typography key={i} component="li" variant="body1">
              <RichText text={item} />
            </Typography>
          ))}
        </Box>
      );
    case 'media':
      return <MediaFigure media={block.media} />;
    default:
      return null;
  }
}

function NumberedStep({ n, step }: { n: number; step: Step }) {
  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
      <Box
        aria-hidden
        sx={{
          flexShrink: 0,
          width: 30,
          height: 30,
          borderRadius: '50%',
          bgcolor: safiTokens.primary,
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: 14,
          mt: 0.25,
        }}
      >
        {n}
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
          {step.title}
        </Typography>
        {step.blocks.map((b, i) => (
          <Block key={i} block={b} />
        ))}
      </Box>
    </Box>
  );
}

/** A whole section rendered as a Safi purple alert dialogue (e.g. "Before you begin"). */
function AlertSection({ section }: { section: ArticleSection }) {
  return (
    <Box component="section" id={section.id} sx={{ mb: 5, scrollMarginTop: 88 }}>
      <Box
        role="note"
        sx={{
          display: 'flex',
          gap: 1.5,
          p: 2.5,
          borderRadius: 2,
          bgcolor: 'rgba(91,79,207,0.08)',
          border: `1px solid rgba(91,79,207,0.35)`,
        }}
      >
        <InfoOutlinedIcon sx={{ color: safiTokens.primary, mt: '2px' }} aria-hidden />
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: 700, color: safiTokens.primary, mb: 1 }}
          >
            {section.heading}
          </Typography>
          {section.intro && (
            <Typography variant="body1" sx={{ mb: 1.5 }}>
              {section.intro}
            </Typography>
          )}
          {section.blocks?.map((b, i) => (
            <Block key={i} block={b} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

/**
 * Renders all article sections with continuous step numbering across the whole
 * article. Each section gets a stable anchor id so the "On this page" stepper
 * and deep links work. Sections with display:'alert' render as a Safi alert.
 */
export function ArticleBody({ sections }: { sections: ArticleSection[] }) {
  let stepCounter = 0;
  return (
    <Box>
      {sections.map((section) => {
        if (section.display === 'alert') {
          return <AlertSection key={section.id} section={section} />;
        }
        return (
          <Box key={section.id} component="section" id={section.id} sx={{ mb: 5, scrollMarginTop: 88 }}>
            <Typography variant="h6" component="h2" sx={{ fontWeight: 700, mb: section.intro ? 1 : 2 }}>
              {section.heading}
            </Typography>
            {section.intro && (
              <Typography variant="body1" sx={{ mb: 2.5, color: safiTokens.textSecondary }}>
                {section.intro}
              </Typography>
            )}
            {section.blocks?.map((b, i) => (
              <Block key={i} block={b} />
            ))}
            {section.steps?.map((step) => {
              stepCounter += 1;
              return <NumberedStep key={step.title} n={stepCounter} step={step} />;
            })}
          </Box>
        );
      })}
    </Box>
  );
}
