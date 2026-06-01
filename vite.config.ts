import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Standalone prototype — no Nx, no monorepo wiring. Runs anywhere with `pnpm dev`.
//
// `base` controls the public path. Locally it stays '/'. When the GitHub Pages
// workflow builds, it sets GITHUB_PAGES_BASE to '/<repo-name>/' so assets resolve
// correctly on https://<user>.github.io/<repo-name>/.
const base = process.env.GITHUB_PAGES_BASE || '/';

export default defineConfig({
  base,
  plugins: [react()],
  server: { port: 5173, open: true },
});
