<svelte:head>
	<title>PerGram Go</title>
	<meta
		name="description"
		content="PerGram is a unit-price sanity checker for Canadian grocery shopping. Type or scan a shelf price and get an instant verdict — good, meh, or bad — all on your device."
	/>
</svelte:head>

<!-- Hero -->
<section class="mx-auto max-w-3xl px-6 pt-12 md:pt-28 pb-12">
	<h1 class="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
		Know a good price the moment you see it.
	</h1>
	<p class="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 md:text-xl">
		PerGram is a unit-price sanity checker. Type or scan a shelf price and get an instant verdict:
		<span class="text-emerald-500">good</span>, <span class="text-amber-500">meh</span>, or
		<span class="text-red-500">bad</span>
		judged against the price <em>you</em> set in the app!
	</p>

	<div class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2">
		<span class="text-sm font-medium uppercase tracking-widest text-neutral-400">
			Coming to iPhone
		</span>
		<a
			href="/pergram/privacy-policy"
			class="text-sm font-medium text-neutral-500 underline-offset-4 transition-colors hover:text-black hover:underline"
		>
			Read the privacy policy →
		</a>
	</div>
</section>

<!-- Verdict strip -->
<section class="border-y border-neutral-200 bg-neutral-50">
	<div class="mx-auto grid max-w-3xl grid-cols-3 divide-x divide-neutral-200 text-center">
		<div class="px-4 py-10">
			<p class="text-2xl font-semibold md:text-3xl text-emerald-500">Good</p>
			<p class="mt-2 text-sm text-neutral-500">At or under your price</p>
		</div>
		<div class="px-4 py-10">
			<p class="text-2xl font-semibold md:text-3xl text-amber-500">Meh</p>
			<p class="mt-2 text-sm text-neutral-500">Close, but not quite</p>
		</div>
		<div class="px-4 py-10">
			<p class="text-2xl font-semibold md:text-3xl text-red-500">Bad</p>
			<p class="mt-2 text-sm text-neutral-500">You can do better</p>
		</div>
	</div>
</section>

<!-- How it works -->
<section class="mx-auto max-w-3xl px-6 py-12">
	<h2 class="text-2xl font-semibold tracking-tight md:text-3xl">How it works</h2>
	<div class="mt-10 space-y-10">
		<div class="flex gap-6">
			<span class="w-8 shrink-0 text-lg font-semibold text-neutral-300">01</span>
			<div>
				<h3 class="text-lg font-medium">Set your good price</h3>
				<p class="mt-1 leading-relaxed text-neutral-600">
					Decide, per item, what a good deal costs you — like $0.90 / 100g for oats.
				</p>
			</div>
		</div>
		<div class="flex gap-6">
			<span class="w-8 shrink-0 text-lg font-semibold text-neutral-300">02</span>
			<div>
				<h3 class="text-lg font-medium">Type or scan the shelf price</h3>
				<p class="mt-1 leading-relaxed text-neutral-600">
					PerGram normalizes it to $/100g by default, so different sizes and packs are finally
					comparable.
				</p>
			</div>
		</div>
		<div class="flex gap-6">
			<span class="w-8 shrink-0 text-lg font-semibold text-neutral-300">03</span>
			<div>
				<h3 class="text-lg font-medium">Get an instant verdict</h3>
				<p class="mt-1 leading-relaxed text-neutral-600">
					Good, meh, or bad — measured against your own threshold. No guessing at the shelf.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Privacy note -->
<section class="border-t border-neutral-200">
	<div class="mx-auto max-w-3xl px-6 py-12">
		<h2 class="text-2xl font-semibold tracking-tight md:text-3xl">Yours, and only yours</h2>
		<p class="mt-4 max-w-xl leading-relaxed text-neutral-600">
			PerGram runs entirely on your device. There's no account, no sign-up, and nothing to collect.
		</p>
		<a
			href="/pergram/privacy-policy"
			class="mt-6 inline-block text-sm font-medium underline underline-offset-4 transition-colors hover:text-neutral-500"
		>
			Read the full privacy policy
		</a>
	</div>
</section>
