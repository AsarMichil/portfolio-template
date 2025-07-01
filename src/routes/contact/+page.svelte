<script lang="ts">
	import { getSiteConfig } from '$lib/utils/content';
	import ContactForm from '$lib/components/ContactForm.svelte';

	const config = getSiteConfig();
</script>

<svelte:head>
	<title>Contact - {config.name}</title>
	<meta name="description" content="Get in touch with {config.name}" />
</svelte:head>

<!-- Page Header -->
<section class="border-b-2 border-black py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="mb-4 text-2xl font-bold lowercase md:text-3xl lg:text-4xl">get in touch</h1>
			<p class="text-base md:text-lg">by saying hello</p>
		</div>
	</div>
</section>

<!-- Contact Content -->
<section class="py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- Contact Information -->
			<div>
				<h2 class="mb-6 text-2xl font-bold lowercase md:text-3xl lg:text-4xl">let's talk</h2>
				<div class="space-y-6">
					<p class="text-base leading-relaxed text-stone-800 md:text-lg">
						whether you have a project in mind, want to collaborate, or just want to say hello, i'd
						love to hear from you.
					</p>

					<!-- Contact Methods -->
					<div class="space-y-4">
						<div>
							<h3 class="mb-2 text-lg font-bold lowercase">email</h3>
							<p class="text-base leading-relaxed text-stone-800 md:text-lg">
								<a href="mailto:{config.email}" class="hover:text-primary transition-colors">
									{config.email}
								</a>
							</p>
						</div>

						{#if config.location}
							<div>
								<h3 class="mb-2 text-lg font-bold lowercase">location</h3>
								<p class="text-base leading-relaxed text-stone-800 md:text-lg">{config.location}</p>
							</div>
						{/if}

						<!-- Social Links -->
						{#if config.social}
							<div>
								<h3 class="mb-2 text-lg font-bold lowercase">social</h3>
								<div class="flex flex-wrap gap-4">
									{#if config.social.github}
										<a
											href="https://github.com/{config.social.github}"
											class="text-base leading-relaxed text-stone-800 transition-colors hover:text-white md:text-lg"
											target="_blank"
											rel="noopener noreferrer"
										>
											github
										</a>
									{/if}
									{#if config.social.linkedin}
										<a
											href="https://linkedin.com/in/{config.social.linkedin}"
											class="text-base leading-relaxed text-stone-800 transition-colors hover:text-white md:text-lg"
											target="_blank"
											rel="noopener noreferrer"
										>
											linkedin
										</a>
									{/if}
									{#if config.social.twitter}
										<a
											href="https://twitter.com/{config.social.twitter}"
											class="text-base leading-relaxed text-stone-800 transition-colors hover:text-white md:text-lg"
											target="_blank"
											rel="noopener noreferrer"
										>
											twitter
										</a>
									{/if}
									{#if config.social.instagram}
										<a
											href="https://instagram.com/{config.social.instagram}"
											class="text-base leading-relaxed text-stone-800 transition-colors hover:text-white md:text-lg"
											target="_blank"
											rel="noopener noreferrer"
										>
											instagram
										</a>
									{/if}
								</div>
							</div>
						{/if}
					</div>

					<!-- Response Time -->
					<div class="border-2 border-stone-200 bg-stone-50 p-6">
						<h3 class="mb-2 text-lg font-bold lowercase">response time</h3>
						<p class="text-sm text-stone-800 md:text-base">
							i typically respond to emails within 24-48 hours. if you need something urgent,
							mention it in your message.
						</p>
					</div>
				</div>
			</div>

			<!-- Contact Form -->
			<div>
				<ContactForm />
			</div>
		</div>
	</div>
</section>

<!-- Additional Info -->
<section class="bg-stone-50 py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 text-2xl font-bold lowercase md:text-3xl lg:text-4xl">
			open for opportunities
		</h2>
		<p class="mb-8 text-base leading-relaxed text-stone-800 md:text-lg">
			i'm always interested in hearing about new projects, collaborations, and opportunities. don't
			hesitate to reach out if you think we might be a good fit.
		</p>
		<div class="flex flex-wrap justify-center gap-4">
			<span class="border-2 border-stone-200 bg-white px-4 py-2 text-sm text-stone-800 md:text-base"
				>freelance projects</span
			>
			<span class="border-2 border-stone-200 bg-white px-4 py-2 text-sm text-stone-800 md:text-base"
				>full-time roles</span
			>
			<span class="border-2 border-stone-200 bg-white px-4 py-2 text-sm text-stone-800 md:text-base"
				>consulting</span
			>
			<span class="border-2 border-stone-200 bg-white px-4 py-2 text-sm text-stone-800 md:text-base"
				>collaborations</span
			>
		</div>
	</div>
</section>
