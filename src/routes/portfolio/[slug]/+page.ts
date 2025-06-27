import { error } from '@sveltejs/kit';

export async function load({ params }) {
	console.log('params', params);
	try {
		const project = await import(`../../../content/projects/${params.slug}.md`);
		console.log('project', project);
		return {
			content: project.default,
			meta: project.metadata
		};
	} catch (e) {
		console.error(e);
		error(404, `Could not find ${params.slug}, ${e instanceof Error ? e.message : 'Unknown error'}`);
	}
}
