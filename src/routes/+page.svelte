<script lang="ts">
	import { getSiteConfig } from '$lib/utils/content';

	const config = getSiteConfig();
</script>

<svelte:head>
	<title>{config.name}</title>
	<meta name="description" content={config.description} />
</svelte:head>

<!-- Hero Section -->
<section class="bg-surface border-border border-b-2 py-24 md:py-32 lg:py-40">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<h1 class="mb-6 text-5xl font-semibold md:text-7xl lg:text-9xl">
			{config.name}
		</h1>
		<p class="text-text-secondary max-w-2xl text-xl md:text-2xl">
			{config.tagline}
		</p>

		<!-- Primary CTA -->
		<div class="mt-12 flex flex-wrap justify-center gap-4">
			<a
				href="/portfolio"
				class="bg-primary hover:bg-black hover:text-white inline-flex items-center px-6 py-3 text-sm font-bold uppercase tracking-wide text-gray-900 transition-colors duration-200"
			>
				view my work
			</a>
			<a
				href="/contact"
				class="border-text-primary text-text-primary hover:bg-text-primary inline-flex items-center border-2 px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors duration-200 hover:text-white"
			>
				get in touch
			</a>
		</div>
	</div>
</section>

<!-- Quick Navigation -->
<section class="py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<!-- Portfolio Link -->
			<div class="group text-center md:text-left">
				<h2 class="mb-4 text-2xl md:text-3xl lg:text-4xl">
					<a href="/portfolio" class="transition-colors group-hover:text-white"> portfolio </a>
				</h2>
				<p class="text-text-secondary mb-6 text-base leading-relaxed md:text-lg">
					for showing work
				</p>
				<a
					href="/portfolio"
					class="hover:text-white inline-flex items-center text-sm font-bold uppercase tracking-wide transition-colors"
				>
					view projects →
				</a>
			</div>

			<!-- About Link -->
			<div class="group text-center md:text-left">
				<h2 class="mb-4 text-2xl md:text-3xl lg:text-4xl">
					<a href="/about" class="transition-colors group-hover:text-white"> about page </a>
				</h2>
				<p class="text-text-secondary mb-6 text-base leading-relaxed md:text-lg">
					for learning about {config.name.split(' ')[0]}
				</p>
				<a
					href="/about"
					class="hover:text-white inline-flex items-center text-sm font-bold uppercase tracking-wide transition-colors"
				>
					learn more →
				</a>
			</div>

			<!-- Contact Link -->
			<div class="group text-center md:text-left">
				<h2 class=" mb-4 text-2xl md:text-3xl lg:text-4xl">
					<a href="/contact" class="transition-colors group-hover:text-white"> get in touch </a>
				</h2>
				<p class="text-text-secondary mb-6 text-base leading-relaxed md:text-lg">by saying hello</p>
				<a
					href="/contact"
					class="hover:text-white inline-flex items-center text-sm font-bold uppercase tracking-wide transition-colors"
				>
					say hello →
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Featured Work Teaser -->
<section class="bg-surface py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-2xl md:text-3xl lg:text-4xl">recent work</h2>
			<p class="text-text-secondary text-base leading-relaxed md:text-lg">
				a selection of projects i'm proud of
			</p>
		</div>

		<div class="text-center">
			<a
				href="/portfolio"
				class="bg-primary hover:bg-primary-dark inline-flex items-center px-6 py-3 text-sm font-bold uppercase tracking-wide text-gray-900 transition-colors duration-200"
			>
				see all projects
			</a>
		</div>
	</div>
</section>
