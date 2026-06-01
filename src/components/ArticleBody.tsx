import { Box, Typography } from '@mui/material';
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

/**
 * Renders all article sections with continuous step numbering across the whole
 * article. Each section gets a stable anchor id so the "On this page" stepper
 * and deep links work.
 */
export function ArticleBody({ sections }: { sections: ArticleSection[] }) {
  let stepCounter = 0;
  return (
    <Box>
      {sections.map((section) => (
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
      ))}
    </Box>
  );
}
