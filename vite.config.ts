import { defineConfig, loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Base path for the deployed site.
// On GitHub Pages, this is "/<repo-name>/". Override with VITE_BASE env var
// when the repo is renamed or you switch to a custom domain.
const DEFAULT_REPO_BASE = '/iFactorLadi/';

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = env.VITE_BASE || (command === 'build' ? DEFAULT_REPO_BASE : '/');

  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
    },
  };
});
