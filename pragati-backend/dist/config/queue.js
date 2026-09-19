"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentQueue = exports.redisConnection = void 0;
const bullmq_1 = require("bullmq");
// Connection details for Redis
exports.redisConnection = {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
};
exports.documentQueue = new bullmq_1.Queue('DocumentVerificationQueue', {
    connection: exports.redisConnection
});
