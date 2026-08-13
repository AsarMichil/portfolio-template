<script lang="ts">
	import PergramInterestForm from '$lib/components/PergramInterestForm.svelte';
</script>

<svelte:head>
	<title>PerGram Go</title>
	<meta
		name="description"
		content="PerGram is a unit-price sanity checker for Canadian grocery shopping. Type or scan a shelf price and get an instant verdict — good, meh, or bad — all on your device."
	/>
</svelte:head>

<!-- Hero -->
<section class="mx-auto max-w-3xl px-6 pt-16 pb-16 md:pt-32">
	<h1 class="text-5xl font-bold leading-none tracking-tighter md:text-7xl">
		Know a good price<br />the moment you see it.
	</h1>
	<p class="mt-6 max-w-xl text-lg leading-snug text-neutral-700">
		Type or scan a shelf price and get an instant verdict — good, meh, or bad — judged against the
		price <em>you</em> set in the app.
	</p>

	<div class="mt-10">
		<p class="text-xs font-semibold uppercase tracking-widest text-neutral-400">Coming to iPhone</p>
		<div class="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
			<a
				href="#early-access"
				class="rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-700"
			>
				Get early access
			</a>
			<a
				href="/pergram/privacy-policy"
				class="text-sm text-neutral-400 underline-offset-4 transition-colors hover:text-black hover:underline"
			>
				Read the privacy policy →
			</a>
		</div>
	</div>
</section>

<!-- Worked example -->
<section class="border-y border-neutral-200 bg-neutral-50">
	<div class="mx-auto max-w-3xl px-6 py-16 md:py-24">
		<p class="text-xs font-semibold uppercase tracking-widest text-neutral-400">On the shelf</p>

		<div
			class="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2 text-2xl font-bold tracking-tight tabular-nums md:text-3xl"
		>
			<span>$4.49 / 500g</span>
			<span class="text-neutral-400">→</span>
			<span>$0.90 / 100g</span>
		</div>

		<div class="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
			<p class="text-lg leading-snug text-neutral-700">
				Your good price: <span class="font-bold tabular-nums text-black">$0.95 / 100g</span>
			</p>
			<span
				class="inline-flex items-center rounded-full border border-emerald-600 px-3 py-1 text-sm font-semibold text-emerald-600"
			>
				Good
			</span>
		</div>
	</div>
</section>

<!-- How it works -->
<section class="mx-auto max-w-3xl px-6 py-16 md:py-24">
	<h2 class="text-2xl font-bold tracking-tight md:text-3xl">How it works</h2>
	<div class="mt-10 space-y-8">
		<div class="flex gap-8">
			<span class="w-8 shrink-0 font-mono text-sm tabular-nums text-neutral-400">01</span>
			<div>
				<h3 class="text-lg font-semibold">Set your good price</h3>
				<p class="mt-1 max-w-xl text-lg leading-snug text-neutral-700">
					Decide, per item, what a good deal costs you — like $0.90 / 100g for oats.
				</p>
			</div>
		</div>
		<div class="flex gap-8">
			<span class="w-8 shrink-0 font-mono text-sm tabular-nums text-neutral-400">02</span>
			<div>
				<h3 class="text-lg font-semibold">Type or scan the shelf price</h3>
				<p class="mt-1 max-w-xl text-lg leading-snug text-neutral-700">
					<span class="font-mochiy">PerGram</span> normalizes it to $/100g by default, so different
					sizes and packs are finally comparable.
				</p>
			</div>
		</div>
		<div class="flex gap-8">
			<span class="w-8 shrink-0 font-mono text-sm tabular-nums text-neutral-400">03</span>
			<div>
				<h3 class="text-lg font-semibold">Get an instant verdict</h3>
				<p class="mt-1 max-w-xl text-lg leading-snug text-neutral-700">
					<span class="font-semibold text-emerald-600">Good</span> at or under your price,
					<span class="font-semibold text-amber-600">meh</span> when it's close but not quite, and
					<span class="font-semibold text-red-500">bad</span> when you can do better. No guessing at the
					shelf.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Privacy note -->
<section class="border-t border-neutral-200">
	<div class="mx-auto max-w-3xl px-6 py-16 md:py-24">
		<h2 class="text-2xl font-bold tracking-tight md:text-3xl">Yours, and only yours</h2>
		<p class="mt-4 max-w-xl text-lg leading-snug text-neutral-700">
			<span class="font-mochiy">PerGram</span> runs entirely on your device. There's no account, no sign-up,
			and nothing to collect.
		</p>
		<a
			href="/pergram/privacy-policy"
			class="mt-6 inline-block text-sm font-medium underline underline-offset-4 transition-colors hover:text-neutral-500"
		>
			Read the full privacy policy
		</a>
	</div>
</section>

<!-- Early access signup -->
<PergramInterestForm />
