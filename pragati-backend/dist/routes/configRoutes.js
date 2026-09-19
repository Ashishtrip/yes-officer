"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ConfigController_1 = require("../controllers/ConfigController");
const router = (0, express_1.Router)();
router.get('/compliance-rules', ConfigController_1.getComplianceRules);
router.get('/portal-connectors', ConfigController_1.getPortalConnectors);
exports.default = router;
