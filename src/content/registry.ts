import type { Article, Category } from './types';
import { collectingQualityDataEn } from './articles/collectingQualityData.en';
import { collectingQualityDataDe } from './articles/collectingQualityData.de';
import { collectingQualityDataPl } from './articles/collectingQualityData.pl';
import { collectingQualityDataIt } from './articles/collectingQualityData.it';

/**
 * Help Centre information architecture.
 *
 * Categories and ordering mirror the planned contents structure. Only
 * "Collecting quality data" is authored so far; everything else is a published:
 * false stub that renders as "Coming soon" and is skipped by prev/next.
 *
 * To add an article: drop a content file under articles/, import its locales,
 * and register it here with the next global `order`.
 */

export const CATEGORIES: Category[] = [
  { id: 'getting-set-up', labelKey: 'categories.gettingSetUp', icon: 'RocketLaunch' },
  { id: 'quality', labelKey: 'categories.quality', icon: 'VerifiedUser' },
  { id: 'partner-invites', labelKey: 'categories.partnerInvites', icon: 'GroupAdd' },
  { id: 'claims', labelKey: 'categories.claims', icon: 'Gavel' },
  { id: 'production', labelKey: 'categories.production', icon: 'Warehouse' },
];

export const ARTICLES: Article[] = [
  // 1. Getting set up
  {
    slug: 'users-and-company',
    categoryId: 'getting-set-up',
    order: 1,
    titleKey: 'articles.usersCompany',
    published: false,
    plans: ['starter', 'professional', 'enterprise'],
    lastUpdatedISO: '2026-06-01',
    estReadMinutes: 3,
    content: {},
  },
  {
    slug: 'devices',
    categoryId: 'getting-set-up',
    order: 2,
    titleKey: 'articles.devices',
    published: false,
    plans: ['starter', 'professional', 'enterprise'],
    lastUpdatedISO: '2026-06-01',
    estReadMinutes: 3,
    content: {},
  },
  {
    slug: 'material-specifications',
    categoryId: 'getting-set-up',
    order: 3,
    titleKey: 'articles.materialSpecs',
    published: false,
    plans: ['professional', 'enterprise'],
    lastUpdatedISO: '2026-06-01',
    estReadMinutes: 4,
    content: {},
  },
  {
    slug: 'general-settings',
    categoryId: 'getting-set-up',
    order: 4,
    titleKey: 'articles.generalSettings',
    published: false,
    plans: ['starter', 'professional', 'enterprise'],
    lastUpdatedISO: '2026-06-01',
    estReadMinutes: 3,
    content: {},
  },
  // 2. Quality
  {
    slug: 'quality-process',
    categoryId: 'quality',
    order: 5,
    titleKey: 'articles.qualityProcess',
    published: false,
    plans: ['professional', 'enterprise'],
    lastUpdatedISO: '2026-06-01',
    estReadMinutes: 5,
    content: {},
  },
  {
    slug: 'import-loads',
    categoryId: 'quality',
    order: 6,
    titleKey: 'articles.importLoads',
    published: false,
    plans: ['professional', 'enterprise'],
    lastUpdatedISO: '2026-06-01',
    estReadMinutes: 5,
    content: {},
  },
  {
    // The article we are starting with.
    slug: 'collecting-quality-data',
    categoryId: 'quality',
    order: 7,
    titleKey: 'articles.collectingQualityData',
    published: true,
    plans: ['professional', 'enterprise'],
    lastUpdatedISO: '2026-06-01',
    estReadMinutes: 6,
    video: {
      // Hosted video links — the player embeds these automatically. Works with
      // Google Drive, YouTube, or Vimeo share URLs (or a direct .mp4 URL).
      //
      // IMPORTANT for Google Drive: each file must be shared
      // "Anyone with the link – Viewer", or the embed will show a sign-in / error.
      // These two point at the files already in the Safi Drive tutorial folder.
      sources: [
        {
          lang: 'en',
          label: 'English',
          // "Quality control - eng voice over, German captions.mp4"
          src: 'https://drive.google.com/file/d/1ZuMNoKeAdV50O_O7kFLjZHFFHsMGYYos/view',
        },
        {
          lang: 'de',
          label: 'Deutsch',
          // "Quality_control_tutorial-German_with_captions.mp4"
          src: 'https://drive.google.com/file/d/13EbNTneciz7badRqYTeR4veJUj8B2_DD/view',
        },
      ],
    },
    content: {
      en: collectingQualityDataEn,
      de: collectingQualityDataDe,
      pl: collectingQualityDataPl,
      it: collectingQualityDataIt,
      // es, sr: not yet authored — fall back to English with a banner.
    },
  },
  // 3. Partner invites
  {
    slug: 'create-partner-invites',
    categoryId: 'partner-invites',
    order: 8,
    titleKey: 'articles.createPartnerInvites',
    published: false,
    plans: ['professional', 'enterprise'],
    lastUpdatedISO: '2026-06-01',
    estReadMinutes: 3,
    content: {},
  },
  // 4. Claims
  {
    slug: 'create-claims',
    categoryId: 'claims',
    order: 9,
    titleKey: 'articles.createClaims',
    published: false,
    plans: ['professional', 'enterprise'],
    lastUpdatedISO: '2026-06-01',
    estReadMinutes: 4,
    content: {},
  },
  // 5. Production
  {
    slug: 'warehouse-view',
    categoryId: 'production',
    order: 10,
    titleKey: 'articles.warehouseView',
    published: false,
    plans: ['enterprise'],
    lastUpdatedISO: '2026-06-01',
    estReadMinutes: 4,
    content: {},
  },
  {
    slug: 'fo-picker-view',
    categoryId: 'production',
    order: 11,
    titleKey: 'articles.foPickerView',
    published: false,
    plans: ['enterprise'],
    lastUpdatedISO: '2026-06-01',
    estReadMinutes: 4,
    content: {},
  },
];

const byOrder = [...ARTICLES].sort((a, b) => a.order - b.order);

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function articlesInCategory(categoryId: string): Article[] {
  return byOrder.filter((a) => a.categoryId === categoryId);
}

/** Previous / next published article in chronological (outline) order. */
export function getNeighbours(slug: string): { prev?: Article; next?: Article } {
  const published = byOrder.filter((a) => a.published);
  const idx = published.findIndex((a) => a.slug === slug);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? published[idx - 1] : undefined,
    next: idx < published.length - 1 ? published[idx + 1] : undefined,
  };
}
