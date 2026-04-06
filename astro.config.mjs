import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://LONYCODE.github.io', 
  base: '/goldenglass', 
  integrations: [tailwind()],
});