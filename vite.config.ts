import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/van-portfolio/' : '/',
  plugins: [react()],
  css: { preprocessorOptions: { scss: { api: 'modern' } } },
  build: { chunkSizeWarningLimit: 700 },
}));
