import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        content: 'main.js', // Ensure this path matches your content script location
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});
