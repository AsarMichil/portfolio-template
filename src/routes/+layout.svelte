<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { applyTheme } from '#lib/utils/content.ts';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';

	let { children } = $props();

	// The /pergram section is a standalone, self-contained app site with its
	// own black & white chrome — it opts out of the portfolio Header/Footer.
	const isPergram = $derived(page.url.pathname.startsWith('/pergram'));

	onMount(() => {
		applyTheme();
	});
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	{#if !isPergram}
		<link rel="icon" href="/favicon.ico" sizes="48x48" />
		<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
		<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
		<link rel="manifest" href="/site.webmanifest" />
		<meta name="theme-color" content="#facc15" />
	{/if}
</svelte:head>

{#if isPergram}
	{@render children()}
{:else}
	<div class="bg-primary flex min-h-screen flex-col">
		<Header />

		<main class="flex-grow">
			{@render children()}
		</main>

		<Footer />
	</div>
{/if}
