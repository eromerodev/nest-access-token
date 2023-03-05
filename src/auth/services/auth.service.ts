import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccessTokenDto } from '../dto/access-token.dto';
import { IAuthService } from './auth-service.interface';

@Injectable()
export class AuthService implements IAuthService {
  /**
   *
   */
  constructor(private readonly jwtService: JwtService) {}

  async generateAccessToken(): Promise<AccessTokenDto> {
    const claims = { email: 'user@infolat.com' };
    const accessToken: string = this.jwtService.sign(claims);
    return { accessToken };
  }
}
