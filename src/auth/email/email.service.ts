import { Injectable } from "@nestjs/common";

@Injectable()
export class EmailService {
    async sendMagicLink(email: string, link: string) {
        // Implement your email sending logic here, e.g., using nodemailer or an email service provider API
        console.log(`Sending magic link to ${email}: ${link}`);
    }
}