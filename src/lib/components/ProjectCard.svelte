<script>
	export let project;
</script>

<article
	class="overflow-hidden border-2 border-stone-500 rounded-lg bg-white p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
>
	<!-- Project Image -->
	<div class="aspect-[4/3] overflow-hidden bg-gray-100">
		<img
			src="/content/images/projects/{project.thumbnail}"
			alt={project.title}
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</div>

	<!-- Project Details -->
	<div class="p-6">
		<div class="mb-3">
			<h3 class="mb-2 text-xl font-bold lowercase md:text-2xl">
				<a href="/portfolio/{project.slug}" class="hover:text-primary transition-colors">
					{project.title}
				</a>
			</h3>
			<p class="text-sm text-gray-600 md:text-base">{project.description}</p>
		</div>

		<!-- Tags -->
		{#if project.tags && project.tags.length > 0}
			<div class="mb-4 flex flex-wrap gap-2">
				{#each project.tags as tag}
					<span
						class="font-body bg-gray-100 px-2 py-1 text-xs uppercase tracking-wide text-gray-700"
					>
						{tag}
					</span>
				{/each}
			</div>
		{/if}

		<!-- Action Links -->
		<div class="flex items-center justify-between">
			<a
				href="/portfolio/{project.slug}"
				class="hover:text-primary text-sm font-bold uppercase tracking-wide text-gray-900 transition-colors"
			>
				view case study →
			</a>

			<div class="flex items-center space-x-3">
				{#if project.link}
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						class="hover:text-primary text-xs uppercase tracking-wide text-gray-600 transition-colors"
						aria-label="View live project"
					>
						live
					</a>
				{/if}
				{#if project.github}
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						class="hover:text-primary text-xs uppercase tracking-wide text-gray-600 transition-colors"
						aria-label="View project code"
					>
						code
					</a>
				{/if}
			</div>
		</div>
	</div>
</article>
