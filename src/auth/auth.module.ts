import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DBModule } from 'src/db/db.module';
import { EmailService } from './email/email.service';

@Module({
  imports: [DBModule],
  controllers: [AuthController],
  providers: [AuthService, EmailService],
})
export class AuthModule {}
