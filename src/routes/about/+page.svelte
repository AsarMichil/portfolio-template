<script lang="ts">
	import { getSiteConfig } from '#lib/utils/content.ts';

	import Seo from '#lib/components/Seo.svelte';

	const config = getSiteConfig();
	const { data } = $props();
</script>

<Seo title="About - {config.name}" description="Learn more about {config.name}" />

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
			<div class="max-w-80 sm:w-full lg:col-span-1 lg:w-full">
				<div
					class="relative flex aspect-square items-center justify-center overflow-visible border-2 border-black bg-stone-100"
				>
					<img
						src="/images/asar-face.png"
						alt="Asar's Face"
						class="absolute bottom-0 h-[120%] w-full object-cover object-bottom"
					/>
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

		<div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
			<div>
				<h3 class="mb-2 text-sm font-bold lowercase">languages</h3>
				<ul class="space-y-1 text-sm text-stone-800 md:text-base">
					<li>typescript</li>
					<li>swift</li>
					<li>python</li>
					<li>c++</li>
					<li>java</li>
				</ul>
			</div>

			<div>
				<h3 class="mb-2 text-sm font-bold lowercase">frameworks</h3>
				<ul class="space-y-1 text-sm text-stone-800 md:text-base">
					<li>sveltekit</li>
					<li>react</li>
					<li>swiftui</li>
					<li>node.js</li>
					<li>fastapi</li>
				</ul>
			</div>

			<div>
				<h3 class="mb-2 text-sm font-bold lowercase">infrastructure</h3>
				<ul class="space-y-1 text-sm text-stone-800 md:text-base">
					<li>postgresql</li>
					<li>redis</li>
					<li>docker</li>
					<li>aws</li>
				</ul>
			</div>
		</div>
	</div>
</section>
