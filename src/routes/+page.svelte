<script lang="ts">
	import { page } from '$app/state';
	import { SignIn } from '@auth/sveltekit/components';
	import { createQuery } from '@tanstack/svelte-query';

	type Post = {
		id: string;
		title: string;
		content: string | null;
		user: {
			name: string | null;
		};
	};

	const query = createQuery<Post[]>(() => ({
		queryKey: ['posts'],
		queryFn: async () => (await fetch('/api/posts')).json()
	}));

	const posts = $derived(query.data);
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

<div class="prose mx-auto mt-8">
	<h2>Latest Posts</h2>

	{#if query.isLoading}
		<p>Loading posts...</p>
	{:else if query.isError}
		<p class="text-red-500">Error: {query.error?.message}</p>
	{:else if posts}
		<ul>
			{#each posts as post (post.id)}
				<li>
					<h3>{post.title}</h3>
					<p>{post.content}</p>
					<small>by {post.user.name}</small>
				</li>
			{/each}
		</ul>
	{/if}
</div>
