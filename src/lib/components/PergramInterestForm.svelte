<script lang="ts">
	const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

	let email = $state('');
	let loading = $state(false);
	let submitted = $state(false);
	let error = $state('');

	async function handleSubmit(event: Event) {
		event.preventDefault();

		const trimmed = email.trim();
		if (!EMAIL_REGEX.test(trimmed)) {
			error = 'That email address does not look right.';
			return;
		}

		loading = true;
		error = '';

		try {
			const response = await fetch('/api/pergram-interest', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email: trimmed })
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || 'Something went wrong. Please try again.');
			}

			submitted = true;
			email = '';
		} catch (err) {
			error = err instanceof Error ? err.message : 'An unexpected error occurred.';
		} finally {
			loading = false;
		}
	}
</script>

<section id="early-access" class="scroll-mt-16 border-t border-neutral-200 bg-neutral-50">
	<div class="mx-auto max-w-3xl px-6 py-16 md:py-24">
		<h2 class="text-2xl font-bold tracking-tight md:text-3xl">Interested?</h2>
		<p class="mt-4 max-w-xl text-lg leading-snug text-neutral-700">
			Put down your email for early access!
		</p>

		{#if submitted}
			<p class="mt-6 text-sm font-semibold text-emerald-600">
				You're on the list — I'll be in touch when PerGram is ready.
			</p>
		{:else}
			<form onsubmit={handleSubmit} class="mt-6 flex max-w-md flex-wrap items-start gap-3">
				<label for="pergram-email" class="sr-only">Email address</label>
				<input
					type="email"
					id="pergram-email"
					name="email"
					bind:value={email}
					required
					disabled={loading}
					autocomplete="email"
					placeholder="you@example.com"
					class="min-w-0 flex-1 border-b border-neutral-300 bg-transparent py-3 text-base transition-colors placeholder:text-neutral-400 focus:border-black focus:outline-none disabled:opacity-50"
				/>
				<button
					type="submit"
					disabled={loading}
					class="shrink-0 rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-50"
				>
					{loading ? 'Sending…' : 'Submit'}
				</button>
			</form>

			{#if error}
				<p class="mt-3 text-sm text-red-600">{error}</p>
			{/if}
		{/if}
	</div>
</section>
