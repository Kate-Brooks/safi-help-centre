export const en = {
  app: {
    name: 'Safi',
    helpCentre: 'Help Centre',
    backToApp: 'Back to app',
  },
  search: {
    placeholder: 'Search the Help Centre',
    noResults: 'No articles found',
  },
  language: {
    label: 'Language',
    description: 'Articles are shown in the language set here and in your app settings.',
  },
  nav: {
    home: 'Home',
    browseByCategory: 'Browse by category',
  },
  // Future contents structure — categories and their articles.
  categories: {
    gettingSetUp: 'Getting set up',
    quality: 'Quality',
    partnerInvites: 'Partner invites',
    claims: 'Claims',
    production: 'Production',
  },
  articles: {
    usersCompany: 'Users & company',
    devices: 'Devices (recommended)',
    materialSpecs: 'How to create material specifications',
    generalSettings: 'General settings',
    qualityProcess: 'Quality process & best practice',
    importLoads: 'Import loads / connect to ERP',
    collectingQualityData: 'Collecting quality data',
    createPartnerInvites: 'How to create partner invites',
    createClaims: 'How to create claims',
    warehouseView: 'Warehouse view',
    foPickerView: 'FO Picker view',
  },
  home: {
    heading: 'How can we help?',
    subheading:
      'Guides and tutorials to help you get the most out of Safi AI — from setup to advanced quality workflows.',
    browseByCategory: 'Browse by category',
    articleCount_one: '{{count}} article',
    articleCount_other: '{{count}} articles',
    comingSoon: 'Coming soon',
  },
  article: {
    onThisPage: 'On this page',
    availableOn: 'Available on',
    watchTutorial: 'Watch the tutorial',
    showTranscript: 'Show transcript',
    hideTranscript: 'Hide transcript',
    transcript: 'Video transcript',
    transcriptIntro:
      'Full transcript of the tutorial video, provided for accessibility.',
    share: 'Share',
    shareViaEmail: 'Share via email',
    shareViaWhatsApp: 'Share on WhatsApp',
    downloadPdf: 'Download PDF',
    copyLink: 'Copy link',
    linkCopied: 'Link copied',
    preparingPdf: 'Preparing PDF…',
    estReadTime: '{{minutes}} min read',
    lastUpdated: 'Last updated {{date}}',
    previous: 'Previous',
    next: 'Next',
    step: 'Step',
    note: 'Note',
    tip: 'Tip',
    important: 'Important',
    recommended: 'Recommended',
    helpfulQuestion: 'Was this article helpful?',
    helpfulYes: 'Yes',
    helpfulNo: 'No',
    helpfulThanks: 'Thanks for your feedback.',
    imagePlaceholder: 'Screenshot to be added',
    relatedToCategory: 'In {{category}}',
  },
  // Shown when an article has not yet been translated into the active language.
  translation: {
    pendingTitle: 'Not yet translated',
    pendingBody:
      'This article has not been translated into {{language}} yet. It is shown below in English. Translations are managed in the i18n content files.',
    showEnglish: 'Show English version',
  },
  plans: {
    starter: 'Starter',
    professional: 'Professional',
    enterprise: 'Enterprise',
  },
} as const;

// Maps the English shape to one where every leaf is a plain string, so other
// locales must supply the same keys but with any (translated) string value.
type Stringify<T> = { [K in keyof T]: T[K] extends string ? string : Stringify<T[K]> };
export type UiStrings = Stringify<typeof en>;
