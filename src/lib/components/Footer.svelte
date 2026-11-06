<script>
	import { getSiteConfig } from '#lib/utils/content.ts';

	const config = getSiteConfig();
</script>

<footer class="mt-20 border-t-2 border-gray-200 bg-gray-50">
	<div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<!-- Contact Info -->
			<div>
				<h3 class="mb-4 text-lg font-bold lowercase">get in touch</h3>
				<div class="space-y-2">
					<p class="text-base leading-relaxed text-gray-700 md:text-lg">
						<a href="mailto:{config.email}" class="hover:text-primary transition-colors">
							{config.email}
						</a>
					</p>
					{#if config.location}
						<p class="text-sm text-gray-600 md:text-base">{config.location}</p>
					{/if}
				</div>
			</div>

			<!-- Navigation -->
			<div>
				<h3 class="mb-4 text-lg font-bold lowercase">navigate</h3>
				<div class="space-y-2">
					<p>
						<a
							href="/portfolio"
							class="hover:text-primary text-base leading-relaxed text-gray-700 transition-colors md:text-lg"
						>
							portfolio
						</a>
					</p>
					<p>
						<a
							href="/about"
							class="hover:text-primary text-base leading-relaxed text-gray-700 transition-colors md:text-lg"
						>
							about
						</a>
					</p>
					<p>
						<a
							href="/contact"
							class="hover:text-primary text-base leading-relaxed text-gray-700 transition-colors md:text-lg"
						>
							contact
						</a>
					</p>
				</div>
			</div>

			<!-- Social Links -->
			<div>
				<h3 class="mb-4 text-lg font-bold lowercase">connect</h3>
				<div class="space-y-2">
					{#if config.social.github}
						<p>
							<a
								href="https://github.com/{config.social.github}"
								class="hover:text-primary text-base leading-relaxed text-gray-700 transition-colors md:text-lg"
								target="_blank"
								rel="noopener noreferrer"
							>
								github
							</a>
						</p>
					{/if}
					{#if config.social.linkedin}
						<p>
							<a
								href="https://linkedin.com/in/{config.social.linkedin}"
								class="hover:text-primary text-base leading-relaxed text-gray-700 transition-colors md:text-lg"
								target="_blank"
								rel="noopener noreferrer"
							>
								linkedin
							</a>
						</p>
					{/if}
					{#if config.social.twitter}
						<p>
							<a
								href="https://twitter.com/{config.social.twitter}"
								class="hover:text-primary text-base leading-relaxed text-gray-700 transition-colors md:text-lg"
								target="_blank"
								rel="noopener noreferrer"
							>
								twitter
							</a>
						</p>
					{/if}
					{#if config.social.instagram}
						<p>
							<a
								href="https://instagram.com/{config.social.instagram}"
								class="hover:text-primary text-base leading-relaxed text-gray-700 transition-colors md:text-lg"
								target="_blank"
								rel="noopener noreferrer"
							>
								instagram
							</a>
						</p>
					{/if}
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="mt-8 border-t-2 border-gray-200 pt-8 text-center">
			<p class="text-sm text-gray-600 md:text-base">
				© {new Date().getFullYear()}
				{config.name}. no rights reserved.
			</p>
		</div>
	</div>
</footer>
