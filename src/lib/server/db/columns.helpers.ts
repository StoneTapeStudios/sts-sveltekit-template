import { timestamp } from 'drizzle-orm/pg-core';

export const ucdTimestamps = {
	updatedAt: timestamp('updated_at')
		.defaultNow()
		.$onUpdate(() => new Date()),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	deletedAt: timestamp('deleted_at')
};
