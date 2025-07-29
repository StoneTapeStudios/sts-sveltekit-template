import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '../schemas';
import { exampleUsers, examplePosts } from '../data/example-data';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
	throw new Error('DATABASE_URL is not set. Make sure it is defined in your .env.local file.');
}

const client = postgres(DATABASE_URL);
const db = drizzle(client, { schema });

async function main() {
	console.log('Seeding database...');

	// Delete all existing data
	console.log('Clearing existing data...');
	await db.delete(schema.posts);
	await db.delete(schema.users);

	// Insert new data
	console.log('Inserting seed data...');
	await db.insert(schema.users).values(exampleUsers);
	await db.insert(schema.posts).values(examplePosts);

	console.log('Database seeded successfully!');

	await client.end();
}

main().catch((err) => {
	console.error('Error seeding database:', err);
	process.exit(1);
});
