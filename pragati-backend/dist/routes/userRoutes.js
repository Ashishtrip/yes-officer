"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
const userController = new UserController_1.UserController();
// Only ADMIN can manage users in this MVP
router.get('/', authMiddleware_1.authenticateJWT, (0, authMiddleware_1.requireRole)(['ADMIN']), userController.getUsers);
router.post('/', authMiddleware_1.authenticateJWT, (0, authMiddleware_1.requireRole)(['ADMIN']), userController.createUser);
exports.default = router;
