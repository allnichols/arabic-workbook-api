import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    async requestMagicLink(email: string) {
        const token = 'generate token';
        const hashToken = 'hash token';

        const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes from now

        

    }

}
