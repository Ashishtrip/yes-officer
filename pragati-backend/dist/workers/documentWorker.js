"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentWorker = void 0;
const bullmq_1 = require("bullmq");
const DocumentProcessingService_1 = require("../services/DocumentProcessingService");
const queue_1 = require("../config/queue");
exports.documentWorker = new bullmq_1.Worker('DocumentVerificationQueue', async (job) => {
    const { documentId, documentKey, mimeType, bidId } = job.data;
    console.log(`[Worker] Picked up job ${job.id} for document ${documentId}`);
    await DocumentProcessingService_1.documentProcessingService.processDocument(documentId, documentKey, mimeType, bidId);
}, {
    connection: queue_1.redisConnection,
    concurrency: 5,
});
exports.documentWorker.on('completed', (job) => {
    console.log(`[Worker] Job ${job.id} completed successfully`);
});
exports.documentWorker.on('failed', (job, err) => {
    console.error(`[Worker] Job ${job?.id} failed with error:`, err);
});
