<script>
	import { page } from '$app/state';
	import { getSiteConfig } from '$lib/utils/content';

	const config = getSiteConfig();
	let isMenuOpen = $state(false);
</script>

<header class="bg-primary sticky top-0 z-10 border-b-2 border-black">
	<nav class="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between">
			<!-- Logo/Name -->
			<a
				href="/"
				class="rounded-md px-2 py-1 text-xl font-bold lowercase text-gray-900 transition-colors hover:bg-black hover:text-white"
			>
				{config.name}
			</a>

			<!-- Navigation Links -->
			<div class="hidden items-center space-x-8 md:flex">
				<a
					href="/portfolio"
					class="nav-link rounded-md px-2 py-1 text-lg transition-colors duration-200 hover:bg-black hover:text-white"
					class:text-white={page.url.pathname.startsWith('/portfolio')}
					class:bg-black={page.url.pathname.startsWith('/portfolio')}
				>
					portfolio
				</a>
				<a
					href="/about"
					class="nav-link rounded-md px-2 py-1 text-lg transition-colors duration-200 hover:bg-black hover:text-white"
					class:text-white={page.url.pathname === '/about'}
					class:bg-black={page.url.pathname === '/about'}
				>
					about
				</a>
				<a
					href="/contact"
					class="nav-link rounded-md px-2 py-1 text-lg transition-colors duration-200 hover:bg-black hover:text-white"
					class:text-white={page.url.pathname === '/contact'}
					class:bg-black={page.url.pathname === '/contact'}
				>
					contact
				</a>
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="p-2 md:hidden"
				id="mobile-menu-button"
				aria-label="Toggle mobile menu"
				onclick={() => {
					isMenuOpen = !isMenuOpen;
				}}
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				</svg>
			</button>
		</div>

		<!-- Mobile Menu -->
		<div
			class="mt-4 hidden border-t-2 border-black pb-4 pt-4 md:hidden"
			id="mobile-menu"
			class:hidden={!isMenuOpen}
		>
			<div class="flex flex-col space-y-4">
				<div>
					<a
						href="/portfolio"
						class="nav-link rounded-md px-2 py-1 text-lg transition-colors duration-200 hover:bg-black hover:text-white"
						class:text-white={page.url.pathname.startsWith('/portfolio')}
						class:bg-black={page.url.pathname.startsWith('/portfolio')}
					>
						portfolio
					</a>
				</div>
				<div>
					<a
						href="/about"
						class="nav-link rounded-md px-2 py-1 text-lg transition-colors duration-200 hover:bg-black hover:text-white"
						class:text-white={page.url.pathname === '/about'}
						class:bg-black={page.url.pathname === '/about'}
					>
						about
					</a>
				</div>
				<div>
					<a
						href="/contact"
						class="nav-link rounded-md px-2 py-1 text-lg transition-colors duration-200 hover:bg-black hover:text-white"
						class:text-white={page.url.pathname === '/contact'}
						class:bg-black={page.url.pathname === '/contact'}
					>
						contact
					</a>
				</div>
			</div>
		</div>
	</nav>
</header>
