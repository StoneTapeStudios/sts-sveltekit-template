<script lang="ts">
	import { page } from '$app/state';
	import { SignIn } from '@auth/sveltekit/components';
	import { createQuery } from '@tanstack/svelte-query';

	const query = createQuery({
		queryKey: ['posts'],
		queryFn: async () => (await fetch('/api/posts')).json()
	});
</script>

<h1 class="py-4 text-center text-2xl font-bold">
	Welcome to Stone Tape Studios SvelteKit Template
</h1>
<div class="flex justify-center">
	<SignIn
		options={{
			redirectTo: page.data.redirectTo
				? `/${decodeURIComponent(page.data.redirectTo).slice(1)}`
				: `/dashboard`
		}}
		provider="keycloak"
		signInPage="api/signin"
	/>
</div>
