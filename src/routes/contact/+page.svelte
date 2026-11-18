<script lang="ts">
	import { getSiteConfig } from '#lib/utils/content.ts';
	import Seo from '#lib/components/Seo.svelte';

	const config = getSiteConfig();
</script>

<Seo title="Contact - {config.name}" description="Get in touch with {config.name}" />

<!-- Page Header -->
<section class="border-b-2 border-black py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="mb-4 text-2xl font-bold lowercase md:text-3xl lg:text-4xl">get in touch</h1>
			<p class="text-base md:text-lg">by saying hello</p>
		</div>
	</div>
</section>

<!-- Contact Methods -->
<section class="py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
		{#if config.social.linkedin}
			<div>
				<h2 class="mb-2 text-lg font-bold lowercase">linkedin</h2>
				<p class="mb-4 text-base leading-relaxed text-stone-800 md:text-lg">
					the best way to reach me.
				</p>
				<a
					href="https://linkedin.com/in/{config.social.linkedin}"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center border-2 border-black bg-black px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition-colors duration-200 hover:bg-white hover:text-black"
				>
					message me on linkedin
				</a>
			</div>
		{/if}

		<div>
			<h2 class="mb-2 text-lg font-bold lowercase">email</h2>
			<p class="text-base leading-relaxed text-stone-800 md:text-lg">
				for questions about this site or a project: {config.email.replace('@', ' [at] ')}
			</p>
		</div>

		{#if config.social.github}
			<div>
				<h2 class="mb-2 text-lg font-bold lowercase">github</h2>
				<p class="text-base leading-relaxed text-stone-800 md:text-lg">
					<a
						href="https://github.com/{config.social.github}"
						target="_blank"
						rel="noopener noreferrer"
						class="hover:underline"
					>
						github.com/{config.social.github}
					</a>
				</p>
			</div>
		{/if}

		{#if config.location}
			<div>
				<h2 class="mb-2 text-lg font-bold lowercase">location</h2>
				<p class="text-base leading-relaxed text-stone-800 md:text-lg">{config.location}</p>
			</div>
		{/if}
	</div>
</section>
