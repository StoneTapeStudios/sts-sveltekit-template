<script lang="ts">
	import { SignOut } from '@auth/sveltekit/components';

	const { data } = $props();

	console.log(data);
</script>

<h1 class="py-4 text-center text-2xl font-bold">Dashboard</h1>

<div class="flex justify-center">
	<SignOut signOutPage="api/signout" />
</div>
