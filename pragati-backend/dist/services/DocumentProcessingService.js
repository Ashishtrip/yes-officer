"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentProcessingService = exports.DocumentProcessingService = void 0;
const documentai_1 = require("@google-cloud/documentai");
const genai_1 = require("@google/genai");
const StorageService_1 = require("./StorageService");
const axios_1 = __importDefault(require("axios"));
const prisma_1 = __importDefault(require("../utils/prisma"));
const client = new documentai_1.DocumentProcessorServiceClient();
const ai = new genai_1.GoogleGenAI({});
class DocumentProcessingService {
    async processDocument(documentId, documentKey, mimeType, bidId) {
        console.log(`[DocumentProcessing] Starting async processing for document: ${documentKey}`);
        try {
            // 1. Download the file from MinIO to memory
            const signedUrl = await StorageService_1.storageService.getSignedUrl(documentKey, 60 * 5); // 5 mins
            const response = await axios_1.default.get(signedUrl, { responseType: 'arraybuffer' });
            const encodedImage = Buffer.from(response.data).toString('base64');
            // 2. Extract Text using Google Cloud Document AI
            const projectId = process.env.GCP_PROJECT_ID;
            const location = process.env.GCP_LOCATION || 'us';
            const processorId = process.env.GCP_PROCESSOR_ID;
            let extractedText = '';
            if (!projectId || !processorId) {
                console.warn('GCP Document AI not configured. Using mocked text extraction.');
                extractedText = 'Mocked extracted text containing PAN ABCDE1234F and GSTIN 29GGGGG1314R9Z6';
            }
            else {
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
            let extractedFields = {};
            try {
                const aiResponse = await ai.models.generateContent({
                    model: 'gemini-2.5-pro',
                    contents: geminiPrompt,
                    config: {
                        responseMimeType: 'application/json'
                    }
                });
                extractedFields = JSON.parse(aiResponse.text || '{}');
            }
            catch (err) {
                console.error("Gemini Extraction Error:", err);
                // Fallback or handle appropriately
                extractedFields = { error: 'Gemini extraction failed' };
            }
            // 4. Update the Document record in the DB
            await prisma_1.default.document.update({
                where: { id: documentId },
                data: {
                    extracted_fields: extractedFields,
                    classification_label: extractedFields.document_type || 'UNKNOWN',
                }
            });
            console.log(`[DocumentProcessing] Successfully processed document: ${documentKey}`);
        }
        catch (error) {
            console.error(`[DocumentProcessing] Failed to process document ${documentKey}:`, error);
            throw error;
        }
    }
}
exports.DocumentProcessingService = DocumentProcessingService;
exports.documentProcessingService = new DocumentProcessingService();
