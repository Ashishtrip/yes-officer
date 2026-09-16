"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentController = void 0;
const BaseController_1 = require("./BaseController");
const DocumentProcessingService_1 = require("../services/DocumentProcessingService");
const AuditService_1 = require("../services/AuditService");
const StorageService_1 = require("../services/StorageService");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class DocumentController extends BaseController_1.BaseController {
    uploadDocument = async (req, res) => {
        try {
            if (!req.file) {
                res.status(400).json({ success: false, error: 'No file uploaded' });
                return;
            }
            const filePath = req.file.path;
            const mimeType = req.file.mimetype;
            const extractionResult = await DocumentProcessingService_1.documentProcessingService.processDocument(filePath, mimeType);
            // Determine a unique object key for MinIO
            const fileName = path_1.default.basename(filePath);
            const destinationKey = `uploads/${Date.now()}_${fileName}`;
            // Upload original file to MinIO
            await StorageService_1.storageService.uploadFile(filePath, destinationKey, mimeType);
            // Clean up uploaded local temporary file
            fs_1.default.unlinkSync(filePath);
            // Log the document upload action
            await AuditService_1.auditService.logAction({
                action: 'DOCUMENT_UPLOADED',
                user_email: req.user?.email || 'SYSTEM',
                target: `Document: ${destinationKey}`,
                status: 'SUCCESS',
                details: { mimeType, destinationKey, extractionSuccess: !!extractionResult },
            });
            this.handleSuccess(res, {
                ...extractionResult,
                storageKey: destinationKey
            });
        }
        catch (error) {
            this.handleError(error, res, 'DocumentController.uploadDocument');
        }
    };
}
exports.DocumentController = DocumentController;
