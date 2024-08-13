import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      src: '/src'
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'parens-division',
      },
      scss: {
        api: 'modern-compiler', // or "modern", "legacy"
        importers: [
          // ...
        ],
      },
    },
  },
})
