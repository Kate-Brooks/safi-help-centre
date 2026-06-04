import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './locales/en';
import { de } from './locales/de';
import { es } from './locales/es';
import { sr } from './locales/sr';
import { it } from './locales/it';
import { pl } from './locales/pl';

/**
 * The five languages Safi supports in-app (see app Settings > Language):
 * English, Español, Deutsch, Srpski, Italiano.
 *
 * In production the active language is driven by the user's app setting. Here
 * we mirror that with a single source of truth (LanguageContext) and persist
 * the choice to localStorage so it survives reloads, exactly as a real
 * "remember my language" setting would.
 */
export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'de', label: 'Deutsch' },
  { code: 'sr', label: 'Srpski' },
  { code: 'it', label: 'Italiano' },
  { code: 'pl', label: 'Polski' },
] as const;

export type LanguageCode = (typeof SUPPORTED_LANGUAGES)[number]['code'];

const STORAGE_KEY = 'safi.help.lang';

function initialLanguage(): LanguageCode {
  const stored = (typeof localStorage !== 'undefined' &&
    localStorage.getItem(STORAGE_KEY)) as LanguageCode | null;
  if (stored && SUPPORTED_LANGUAGES.some((l) => l.code === stored)) return stored;
  return 'en';
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { ui: en },
    de: { ui: de },
    es: { ui: es },
    sr: { ui: sr },
    it: { ui: it },
    pl: { ui: pl },
  },
  lng: initialLanguage(),
  fallbackLng: 'en',
  defaultNS: 'ui',
  interpolation: { escapeValue: false },
});

i18n.on('languageChanged', (lng) => {
  if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, lng);
  if (typeof document !== 'undefined') document.documentElement.lang = lng;
});

export default i18n;
