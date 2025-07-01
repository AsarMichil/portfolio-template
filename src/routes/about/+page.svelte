<script lang="ts">
	import { onMount } from 'svelte';
	import { getSiteConfig } from '$lib/utils/content';

	const config = getSiteConfig();
	const { data } = $props();
</script>

<svelte:head>
	<title>About - {config.name}</title>
	<meta name="description" content="Learn more about {config.name}" />
</svelte:head>

<!-- Page Header -->
<section class="border-b-2 border-black py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="mb-4 text-2xl font-bold lowercase md:text-3xl lg:text-4xl">about page</h1>
			<p class="text-base leading-relaxed md:text-lg">
				for learning about {config.name.split(' ')[0]}
			</p>
		</div>
	</div>
</section>

<!-- About Content -->
<section class="py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
			<!-- Profile Image Placeholder -->
			<div class="lg:col-span-1">
				<div
					class="flex aspect-square items-center justify-center border-2 border-black bg-stone-100"
				>
					<img src="/images/asar-face.JPG" alt="Asar's Face" class="h-full w-full object-cover" />
				</div>
			</div>

			<!-- About Content -->
			<div class="lg:col-span-2">
				<div class="prose prose-stone prose-lg max-w-none !text-stone-800">
					<data.content />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Skills Section -->
<section class="bg-stone-50 py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-8 text-center text-2xl font-bold lowercase md:text-3xl lg:text-4xl">
			what i work with
		</h2>

		<div class="grid grid-cols-2 gap-6 md:grid-cols-4">
			<div class="text-center">
				<h3 class="mb-2 text-sm font-bold lowercase">design</h3>
				<ul class="space-y-1 text-sm text-stone-800 md:text-base">
					<li>figma</li>
					<li>sketch</li>
					<li>adobe cc</li>
				</ul>
			</div>

			<div class="text-center">
				<h3 class="mb-2 text-sm font-bold lowercase">frontend</h3>
				<ul class="space-y-1 text-sm text-stone-800 md:text-base">
					<li>html/css</li>
					<li>javascript</li>
					<li>svelte</li>
					<li>react</li>
				</ul>
			</div>

			<div class="text-center">
				<h3 class="mb-2 text-sm font-bold lowercase">backend</h3>
				<ul class="space-y-1 text-sm text-stone-800 md:text-base">
					<li>node.js</li>
					<li>python</li>
					<li>databases</li>
				</ul>
			</div>

			<div class="text-center">
				<h3 class="mb-2 text-sm font-bold lowercase">tools</h3>
				<ul class="space-y-1 text-sm text-stone-800 md:text-base">
					<li>git</li>
					<li>vscode</li>
					<li>terminal</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Contact CTA -->
<section class="py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 text-2xl font-bold lowercase md:text-3xl lg:text-4xl">let's work together</h2>
		<p class="mb-8 text-base leading-relaxed text-stone-800 md:text-lg">
			ready to bring your ideas to life? let's have a conversation.
		</p>
		<a
			href="/contact"
			class="bg-primary hover:bg-primary-dark inline-flex items-center px-6 py-3 text-sm font-bold uppercase tracking-wide text-gray-900 transition-colors duration-200"
		>
			get in touch
		</a>
	</div>
</section>
