import { AccessTokenDto } from '../dto/access-token.dto';

export interface IAuthService {
  generateAccessToken(): Promise<AccessTokenDto>;
}
