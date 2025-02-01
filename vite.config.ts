import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5454
  },
  css: {
    postcss: './postcss.config.js'
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
