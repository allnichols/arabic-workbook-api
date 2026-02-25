import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RequestMagicDto } from './dto/request-magic.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('magic-link')
  async sendMagicLink(@Body()dto: RequestMagicDto) {
    return this.authService.sendMagicLink(dto.email);
  }
}
