// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://arbasyaa.github.io', // Tambahkan ini (Domain utama Anda)
  base: '/lp-bintang-roster-jaya',    // Tambahkan ini (Nama folder/repo Anda)
  image: {
    domains: ['images.unsplash.com'], // Ini biarkan saja, penting untuk gambar
  },
  vite: {
    plugins: [tailwindcss()],         // Ini biarkan saja, penting untuk desain
  },
});