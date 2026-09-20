<script lang="ts">
	let { children } = $props();

	const year = new Date().getFullYear();
</script>

<svelte:head>
	<link rel="icon" href="/pergram/favicon-32.png" />
	<link rel="apple-touch-icon" href="/pergram/icon-256.png" />
</svelte:head>

<div
	class="font-body flex min-h-screen flex-col bg-stone-50 text-stone-900 antialiased selection:bg-stone-900 selection:text-stone-50"
>
	<!-- Wordmark header -->
	<header class="border-b border-stone-200 bg-stone-50">
		<div class="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
			<a href="/pergram" class="flex items-center gap-2.5">
				<img
					src="/pergram/icon-256.png"
					alt=""
					width="28"
					height="28"
					class="size-7 rounded-[0.4rem]"
				/>
				<span class="font-mochiy text-lg tracking-tight">PerGram Go</span>
			</a>
			<nav class="flex items-center gap-6 text-sm text-stone-500">
				<a href="/pergram/privacy-policy" class="transition-colors hover:text-black">Privacy</a>
			</nav>
		</div>
	</header>

	<main class="flex-grow">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="border-t border-stone-200 bg-stone-50">
		<div class="mx-auto flex max-w-3xl flex-col items-center gap-5 px-6 py-12 text-sm">
			<nav class="flex items-center gap-6 text-stone-500">
				<a href="/pergram" class="transition-colors hover:text-black">Home</a>
				<a href="/pergram/privacy-policy" class="transition-colors hover:text-black"
					>Privacy Policy</a
				>
				<a href="mailto:help-pergram@asarmichil.com" class="transition-colors hover:text-black"
					>Support</a
				>
			</nav>
			<p class="font-mono text-stone-400">© {year} Asar-Michil Zuluev</p>
		</div>
	</footer>
</div>
