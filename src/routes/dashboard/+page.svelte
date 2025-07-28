<script lang="ts">
	import { SignOut } from '@auth/sveltekit/components';
	import { page } from '$app/state';
</script>

<h1 class="py-4 text-center text-2xl font-bold">Dashboard</h1>

<div class="flex justify-center">
	<SignOut
		signOutPage="api/signout"
		options={{
			redirectTo: page.data.redirectTo
				? `/${decodeURIComponent(page.data.redirectTo).slice(1)}`
				: `/`
		}}
	/>
</div>
