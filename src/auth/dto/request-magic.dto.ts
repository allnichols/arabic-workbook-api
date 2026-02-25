import { IsEmail } from 'class-validator';

export class RequestMagicDto {
    @IsEmail()
    email: string;
}