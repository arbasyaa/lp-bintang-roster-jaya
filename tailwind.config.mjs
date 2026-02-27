/**
 * Tailwind CSS v4 — Konfigurasi Palet Warna Kustom
 * --------------------------------------------------------------------------
 * Tailwind v4 menggunakan pendekatan CSS-first (@theme di global.css),
 * namun file ini disediakan sebagai referensi design-token dan dimuat
 * melalui directive @config di global.css agar warna kustom dapat digunakan
 * sebagai utility class (bg-bone, text-charcoal, dst.).
 * --------------------------------------------------------------------------
 * Palet:
 *   Putih Tulang  → #F5F5F0  (bone)
 *   Abu-abu Semen → #A9A9A9  (cement)
 *   Monokrom Gelap → #2C2C2C (charcoal)
 *   Hitam Pekat    → #1A1A1A (dark)
 *   Emerald CTA    → #047857 (emerald-cta)
 */

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        bone: '#F5F5F0',
        cement: '#A9A9A9',
        charcoal: '#2C2C2C',
        dark: '#1A1A1A',
        'emerald-cta': '#047857',
      },
    },
  },
};
