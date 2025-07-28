<script lang="ts">
	import { SignIn } from '@auth/sveltekit/components';
	import { page } from '$app/state';
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
		signInPage="signin"
	/>
</div>
