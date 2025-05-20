// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig, fontProviders } from 'astro/config';

import './src/types/astro.d.ts';

/** @type {import('astro').AstroUserConfig} */
const config = defineConfig({
  siteName: 'CSS Cloud Solutions',
  site: 'https://example.com',

  output: 'static',

  build: {
    assets: 'assets',
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Plus Jakarta Sans',
        weights: ['200 800'],
        styles: ['normal'],
        subsets: ['latin'],
        cssVariable: '--font-plus-jakarta',
      },
    ],
  },

  integrations: [tailwind(), sitemap()],

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        formats: ['avif', 'webp', 'png', 'jpg'],
        quality: 75,
        placeholder: 'blur',
        cacheDir: '.astro/image-cache',
        minimumCacheTTL: 60 * 60 * 24 * 7,
      },
    },
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'cdn.sanity.io'],
  },
});

export default config;
