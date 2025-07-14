import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/cybernothing-terminal-game/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  },
  publicDir: 'public'
});