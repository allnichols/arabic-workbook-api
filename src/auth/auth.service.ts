import { Injectable, Inject } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../db/schema';
import { DB } from 'src/db/db.provider';
import { EmailService } from './email/email.service';
import { generateToken, hashToken } from './utils/token.utils';

@Injectable()
export class AuthService {

    constructor(
        @Inject(DB) 
        private db: NodePgDatabase<typeof schema>,
        private emailService: EmailService
    ) {}

    async sendMagicLink(email: string) {
        const token = generateToken();
        const hashedToken = hashToken(token);

        const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

        await this.db.insert(schema.magicLinkTokens).values({
            email,
            token: hashedToken,
            expiresAt,
        });

        const link = `https://your-frontend.com/magic?token=${token}&email=${email}`;

        await this.emailService.sendMagicLink(email, link);

        return { message: 'Magic link sent' };

    }

}
