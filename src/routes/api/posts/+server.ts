import { db } from '$lib/server/db';
import { error, json } from '@sveltejs/kit';

export async function GET() {
	try {
		const posts = await db.query.posts.findMany({
			with: {
				user: {
					columns: {
						name: true,
						email: true
					}
				}
			},
			orderBy: (posts, { desc }) => [desc(posts.createdAt)]
		});

		return json(posts);
	} catch (e) {
		console.error('Error fetching posts:', e);
		error(500, 'Could not fetch posts');
	}
}
