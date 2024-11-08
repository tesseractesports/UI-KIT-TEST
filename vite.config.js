import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: './src/index.js',
      name: 'MyComponentLibrary',
      formats: ['es', 'umd'],
      fileName: (format) => `my-component-library.${format}.js` // Generates .es.js and .umd.js
    },
    rollupOptions: {
      external: ['svelte'],
      output: {
        globals: {
          svelte: 'Svelte'
        }
      }
    }
  }
});
