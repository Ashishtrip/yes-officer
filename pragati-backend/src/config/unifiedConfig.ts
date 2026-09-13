import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  PORT: z.string().default('4000'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  DATABASE_URL: z.string().default('postgresql://pragati_user:pragati_password@localhost:5432/pragati_db?schema=public'),
});

const parsedEnv = envSchema.parse(process.env);

export const config = {
  app: {
    port: parseInt(parsedEnv.PORT, 10),
    env: parsedEnv.NODE_ENV,
  },
  db: {
    url: parsedEnv.DATABASE_URL,
  },
};
