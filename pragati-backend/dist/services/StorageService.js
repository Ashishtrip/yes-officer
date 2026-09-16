"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageService = exports.StorageService = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const fs_1 = __importDefault(require("fs"));
const s3Client = new client_s3_1.S3Client({
    endpoint: 'http://localhost:9000',
    region: 'us-east-1',
    credentials: {
        accessKeyId: 'minioadmin',
        secretAccessKey: 'minioadmin',
    },
    forcePathStyle: true, // Required for MinIO
});
const BUCKET_NAME = 'bidder-documents';
class StorageService {
    /**
     * Uploads a file from the local filesystem to MinIO.
     * @param localFilePath The absolute path of the local file.
     * @param destinationKey The S3 key (e.g. 'bids/bid_123/GST_CERT.pdf').
     * @param mimeType The MIME type of the file.
     * @returns The S3 key of the uploaded object.
     */
    async uploadFile(localFilePath, destinationKey, mimeType) {
        const fileStream = fs_1.default.createReadStream(localFilePath);
        const uploadParams = {
            Bucket: BUCKET_NAME,
            Key: destinationKey,
            Body: fileStream,
            ContentType: mimeType,
        };
        await s3Client.send(new client_s3_1.PutObjectCommand(uploadParams));
        return destinationKey;
    }
    /**
     * Generates a pre-signed URL for temporarily accessing the file securely.
     * @param key The S3 object key.
     * @param expiresIn Expiration time in seconds (default 3600s = 1 hour).
     */
    async getSignedUrl(key, expiresIn = 3600) {
        const command = new client_s3_1.GetObjectCommand({
            Bucket: BUCKET_NAME,
            Key: key,
        });
        return await (0, s3_request_presigner_1.getSignedUrl)(s3Client, command, { expiresIn });
    }
}
exports.StorageService = StorageService;
exports.storageService = new StorageService();
