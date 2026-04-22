<script lang="ts">
	import { getSiteConfig } from '$lib/utils/content';

	const config = getSiteConfig();
</script>

<svelte:head>
	<title>Resume - {config.name}</title>
	<meta name="description" content="Download {config.name}'s resume" />
</svelte:head>

<section class="flex flex-col items-center justify-center py-24 md:py-32 lg:py-40">
	<div class="px-4">
		<h1 class="text-6xl font-semibold lowercase md:text-7xl lg:text-9xl">resume</h1>
		<p class="text-left text-xl md:text-3xl">
			for {config.name}
		</p>
		<p class="mb-10 text-md md:text-xl">
			{config.tagline}</p>
		<a
			href="/resume/resume.pdf"
			download="Asar_Zuluev_Resume.pdf"
			class="border-text-primary text-text-primary hover:bg-text-primary inline-flex items-center gap-2 border-2 px-6 py-3 text-sm font-bold tracking-wide uppercase transition-colors duration-200 hover:text-white"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
				<polyline points="7 10 12 15 17 10" />
				<line x1="12" y1="15" x2="12" y2="3" />
			</svg>
			download resume
		</a>
		<div class="mt-8">
			<a
				href="/"
				class="text-text-secondary hover:text-text-primary text-sm tracking-wide uppercase transition-colors duration-200"
			>
				&larr; back to site
			</a>
		</div>
	</div>
</section>
