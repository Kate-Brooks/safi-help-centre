import { Fragment } from 'react';
import { safiTokens } from '../theme';

/**
 * Minimal inline formatter for body strings. Supports:
 *   **bold**            → <strong>
 *   [label](https://…)  → external link (opens in a new tab)
 * Keeps content authoring readable without a full Markdown engine.
 */
const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

export function RichText({ text }: { text: string }) {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          return (
            <a
              key={i}
              href={link[2]}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: safiTokens.primary, fontWeight: 600 }}
            >
              {link[1]}
            </a>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
