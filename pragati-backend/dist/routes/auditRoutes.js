"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuditController_1 = require("../controllers/AuditController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
const auditController = new AuditController_1.AuditController();
// Restrict search to AUDITOR and ADMIN roles
router.get('/search', authMiddleware_1.authenticateJWT, (0, authMiddleware_1.requireRole)(['AUDITOR', 'ADMIN']), auditController.searchLogs);
router.get('/', auditController.getLogs);
exports.default = router;
