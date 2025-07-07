import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$assets: './src/lib/assets',
			$components: './src/lib/components',
			$constants: './src/lib/utils/constants'
		}
	}
};

export default config;
