<script lang="ts">
	import { getSiteConfig } from '#lib/utils/content.ts';
	import ProjectCard from '#lib/components/ProjectCard.svelte';
	import Seo from '#lib/components/Seo.svelte';

	const config = getSiteConfig();
	const { data } = $props();
</script>

<Seo />

<!-- Hero Section -->
<section class="border-b-2 border-black py-24 md:py-32 lg:py-40">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<h1 class="mb-6 text-5xl font-semibold lowercase md:text-7xl lg:text-9xl">
			{config.name}
		</h1>
		<p class="text-text-secondary max-w-2xl text-xl md:text-2xl">
			{config.tagline}
		</p>

		<div class="mt-8 flex flex-wrap gap-4">
			<a
				href="/portfolio"
				class="inline-flex items-center border-2 border-black bg-black px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition-colors duration-200 hover:bg-white hover:text-black"
			>
				view my work
			</a>
			{#if config.social.linkedin}
				<a
					href="https://linkedin.com/in/{config.social.linkedin}"
					target="_blank"
					rel="noopener noreferrer"
					class="border-text-primary text-text-primary hover:bg-text-primary inline-flex items-center border-2 px-6 py-3 text-sm font-bold tracking-wide uppercase transition-colors duration-200 hover:text-white"
				>
					linkedin
				</a>
			{/if}
		</div>
	</div>
</section>

<!-- Recent Work -->
<section class="py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-8 text-2xl font-bold lowercase md:text-3xl lg:text-4xl">recent work</h2>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-10">
			{#each data.projects as project (project.slug)}
				<ProjectCard {project} />
			{/each}
		</div>

		<div class="mt-12">
			<a
				href="/portfolio"
				class="inline-flex items-center text-sm font-bold tracking-wide uppercase hover:underline"
			>
				see all projects →
			</a>
		</div>
	</div>
</section>
