import { Worker } from 'bullmq';
import { documentProcessingService } from '../services/DocumentProcessingService';
import { redisConnection } from '../config/queue';

export const documentWorker = new Worker(
  'DocumentVerificationQueue',
  async (job) => {
    const { documentId, documentKey, mimeType, bidId } = job.data;
    console.log(`[Worker] Picked up job ${job.id} for document ${documentId}`);
    
    await documentProcessingService.processDocument(documentId, documentKey, mimeType, bidId);
  },
  {
    connection: redisConnection,
    concurrency: 5,
  }
);

documentWorker.on('completed', (job) => {
  console.log(`[Worker] Job ${job.id} completed successfully`);
});

documentWorker.on('failed', (job, err) => {
  console.error(`[Worker] Job ${job?.id} failed with error:`, err);
});
