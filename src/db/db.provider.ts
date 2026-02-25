import { db } from '../db/drizzle';

// Injection token for the Drizzle database
export const DB = 'DB';

export const DBProvider = {
    provide: DB,
    useValue: db,
};