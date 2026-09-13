import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import fs from 'fs';
import path from 'path';

const s3Client = new S3Client({
  endpoint: 'http://localhost:9000',
  region: 'us-east-1',
  credentials: {
    accessKeyId: 'minioadmin',
    secretAccessKey: 'minioadmin',
  },
  forcePathStyle: true, // Required for MinIO
});

const BUCKET_NAME = 'bidder-documents';

export class StorageService {
  /**
   * Uploads a file from the local filesystem to MinIO.
   * @param localFilePath The absolute path of the local file.
   * @param destinationKey The S3 key (e.g. 'bids/bid_123/GST_CERT.pdf').
   * @param mimeType The MIME type of the file.
   * @returns The S3 key of the uploaded object.
   */
  async uploadFile(localFilePath: string, destinationKey: string, mimeType: string): Promise<string> {
    const fileStream = fs.createReadStream(localFilePath);

    const uploadParams = {
      Bucket: BUCKET_NAME,
      Key: destinationKey,
      Body: fileStream,
      ContentType: mimeType,
    };

    await s3Client.send(new PutObjectCommand(uploadParams));
    return destinationKey;
  }

  /**
   * Generates a pre-signed URL for temporarily accessing the file securely.
   * @param key The S3 object key.
   * @param expiresIn Expiration time in seconds (default 3600s = 1 hour).
   */
  async getSignedUrl(key: string, expiresIn = 3600): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    });
    
    return await getSignedUrl(s3Client, command, { expiresIn });
  }
}

export const storageService = new StorageService();
