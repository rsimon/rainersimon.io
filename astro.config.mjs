import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  outDir: './docs',
	integrations: [svelte(), tailwind()],
	vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
