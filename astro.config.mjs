import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  outDir: './docs',
	integrations: [icon()],
	vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['svgo']
    }
  }
});
