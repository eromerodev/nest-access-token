import * as dotenv from 'dotenv';
dotenv.config();

const { PORT, THROTTLE_TTL, THROTTLE_LIMIT } = process.env;

export interface IEnvironment {
  port: number;
  jwt: {
    secret: string;
    expiresIn: string;
  };
  throttle: {
    ttl: number;
    limit: number;
  };
}

export const env = (): IEnvironment => ({
  port: PORT ? Number(PORT) : 3000,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
  throttle: {
    ttl: THROTTLE_TTL ? Number(THROTTLE_TTL) : 60,
    limit: THROTTLE_LIMIT ? Number(THROTTLE_LIMIT) : 10,
  },
});

console.debug('env', env());
