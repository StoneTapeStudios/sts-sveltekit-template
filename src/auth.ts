import { SvelteKitAuth } from '@auth/sveltekit';
import Keycloak from '@auth/sveltekit/providers/keycloak';
import { db } from '$lib/server/db';
import { DrizzleAdapter } from '@auth/drizzle-adapter';

export const { handle, signIn, signOut } = SvelteKitAuth({
	providers: [Keycloak],
	adapter: DrizzleAdapter(db)
});
