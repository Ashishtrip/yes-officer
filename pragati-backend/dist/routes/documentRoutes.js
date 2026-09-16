"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const DocumentController_1 = require("../controllers/DocumentController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
const documentController = new DocumentController_1.DocumentController();
// Use temp directory inside the project for safety
const upload = (0, multer_1.default)({ dest: './uploads/' });
router.post('/upload', authMiddleware_1.authenticateJWT, (0, authMiddleware_1.requireRole)(['PROCUREMENT_OFFICER', 'ADMIN', 'BIDDER']), upload.single('document'), documentController.uploadDocument);
exports.default = router;
