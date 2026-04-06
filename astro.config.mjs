import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// astro.config.mjs
export default defineConfig({
  site: 'https://LONYCODE.github.io',
  base: '/GOLDEN_GLASS', // تأكد أنها تطابق اسم الريبو حرفياً
  integrations: [tailwind()],
});