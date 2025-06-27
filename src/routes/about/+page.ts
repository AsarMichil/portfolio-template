import { error } from '@sveltejs/kit';

export const load = async () => {
	try {
		const about = await import(`../../content/about.md`);
		return {
			content: about.default,
			meta: about.metadata
		};
	} catch (e) {
		console.error(e);
		error(404, `Could not find about, ${e instanceof Error ? e.message : 'Unknown error'}`);
	}
};
