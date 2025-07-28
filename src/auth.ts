import { dev } from '$app/environment';
import { AUTH_SECRET, AUTH_TRUST_HOST } from '$env/static/private';
import { db } from '$lib/server/db';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { SvelteKitAuth } from '@auth/sveltekit';
import Keycloak from '@auth/sveltekit/providers/keycloak';

export const { handle, signIn, signOut } = SvelteKitAuth({
	providers: [Keycloak],
	adapter: DrizzleAdapter(db),
	secret: AUTH_SECRET,
	trustHost: dev || !!AUTH_TRUST_HOST
	// callbacks: {
	// 	async session({ session, user }) {
	// 		session.user.id = user.id;
	// 		console.log(session);
	// 		return session;
	// 	}
	// }
});
