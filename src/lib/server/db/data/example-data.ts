import type { NewPost, NewUser } from '../schemas';

const user1 = {
	id: crypto.randomUUID(),
	name: 'The Archivist',
	email: 'alice@example.com'
};

const user2 = {
	id: crypto.randomUUID(),
	name: 'The Observer',
	email: 'bob@example.com'
};

export const exampleUsers: NewUser[] = [user1, user2];

export const examplePosts: NewPost[] = [
	{
		title: 'Snack-Etude Live',
		content:
			// Tim‑and‑Eric style: low-grade cooking demo gone wrong
			'The host tries to make “Golden Bean Dip” on live cable. He keeps sniffing the mustard, winks at the camera, then his shirt bursts open—revealing too‑tight neon suspenders. The production assistant whispers “We’re short‑sheeted,” and the camera lingers on the mustard jar for twenty seconds. No instructions.',
		userId: user1.id
	},
	{
		title: 'Late Fee Hotline',
		content:
			// faux‑retro infomercial meets awkward small‑town hotline
			'A man steadies a rotary phone and announces, “Late fees ruin lives.” Behind him, a poorly animated horse frowns. He reads your name wrong for thirty seconds. The static hum crescendos. Then the screen flashes, “Call back tomorrow.” The horse nods awkwardly.',
		userId: user2.id
	}
];
