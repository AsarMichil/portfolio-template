<script lang="ts">
	let { children } = $props();

	const year = new Date().getFullYear();
</script>

<div
	class="font-body flex min-h-screen flex-col bg-white text-black antialiased selection:bg-black selection:text-white"
>
	<!-- Wordmark header -->
	<header class="border-b border-neutral-200 bg-neutral-50">
		<div class="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
			<a href="/pergram" class="text-lg font-semibold tracking-tight">PerGram Go</a>
			<nav class="flex items-center gap-6 text-sm text-neutral-500">
				<a href="/pergram/privacy-policy" class="transition-colors hover:text-black">Privacy</a>
			</nav>
		</div>
	</header>

	<main class="flex-grow">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="border-t border-neutral-200 bg-neutral-50">
		<div class="mx-auto flex max-w-3xl flex-col items-center gap-5 px-6 py-12 text-sm">
			<nav class="flex items-center gap-6 text-neutral-500">
				<a href="/pergram" class="transition-colors hover:text-black">Home</a>
				<a href="/pergram/privacy-policy" class="transition-colors hover:text-black"
					>Privacy Policy</a
				>
				<a href="mailto:help-pergram@asarmichil.com" class="transition-colors hover:text-black"
					>Support</a
				>
			</nav>
			<p class="text-neutral-400">© {year} Asar-Michil Zuluev</p>
		</div>
	</footer>
</div>
