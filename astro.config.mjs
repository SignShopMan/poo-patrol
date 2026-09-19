// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project site: https://signshopman.github.io/poo-patrol/
// When the custom domain (poopatrolpet.com) is attached, set base to '/'
// and site to 'https://www.poopatrolpet.com'.
export default defineConfig({
  site: 'https://signshopman.github.io',
  base: '/poo-patrol',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
