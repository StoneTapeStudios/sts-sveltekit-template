import type { NewPost, NewUser } from '../schemas';

export const testUsers: NewUser[] = [
	{
		id: 'e6a88a91-9126-4475-8153-431b9845c818',
		name: 'John Doe',
		email: 'john.doe@example.com'
	},
	{
		id: '3699e075-802b-424a-9df4-367c33159074',
		name: 'Jane Smith',
		email: 'jane.smith@example.com'
	}
];

export const testPosts: NewPost[] = [
	{
		title: 'First Post',
		content: 'This is the content of the first post by John Doe.',
		userId: 'e6a88a91-9126-4475-8153-431b9845c818'
	},
	{
		title: 'A second post by John',
		content: 'This is another post to test with.',
		userId: 'e6a88a91-9126-4475-8153-431b9845c818'
	},
	{
		title: 'Hello from Jane',
		content: "Jane Smith's first post on this platform!",
		userId: '3699e075-802b-424a-9df4-367c33159074'
	}
];
