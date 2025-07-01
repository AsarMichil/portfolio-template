<script lang="ts">
	import { getSiteConfig } from '$lib/utils/content';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	const config = getSiteConfig();

	const { data } = $props();
	const projects = $derived(data.projects);
</script>

<svelte:head>
	<title>Portfolio - {config.name}</title>
	<meta name="description" content="Portfolio of work by {config.name}" />
</svelte:head>

<!-- Page Header -->
<section class="border-b-2 border-black py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="mb-4 text-2xl font-bold lowercase md:text-3xl lg:text-4xl">portfolio</h1>
			<p class="text-base leading-relaxed md:text-lg">for showing work</p>
		</div>
	</div>
</section>

<!-- Projects Grid -->
<section class="py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		{#if projects.length === 0}
			<div class="py-12 text-center">
				<p class="text-sm text-stone-800 md:text-base">no projects found.</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-10">
				{#each projects as project}
					<ProjectCard {project} />
				{/each}
			</div>
		{/if}
	</div>
</section>

<!-- Call to Action -->
<section class="bg-stone-50 py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 text-2xl font-bold lowercase md:text-3xl lg:text-4xl">
			interested in working together?
		</h2>
		<p class="mb-8 text-base leading-relaxed text-stone-800 md:text-lg">
			i'm always open to discussing new projects and opportunities
		</p>
		<a
			href="/contact"
			class="bg-primary hover:bg-primary-dark inline-flex items-center px-6 py-3 text-sm font-bold uppercase tracking-wide text-gray-900 transition-colors duration-200"
		>
			let's talk
		</a>
	</div>
</section>
