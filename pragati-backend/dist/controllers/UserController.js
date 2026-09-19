"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const BaseController_1 = require("./BaseController");
const prisma_1 = __importDefault(require("../utils/prisma"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UserController extends BaseController_1.BaseController {
    getUsers = async (req, res) => {
        try {
            const users = await prisma_1.default.user.findMany({
                select: {
                    id: true,
                    email: true,
                    name: true,
                    role: true,
                    created_at: true
                }
            });
            this.handleSuccess(res, { users });
        }
        catch (error) {
            this.handleError(error, res, 'UserController.getUsers');
        }
    };
    createUser = async (req, res) => {
        try {
            const { email, name, role, password } = req.body;
            const password_hash = await bcryptjs_1.default.hash(password || 'password123', 10);
            const user = await prisma_1.default.user.create({
                data: {
                    email,
                    name,
                    role,
                    password_hash
                },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    role: true,
                    created_at: true
                }
            });
            this.handleSuccess(res, { user });
        }
        catch (error) {
            this.handleError(error, res, 'UserController.createUser');
        }
    };
}
exports.UserController = UserController;
