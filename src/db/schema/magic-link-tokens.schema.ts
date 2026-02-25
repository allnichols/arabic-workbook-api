import { 
    pgTable, 
    uuid,
    varchar, 
    timestamp
} from "drizzle-orm/pg-core";

export const magicLinkTokens = pgTable('magic_link_tokens', {
    id: uuid('id').primaryKey().defaultRandom(),
    email: varchar('email', { length: 255 }).notNull(),
    token: varchar('token', { length: 255 }).notNull().unique(),
    expiresAt: timestamp('expires_at').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()
})