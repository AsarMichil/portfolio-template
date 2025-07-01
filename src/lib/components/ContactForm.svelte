<script lang="ts">
	let name = '';
	let email = '';
	let message = '';
	let submitted = false;
	let loading = false;
	let error = '';

	async function handleSubmit(event: Event) {
		event.preventDefault();
		
		// Reset states
		loading = true;
		error = '';
		
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name,
					email,
					message
				})
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || 'Something went wrong. Please try again.');
			}

			// Success
			submitted = true;
			name = '';
			email = '';
			message = '';
		} catch (err) {
			error = err instanceof Error ? err.message : 'An unexpected error occurred.';
		} finally {
			loading = false;
		}
	}

	function resetForm() {
		submitted = false;
		error = '';
		name = '';
		email = '';
		message = '';
	}
</script>

<div class="border-2 border-black bg-gray-50 p-8">
	<h3 class="mb-6 text-2xl font-bold lowercase md:text-3xl lg:text-4xl">say hello</h3>

	{#if submitted}
		<div class="py-8 text-center">
			<div
				class="bg-primary inline-block px-6 py-3 text-sm font-bold uppercase tracking-wide text-gray-900"
			>
				message sent successfully
			</div>
			<p class="mt-4 text-sm text-gray-600 md:text-base">
				thanks for reaching out. i'll get back to you soon.
			</p>
			<button
				on:click={resetForm}
				class="mt-4 text-sm text-gray-600 underline hover:text-gray-900"
			>
				send another message
			</button>
		</div>
	{:else}
		<form on:submit={handleSubmit} class="space-y-6">
			<!-- Error Message -->
			{#if error}
				<div class="rounded border border-red-300 bg-red-50 p-4">
					<p class="text-sm text-red-700">{error}</p>
				</div>
			{/if}

			<!-- Name Field -->
			<div>
				<label for="name" class="mb-2 block text-sm font-bold lowercase"> your name </label>
				<input
					type="text"
					id="name"
					bind:value={name}
					required
					disabled={loading}
					class="focus:border-primary w-full border-2 border-gray-200 p-3 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
					placeholder="enter your name"
				/>
			</div>

			<!-- Email Field -->
			<div>
				<label for="email" class="mb-2 block text-sm font-bold lowercase"> your email </label>
				<input
					type="email"
					id="email"
					bind:value={email}
					required
					disabled={loading}
					class="focus:border-primary w-full border-2 border-gray-200 p-3 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
					placeholder="enter your email"
				/>
			</div>

			<!-- Message Field -->
			<div>
				<label for="message" class="mb-2 block text-sm font-bold lowercase"> your message </label>
				<textarea
					id="message"
					bind:value={message}
					required
					rows="5"
					disabled={loading}
					class="focus:border-primary w-full resize-none border-2 border-gray-200 p-3 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
					placeholder="tell me about your project or just say hi"
				></textarea>
			</div>

			<!-- Submit Button -->
			<div>
				<button
					type="submit"
					disabled={loading}
					class="bg-primary hover:bg-primary-dark inline-flex items-center px-6 py-3 text-sm font-bold uppercase tracking-wide text-gray-900 transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50"
				>
					{#if loading}
						<svg class="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
								fill="none"
							></circle>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
						sending...
					{:else}
						send message
					{/if}
				</button>
			</div>
		</form>
	{/if}
</div>
