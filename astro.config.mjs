import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://rainersimon.io',
  outDir: './docs',
	integrations: [icon(), react(), sitemap()],
	vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['svgo']
    }
  }
});
