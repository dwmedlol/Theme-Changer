import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        content: 'main.js', // Ensure this path matches your content script location
        background: 'src/background.js'
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});
