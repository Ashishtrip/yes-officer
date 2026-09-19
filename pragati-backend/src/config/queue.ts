import { Queue } from 'bullmq';

// Connection details for Redis
export const redisConnection = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379', 10),
};

export const documentQueue = new Queue('DocumentVerificationQueue', {
  connection: redisConnection
});
