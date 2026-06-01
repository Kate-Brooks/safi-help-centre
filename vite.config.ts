import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Standalone prototype — no Nx, no monorepo wiring. Runs anywhere with `pnpm dev`.
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true },
});
