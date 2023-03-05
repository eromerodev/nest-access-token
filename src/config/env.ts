import * as dotenv from 'dotenv';
dotenv.config();

export interface IEnvironment {
  PORT: number;
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
}

const envParseNumber = (value: string | undefined, defaultValue: number) => {
  return value !== undefined ? parseInt(value) : defaultValue;
};

export const env = (): IEnvironment => ({
  PORT: envParseNumber(process.env.PORT, 3000),
  JWT_SECRET: process.env.JWT_SECRET || '',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '120s',
});
