import { storageService } from '../src/services/StorageService';
import fs from 'fs';
import path from 'path';

async function testMinIO() {
  try {
    const testFilePath = path.join(__dirname, 'test.txt');
    fs.writeFileSync(testFilePath, 'Hello MinIO!');

    console.log('Uploading file to MinIO...');
    const key = await storageService.uploadFile(testFilePath, `uploads/test_${Date.now()}.txt`, 'text/plain');
    
    console.log(`File uploaded successfully with key: ${key}`);
    
    console.log('Generating presigned URL...');
    const url = await storageService.getSignedUrl(key);
    
    console.log(`Presigned URL: ${url}`);
    
    // Clean up
    fs.unlinkSync(testFilePath);
  } catch (error) {
    console.error('MinIO Test Failed:', error);
  }
}

testMinIO();
