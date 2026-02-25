import { db } from '../db/drizzle';

export const DBProvider = {
    provide: 'DB',
    useValue: db,
};