import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  outDir: './docs',
	integrations: [icon(), svelte(), tailwind()],
	vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
