<script lang="ts">
	import { getSiteConfig } from '$lib/utils/content';

	const config = getSiteConfig();

	const { data } = $props();
	const content = $derived(data.content);
	const meta = $derived(data.meta);
	$inspect(data);
</script>

<svelte:head>
	{#if meta}
		<title>{meta.title} - {config.name}</title>
		<meta name="description" content={meta.description} />
	{:else}
		<title>Project - {config.name}</title>
	{/if}
</svelte:head>

{#if content}
	<!-- Back Navigation -->
	<section class="border-b-2 border-black py-6">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<a
				href="/portfolio"
				class="hover:text-bright-yellow inline-flex items-center text-sm font-bold uppercase tracking-wide transition-colors"
			>
				← back to portfolio
			</a>
		</div>
	</section>

	<!-- Project Header -->
	<section class="border-b-2 border-black py-12 md:py-20 lg:py-24">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="max-w-4xl">
				<h1 class="mb-2 text-2xl font-bold lowercase md:text-3xl lg:text-4xl">{meta.title}</h1>
				<p class="mb-6 text-xl text-stone-800 md:text-2xl">case study</p>
				<p class="mb-8 text-base leading-relaxed text-stone-800 md:text-lg">{meta.description}</p>

				<!-- Project Meta -->
				<div class="mb-8 flex flex-wrap gap-6">
					<div>
						<h3 class="mb-1 text-sm font-bold lowercase">date</h3>
						<p class="text-sm text-stone-800 md:text-base">
							{new Date(meta.date).toLocaleDateString()}
						</p>
					</div>

					{#if meta.tags && meta.tags.length > 0}
						<div>
							<h3 class="mb-1 text-sm font-bold lowercase">tags</h3>
							<div class="flex flex-wrap gap-2">
								{#each meta.tags as tag}
									<span
										class="rounded-md bg-stone-100 px-2 py-1 text-xs uppercase tracking-wide text-stone-800"
									>
										{tag}
									</span>
								{/each}
							</div>
						</div>
					{/if}
				</div>

				<!-- Project Links -->
				<div class="flex flex-wrap gap-4">
					{#if meta.link}
						<a
							href={meta.link}
							target="_blank"
							rel="noopener noreferrer"
							class="border-text-primary text-text-primary hover:bg-text-primary inline-flex items-center border-2 px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors duration-200 hover:text-white"
						>
							view live project
						</a>
					{/if}
					{#if meta.github}
						<a
							href={meta.github}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center border-2 border-gray-900 px-6 py-3 text-sm font-bold uppercase tracking-wide text-gray-900 transition-colors duration-200 hover:bg-gray-900 hover:text-white"
						>
							view code
						</a>
					{/if}
				</div>
			</div>
		</div>	
	</section>

	<!-- Hero Image -->
	{#if meta.thumbnail}
		<section class="border-b-2 border-black">
			<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div class="aspect-[16/9] overflow-hidden bg-gray-100">
					<img
						src="/content/images/projects/{meta.thumbnail}"
						alt={meta.title}
						class="h-full w-full object-cover"
					/>
				</div>
			</div>
		</section>
	{/if}

	<!-- Project Content -->
	<section class="py-12 md:py-20 lg:py-24">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<div class="prose prose-stone prose-lg max-w-none">
				<data.content />
			</div>
		</div>
	</section>

	<!-- Additional Images -->
	{#if meta.images && meta.images.length > 0}
		<section class="bg-stone-50 py-12 md:py-20 lg:py-24">
			<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<h2 class="mb-8 text-center text-2xl font-bold lowercase md:text-3xl lg:text-4xl">
					project gallery
				</h2>
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
					{#each meta.images as image}
						<div class="aspect-[4/3] overflow-hidden border-2 border-stone-200 bg-stone-100">
							<img
								src="/content/images/projects/{image}"
								alt="{meta.title} detail"
								class="h-full w-full object-cover"
								loading="lazy"
							/>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- Next Project Navigation -->
	<section class="border-t-2 border-black py-12 md:py-20 lg:py-24">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<h2 class="mb-4 text-2xl font-bold lowercase md:text-3xl lg:text-4xl">want to see more?</h2>
			<p class="mb-8 text-base leading-relaxed text-stone-800 md:text-lg">
				check out my other projects
			</p>
			<a
				href="/portfolio"
				class="bg-bright-yellow hover:bg-bright-yellow-dark inline-flex items-center px-6 py-3 text-sm font-bold uppercase tracking-wide text-stone-800 transition-colors duration-200"
			>
				view all projects
			</a>
		</div>
	</section>
{/if}
