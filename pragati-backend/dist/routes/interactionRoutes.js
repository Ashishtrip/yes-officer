"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const InteractionController_1 = require("../controllers/InteractionController");
const router = (0, express_1.Router)();
router.get('/clarifications', InteractionController_1.getClarifications);
router.get('/grievances', InteractionController_1.getGrievances);
exports.default = router;
