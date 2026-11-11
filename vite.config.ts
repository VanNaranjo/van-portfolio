import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves this repo from https://vannaranjo.github.io/van-portfolio/,
// so production builds need that path prefix. Local dev runs at the root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/van-portfolio/' : '/',
  plugins: [react()],
  css: { preprocessorOptions: { scss: { api: 'modern' } } },
  // three.js (~610 kB) is lazy-loaded for the hero background only.
  build: { chunkSizeWarningLimit: 700 },
}));
