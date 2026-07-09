import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Build output is a fully static bundle — deployable to GitHub Pages,
  // Netlify, or an nginx Droplet (see ../docs/DEPLOYMENT.md).
  build: { outDir: 'dist' },
});
