import { Controller, Inject, Post, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IAuthService } from '../services/auth-service.interface';

@Controller({ path: 'api/v1/auth', version: '1' })
@ApiTags('Auth')
export class AuthController {
  /**
   *
   */
  constructor(
    @Inject('AuthService')
    private readonly authService: IAuthService,
  ) {}

  @ApiOperation({
    summary: 'Generate access token',
    tags: ['Auth'],
  })
  @Post('token')
  @HttpCode(200)
  async generateAccessToken() {
    return await this.authService.generateAccessToken();
  }
}
