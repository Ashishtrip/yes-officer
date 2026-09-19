"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentController = void 0;
const BaseController_1 = require("./BaseController");
const queue_1 = require("../config/queue");
const StorageService_1 = require("../services/StorageService");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const prisma_1 = __importDefault(require("../utils/prisma"));
class DocumentController extends BaseController_1.BaseController {
    uploadDocument = async (req, res) => {
        try {
            if (!req.file) {
                res.status(400).json({ success: false, error: 'No file uploaded' });
                return;
            }
            const filePath = req.file.path;
            const mimeType = req.file.mimetype;
            const { bidId } = req.body; // Expecting bidId in form data
            if (!bidId) {
                fs_1.default.unlinkSync(filePath);
                res.status(400).json({ success: false, error: 'bidId is required' });
                return;
            }
            // Determine a unique object key for MinIO
            const fileName = path_1.default.basename(filePath);
            const destinationKey = `uploads/${Date.now()}_${fileName}`;
            // Upload original file to MinIO
            await StorageService_1.storageService.uploadFile(filePath, destinationKey, mimeType);
            // Clean up uploaded local temporary file
            fs_1.default.unlinkSync(filePath);
            // Create a Document record in DB to track extraction
            const documentRecord = await prisma_1.default.document.create({
                data: {
                    bid_id: bidId,
                    document_type: 'PENDING_CLASSIFICATION',
                    file_path: destinationKey,
                }
            });
            // Enqueue job for background extraction and validation
            await queue_1.documentQueue.add('process-document', {
                documentId: documentRecord.id,
                documentKey: destinationKey,
                mimeType: mimeType,
                bidId: bidId
            }, {
                attempts: 3,
                backoff: {
                    type: 'exponential',
                    delay: 2000
                }
            });
            this.handleSuccess(res, {
                message: 'Document uploaded and queued for processing',
                documentId: documentRecord.id,
                storageKey: destinationKey
            });
        }
        catch (error) {
            this.handleError(error, res, 'DocumentController.uploadDocument');
        }
    };
}
exports.DocumentController = DocumentController;
