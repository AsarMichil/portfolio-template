<script lang="ts">
	import { page } from '$app/state';
	import { getSiteConfig } from '#lib/utils/content.ts';

	const config = getSiteConfig();

	let {
		title = config.name,
		description = config.description,
		image = '/images/og.png'
	}: { title?: string; description?: string; image?: string } = $props();

	// Link previews only resolve absolute URLs.
	const url = $derived(new URL(page.url.pathname, config.siteUrl).href);
	const imageUrl = $derived(new URL(image, config.siteUrl).href);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta property="og:site_name" content={config.name} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={imageUrl} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
