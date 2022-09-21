import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		csrf: {
			checkOrigin: process.env.NODE_ENV === 'production'
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
