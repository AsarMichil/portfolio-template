<script lang="ts">
	import PergramInterestForm from '$lib/components/PergramInterestForm.svelte';

	const screens = [
		{
			src: '/pergram/screens/scan.png',
			alt: 'The camera reading a shelf tag that says extra lean ground beef, $24.22 per kilogram, with $2.42 per 100 g shown above it',
			caption: 'Point at the tag. $24.22/kg comes back as $2.42/100g, with no button to press.'
		},
		{
			src: '/pergram/screens/verdict-bad.png',
			alt: 'The Check screen reading BAD, $11.02 per kilogram, against a good price of $1.80 per kilogram',
			caption: '$5 for a pound of bananas is $11.02/kg. Your price was $1.80. Bad.'
		},
		{
			src: '/pergram/screens/items.png',
			alt: 'A searchable list of groceries, each with a saved good price per kilogram',
			caption: 'The things you buy often, each with the price you decided was good.'
		}
	];
</script>

<svelte:head>
	<title>PerGram Go — a quick check on grocery prices</title>
	<meta
		name="description"
		content="PerGram Go is a unit-price sanity checker for Canadian grocery shopping. Type or scan a shelf price, get an instant verdict: good, meh, or bad. No account, no network, all on your device."
	/>
	<meta property="og:title" content="PerGram Go — a quick check on grocery prices" />
	<meta
		property="og:description"
		content="Type or scan a shelf price and PerGram Go tells you whether it beats the price you set. On your device, offline, no account."
	/>
	<meta property="og:image" content="/pergram/icon-256.png" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<!-- Hero -->
<section class="mx-auto max-w-3xl px-6 pt-16 pb-16 md:pt-32">
	<div class="grid items-center gap-12 md:grid-cols-2">
		<div>
			<h1 class="text-5xl leading-none font-medium tracking-tighter md:text-7xl">
				A quick check on<br />grocery prices.
			</h1>
			<p class="mt-6 max-w-xl text-lg leading-snug text-stone-700">
				Type or scan a shelf price. PerGram Go puts it in one unit you can actually compare, and
				tells you whether it beats the price you set.
			</p>

			<div class="mt-10">
				<p class="text-xs font-semibold tracking-widest text-stone-400 uppercase">
					Coming to iPhone
				</p>
				<a
					href="#early-access"
					class="mt-4 inline-block rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
				>
					Get early access
				</a>
			</div>
		</div>

		<figure class="mx-auto w-full max-w-[15rem]">
			<img
				src="/pergram/screens/verdict-good.png"
				alt="The Check screen reading GOOD, $1.10 per kilogram, against a good price of $1.80 per kilogram"
				width="1206"
				height="2622"
				class="w-full rounded-2xl"
			/>
			<figcaption class="mt-3 text-sm leading-snug text-stone-700">
				A dollar for two pounds of bananas is $1.10/kg. You said $1.80 was good, so: good.
			</figcaption>
		</figure>
	</div>
</section>

<!-- Screenshots -->
<section class="bg-white">
	<div class="mx-auto max-w-3xl px-6 py-16 md:py-24">
		<p class="text-xs font-semibold tracking-widest text-stone-400 uppercase">In the app</p>

		<div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
			{#each screens as shot}
				<figure>
					<img
						src={shot.src}
						alt={shot.alt}
						width="1206"
						height="2622"
						loading="lazy"
						class="w-full rounded-2xl"
					/>
					<figcaption class="mt-3 text-sm leading-snug text-stone-700">{shot.caption}</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>

<!-- How it works -->
<section class="mx-auto max-w-3xl px-6 py-16 md:py-24">
	<h2 class="text-2xl font-bold tracking-tight md:text-3xl">How it works</h2>
	<div class="mt-10 space-y-10">
		<div class="flex gap-8">
			<span class="w-8 shrink-0 font-mono text-sm text-stone-400 tabular-nums">01</span>
			<div>
				<h3 class="text-lg font-medium">Set your good price</h3>
				<p class="mt-1 max-w-xl text-lg leading-snug text-stone-700">
					Pick something you buy often and decide what a good deal looks like. Bananas under
					$1.80/kg, say. The app ships with a list of common groceries and a starting price for
					each, so you are editing a number rather than inventing one.
				</p>
			</div>
		</div>
		<div class="flex gap-8">
			<span class="w-8 shrink-0 font-mono text-sm text-stone-400 tabular-nums">02</span>
			<div>
				<h3 class="text-lg font-medium">Type or scan the shelf price</h3>
				<p class="mt-1 max-w-xl text-lg leading-snug text-stone-700">
					Point the camera at the tag and the fields fill on their own, or punch it in on the
					keypad. Grams, kilos, pounds, ounces, millilitres, litres, or plain count, whichever the
					tag happens to use.
				</p>
			</div>
		</div>
		<div class="flex gap-8">
			<span class="w-8 shrink-0 font-mono text-sm text-stone-400 tabular-nums">03</span>
			<div>
				<h3 class="text-lg font-medium">See where it lands</h3>
				<div class="mt-2 space-y-2 text-lg leading-snug text-stone-700">
					<p class="flex items-center gap-3">
						<span class="size-2 shrink-0 rounded-full bg-emerald-600"></span>
						<span><span class="font-medium">Good</span>: at or under your price</span>
					</p>
					<p class="flex items-center gap-3">
						<span class="size-2 shrink-0 rounded-full bg-amber-600"></span>
						<span><span class="font-medium">Meh</span>: close but not quite</span>
					</p>
					<p class="flex items-center gap-3">
						<span class="size-2 shrink-0 rounded-full bg-red-500"></span>
						<span><span class="font-medium">Bad</span>: you could probably do better</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Details -->
<section>
	<div class="mx-auto max-w-3xl px-6 py-16 md:py-24">
		<h2 class="text-2xl font-bold tracking-tight md:text-3xl">The awkward tags, too</h2>
		<div class="mt-8 grid gap-8 sm:grid-cols-2">
			<div>
				<h3 class="text-lg font-medium">Both official languages</h3>
				<p class="mt-1 text-lg leading-snug text-stone-700">
					Canadian shelf tags are bilingual by law, so the reader handles the French wording
					alongside the English.
				</p>
			</div>
			<div>
				<h3 class="text-lg font-medium">Whatever unit the store picked</h3>
				<p class="mt-1 text-lg leading-snug text-stone-700">
					A big price with a tiny /lb, a random-weight meat label, a bottle priced per 100 mL, 2 for
					$5. It is all the same number underneath.
				</p>
			</div>
			<div>
				<h3 class="text-lg font-medium">Read it your way</h3>
				<p class="mt-1 text-lg leading-snug text-stone-700">
					Show the result per 100 g, per kilo, or per pound. Change your mind whenever; it is one
					tap, and the whole app follows.
				</p>
			</div>
			<div>
				<h3 class="text-lg font-medium">Hold a price to beat</h3>
				<p class="mt-1 text-lg leading-snug text-stone-700">
					Pin the price in front of you, walk to the other end of the aisle, and check the next one
					against it.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Why I made it -->
<section class="bg-white">
	<div class="mx-auto max-w-3xl px-6 py-16 md:py-24">
		<h2 class="text-2xl font-bold tracking-tight md:text-3xl">Why I made it</h2>
		<p class="mt-4 max-w-xl text-lg leading-snug text-stone-700">
			Despite my brief stint of being a <a
				href="https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/faculty-science/bachelor-science/mathematics"
				target="_blank"
				rel="noopener noreferrer"
				class="text-emerald-500 hover:text-emerald-600">math major</a
			>, I Do Not Want To Do Division in The Meat Aisle. So I built the small thing I wanted: set
			your price once, and let the phone handle the math.
		</p>
	</div>
</section>

<!-- Privacy note -->
<section>
	<div class="mx-auto max-w-3xl px-6 py-16 md:py-24">
		<h2 class="text-2xl font-bold tracking-tight md:text-3xl">It stays on your phone</h2>
		<p class="mt-4 max-w-xl text-lg leading-snug text-stone-700">
			PerGram Go makes no network requests at all. There is no account, no sign-up, and no
			analytics. Camera frames are read on the device and never stored or sent anywhere, which also
			means the whole thing works in a basement aisle with no signal.
		</p>
		<a
			href="/pergram/privacy-policy"
			class="mt-6 inline-block text-sm font-medium underline underline-offset-4 transition-colors hover:text-stone-500"
		>
			Read the full privacy policy
		</a>
	</div>
</section>

<!-- Early access signup -->
<PergramInterestForm />
