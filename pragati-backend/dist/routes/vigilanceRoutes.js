"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VigilanceController_1 = require("../controllers/VigilanceController");
const router = (0, express_1.Router)();
router.get('/analytics', VigilanceController_1.getVigilanceAnalytics);
router.get('/forensics', VigilanceController_1.getForensicIntegrity);
exports.default = router;
