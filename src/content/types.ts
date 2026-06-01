import type { LanguageCode } from '../i18n';

export type PlanId = 'starter' | 'professional' | 'enterprise';

export type CategoryId =
  | 'getting-set-up'
  | 'quality'
  | 'partner-invites'
  | 'claims'
  | 'production';

/** A captioned media slot. In the prototype these render as styled placeholders. */
export interface MediaPlaceholder {
  /** screenshot or animated gif — affects the placeholder label only. */
  kind: 'screenshot' | 'gif';
  /** Localised alt text — required for WCAG. */
  alt: string;
  /** Optional localised caption shown under the media. */
  caption?: string;
  /** width / height ratio (defaults to 16/9). */
  aspect?: number;
  /** Real asset path once available, e.g. /screenshots/qc-analyse.png */
  src?: string;
}

export type ContentBlock =
  | { type: 'paragraph'; body: string }
  | { type: 'callout'; variant: 'note' | 'tip' | 'important'; body: string }
  | { type: 'media'; media: MediaPlaceholder };

export interface Step {
  title: string;
  blocks: ContentBlock[];
}

/** A section maps 1:1 to an entry in the right-hand "On this page" stepper. */
export interface ArticleSection {
  /** Stable anchor id — identical across locales so deep links survive language switches. */
  id: string;
  heading: string;
  intro?: string;
  blocks?: ContentBlock[];
  steps?: Step[];
}

export interface ArticleContent {
  title: string;
  summary: string;
  /** Full video transcript (paragraphs separated by blank lines). */
  transcript: string;
  sections: ArticleSection[];
}

export interface VideoSource {
  lang: LanguageCode;
  label: string;
  /** Drop the mp4 in /public/videos and point here. */
  src: string;
  /** Optional WebVTT captions track. */
  captionsSrc?: string;
}

export interface Article {
  slug: string;
  categoryId: CategoryId;
  /** Global position across the whole Help Centre — drives chronological prev/next. */
  order: number;
  /** i18n key under `articles.*` — the title used in nav and listings for every locale. */
  titleKey: string;
  /** Unpublished articles render as "Coming soon" and are skipped by prev/next. */
  published: boolean;
  plans: PlanId[];
  lastUpdatedISO: string;
  estReadMinutes: number;
  video?: {
    poster?: string;
    sources: VideoSource[];
  };
  /**
   * Content keyed by language. Locales absent here fall back to English and
   * surface a "not yet translated" banner — that is how ES/SR/IT behave until
   * their translations are authored.
   */
  content: Partial<Record<LanguageCode, ArticleContent>>;
}

export interface Category {
  id: CategoryId;
  /** i18n key under `categories.*` */
  labelKey: string;
  /** Material icon name (resolved in the nav). */
  icon: string;
}
