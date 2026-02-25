import { 
    pgTable,
    uuid, 
    varchar,
    timestamp
} from "drizzle-orm/pg-core";
import { users } from "./user.schema";

export const authProviders = pgTable('auth_providers', { 
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
        .notNull()
        .references(() => users.id, { onDelete: 'cascade' }),
    provider: varchar('provider', { length: 255 }).notNull(),
    providerAccountId: varchar('provider_account_id', { length: 255 }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()
})