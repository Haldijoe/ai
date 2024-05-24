import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

export default {
  preprocess: preprocess(),
  kit: {
    target: '#svelte',
    adapter: adapter(),
    vite: {
      ssr: {
        noExternal: ['@sveltejs/kit']
      }
    }
  }
};
