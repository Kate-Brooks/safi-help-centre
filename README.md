# Safi Help Centre — prototype

A standalone prototype of the Safi AI Help Centre, starting with the **Collecting quality data** tutorial. It mirrors the conventions of Safi's production frontend so engineers can transfer patterns into the real app, but it is **completely independent** — it does not import from, link to, or affect the Safi codebase in any way.

> Scope: design/prototype artefact only. Built per the Safi Design skill, which mandates that prototypes never touch production source.

## Stack

Chosen to match Safi's production frontend conventions:

- **React 18** + **TypeScript**
- **Vite** bundler
- **Material UI (MUI v5)** + **Emotion** — Safi wraps MUI internally; here it's used directly
- **react-i18next** for the 5 supported languages
- **react-router-dom** for routing
- **html2pdf.js** for client-side PDF export

It deliberately does **not** pull in Nx, Refine/TanStack Query, the OpenAPI client, or any `platform/*` package, since there is no backend — it's a self-contained static app.

## Run it

```bash
pnpm install   # or npm install
pnpm dev       # http://localhost:5173
pnpm build     # type-check + production build
pnpm preview   # serve the build
```

## What's implemented

Global traits from the brief:

- **Video at the top, written guide below** — `VideoPlayer` + `ArticleBody`.
- **Video transcript** for deaf/HoH users — toggle under the player; supports WebVTT caption tracks too.
- **Share via email / WhatsApp + download PDF** — `ShareBar`.
- **5 languages** (English, Español, Deutsch, Srpski, Italiano) driven by an app-settings-style switcher. EN + DE article content is fully authored; ES/SR/IT show a "not yet translated" banner and fall back to English until their content files are added.
- **Chronological prev/next** across the whole Help Centre outline — `ArticleNav`.
- **Responsive** across small/medium/large (sidebar collapses to a drawer on mobile; the "On this page" rail hides on small screens).

Figma-help-article inspirations:

- Numbered step-by-step instructions, short and concise.
- Right-hand **"On this page"** content stepper with scroll-spy.
- Highlighted **callouts** (Note / Tip / Important) — colour + icon + label, never colour alone.
- **Plan badge** ("Available on…") at the top showing who can use the feature.
- Media slots rendered as accessible, correctly-sized placeholders.

## Project structure

```
src/
  theme.ts                     Safi MUI theme (purple primary, type scale, a11y defaults)
  i18n/
    index.ts                   i18next setup + supported languages + persistence
    locales/{en,de,es,sr,it}.ts  UI strings (fully translated for all 5)
  content/
    types.ts                   Article / Section / Block model
    registry.ts                Categories, article list, ordering, prev/next
    articles/
      collectingQualityData.en.ts   English article content
      collectingQualityData.de.ts   German article content
  components/                  Layout, nav, video, stepper, callouts, share, etc.
  pages/
    HelpHome.tsx               Landing page (browse by category)
    ArticlePage.tsx            Article view (assembles everything)
```

## Adding content

- **New article:** create `articles/<slug>.<lang>.ts`, import it in `registry.ts`, add an `Article` entry with the next `order`, and set `published: true`.
- **New language for an existing article:** add the locale key to that article's `content` map. The banner and fallback disappear automatically.
- **Real screenshots/GIFs:** set `src` on a media block; the placeholder is replaced by the image (alt text is already carried through).
- **Videos:** see `public/videos/README.md`.

## Placeholders to confirm before real use

- **Plan names** (Starter / Professional / Enterprise) in `PlanBadge` / locale files are illustrative — swap for Safi's real tiers.
- **Colour/type tokens** in `theme.ts` are the documented approximations from the design skill; verify against the Safi UI Kit Figma variables.
- **CircularXXTT** font isn't shipped (licensed). Add the woff2 to `public/fonts` and an `@font-face` to match production exactly.
- **Screenshots** are placeholders awaiting real captures.

## Accessibility

Built to WCAG 2.1 AA per the design skill: semantic landmarks, visible focus rings, `prefers-reduced-motion` support, alt text on all media, captions/transcript for video, status conveyed by icon + label (not colour alone), and a keyboard-navigable "On this page" rail.
