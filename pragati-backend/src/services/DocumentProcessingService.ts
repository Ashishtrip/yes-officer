import { DocumentProcessorServiceClient } from '@google-cloud/documentai';
import { GoogleGenAI } from '@google/genai';
import { storageService } from './StorageService';
import axios from 'axios';
import prisma from '../utils/prisma';

const client = new DocumentProcessorServiceClient();
const ai = new GoogleGenAI({});

export class DocumentProcessingService {
  async processDocument(documentId: string, documentKey: string, mimeType: string, bidId: string) {
    console.log(`[DocumentProcessing] Starting async processing for document: ${documentKey}`);

    try {
      // 1. Download the file from MinIO to memory
      const signedUrl = await storageService.getSignedUrl(documentKey, 60 * 5); // 5 mins
      const response = await axios.get(signedUrl, { responseType: 'arraybuffer' });
      const encodedImage = Buffer.from(response.data).toString('base64');

      // 2. Extract Text using Google Cloud Document AI
      const projectId = process.env.GCP_PROJECT_ID;
      const location = process.env.GCP_LOCATION || 'us';
      const processorId = process.env.GCP_PROCESSOR_ID;
      
      let extractedText = '';

      if (!projectId || !processorId) {
        console.warn('GCP Document AI not configured. Using mocked text extraction.');
        if (documentKey.includes('fail')) {
            extractedText = 'Mocked extracted text containing PAN ABCDE1234FAIL and GSTIN 29GGGGG1314R9ZFAIL and UDYAM UDYAM-MH-00-FAIL';
        } else {
            extractedText = 'Mocked extracted text containing PAN ABCDE1234F and GSTIN 29GGGGG1314R9Z6 and UDYAM UDYAM-MH-00-123456';
        }
      } else {
        const name = `projects/${projectId}/locations/${location}/processors/${processorId}`;
        const request = {
          name,
          rawDocument: {
            content: encodedImage,
            mimeType: mimeType,
          },
        };
        const [result] = await client.processDocument(request);
        extractedText = result.document?.text || '';
      }

      // 3. Validate and Structure with Gemini
      const geminiPrompt = `
You are a procurement compliance AI. 
Extract the following information from the provided document text into a strictly valid JSON object.
Expected fields: "pan" (string or null), "gstin" (string or null), "document_type" (e.g. "PAN_CARD", "GST_CERTIFICATE", "INVOICE", "UNKNOWN").
Document Text:
${extractedText}
`;

      let extractedFields: any = {};
      try {
        const aiResponse = await ai.models.generateContent({
            model: 'gemini-1.5-flash',
            contents: geminiPrompt,
            config: {
                responseMimeType: 'application/json'
            }
        });
        
        extractedFields = JSON.parse(aiResponse.text || '{}');
      } catch (err: any) {
        console.error("Gemini Extraction Error:", err);
        // Fallback or handle appropriately
        extractedFields = { error: 'Gemini extraction failed' };
      }

      // 4. Update the Document record in the DB
      await prisma.document.update({
        where: { id: documentId },
        data: {
          extracted_fields: extractedFields,
          classification_label: extractedFields.document_type || 'UNKNOWN',
        }
      });
      
      console.log(`[DocumentProcessing] Successfully processed document: ${documentKey}`);

    } catch (error) {
      console.error(`[DocumentProcessing] Failed to process document ${documentKey}:`, error);
      throw error;
    }
  }
}

export const documentProcessingService = new DocumentProcessingService();
