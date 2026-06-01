import { useEffect, useState } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { safiTokens } from '../theme';

interface Item {
  id: string;
  heading: string;
}

/**
 * Right-hand content stepper ("On this page"), à la Figma's help articles.
 * Uses scroll-spy to highlight the section currently in view; clicking an item
 * smooth-scrolls to that section.
 */
export function OnThisPage({ items }: { items: Item[] }) {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-80px 0px -65% 0px', threshold: 0 },
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  const onClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <Box component="nav" aria-label={t('article.onThisPage')} sx={{ position: 'sticky', top: 88 }}>
      <Typography sx={{ fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.05em', color: safiTokens.textSecondary, mb: 1.5 }}>
        {t('article.onThisPage')}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25, borderLeft: `2px solid ${safiTokens.divider}` }}>
        {items.map((it) => {
          const active = it.id === activeId;
          return (
            <Link
              key={it.id}
              href={`#${it.id}`}
              onClick={(e) => onClick(e, it.id)}
              underline="none"
              sx={{
                pl: 1.5,
                py: 0.5,
                ml: '-2px',
                borderLeft: `2px solid ${active ? safiTokens.primary : 'transparent'}`,
                color: active ? safiTokens.primary : safiTokens.textSecondary,
                fontWeight: active ? 700 : 500,
                fontSize: 13,
                lineHeight: 1.4,
                '&:hover': { color: safiTokens.primary },
              }}
            >
              {it.heading}
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}
