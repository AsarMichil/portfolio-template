import { mdsvex } from 'mdsvex';
import type { PreprocessorGroup } from 'svelte/compiler';

// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-vercel';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import devtoolsJson from 'vite-plugin-devtools-json';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			// Consult https://svelte.dev/docs/kit/integrations
			// for more information about preprocessors
			preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md'] }) as PreprocessorGroup],
			extensions: ['.svelte', '.md'],
			adapter: adapter()
		}),
		devtoolsJson()
	],
	assetsInclude: ['**/*.md']
});
