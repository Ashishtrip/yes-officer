"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentProcessingService = exports.DocumentProcessingService = void 0;
const documentai_1 = require("@google-cloud/documentai");
const fs_1 = __importDefault(require("fs"));
// Will only instantiate if needed, or we just initialize it.
const client = new documentai_1.DocumentProcessorServiceClient();
class DocumentProcessingService {
    async processDocument(filePath, mimeType) {
        const projectId = process.env.GCP_PROJECT_ID;
        const location = process.env.GCP_LOCATION || 'us';
        const processorId = process.env.GCP_PROCESSOR_ID;
        if (!projectId || !processorId) {
            console.warn('GCP Document AI not configured (GCP_PROJECT_ID or GCP_PROCESSOR_ID missing). Returning mock extracted data.');
            return {
                pan: 'ABCDE1234F',
                gstin: '29GGGGG1314R9Z6',
                extractedText: 'Mocked extracted text from document',
            };
        }
        const name = `projects/${projectId}/locations/${location}/processors/${processorId}`;
        // Read the file into memory.
        const imageFile = fs_1.default.readFileSync(filePath);
        const encodedImage = Buffer.from(imageFile).toString('base64');
        const request = {
            name,
            rawDocument: {
                content: encodedImage,
                mimeType: mimeType,
            },
        };
        try {
            const [result] = await client.processDocument(request);
            const { document } = result;
            if (!document) {
                throw new Error('No document data returned from Document AI');
            }
            // Extract entities based on standard Document AI entity types (or custom if trained)
            let pan = '';
            let gstin = '';
            if (document.entities) {
                for (const entity of document.entities) {
                    const type = entity.type?.toLowerCase();
                    if (type?.includes('pan') && entity.mentionText)
                        pan = entity.mentionText;
                    if (type?.includes('gstin') && entity.mentionText)
                        gstin = entity.mentionText;
                }
            }
            return {
                pan,
                gstin,
                extractedText: document.text,
            };
        }
        catch (error) {
            console.error('Error processing document with Google Cloud Document AI:', error);
            throw error;
        }
    }
}
exports.DocumentProcessingService = DocumentProcessingService;
exports.documentProcessingService = new DocumentProcessingService();
