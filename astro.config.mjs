import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://your-blog.pages.dev', // update after Cloudflare Pages setup
  output: 'static',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
