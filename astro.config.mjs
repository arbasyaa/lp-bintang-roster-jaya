// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Gunakan integrasi standar Astro

export default defineConfig({
  site: 'https://arbasyaa.github.io',
  base: '/lp-bintang-roster-jaya',
  integrations: [tailwind()], // Daftarkan tailwind di sini
  image: {
    domains: ['images.unsplash.com'],
  },
});