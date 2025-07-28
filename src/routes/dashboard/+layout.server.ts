import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ locals }) => {
	const session = await locals.auth();

	if (!session?.user?.name) {
		console.log('No user found');
		redirect(303, '/');
	}

	console.log(session);

	return {
		session
	};
};
