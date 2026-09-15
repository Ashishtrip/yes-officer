"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const zod_1 = require("zod");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const envSchema = zod_1.z.object({
    PORT: zod_1.z.string().default('4000'),
    NODE_ENV: zod_1.z.enum(['development', 'production', 'test']).default('development'),
    DATABASE_URL: zod_1.z.string().default('postgresql://pragati_user:pragati_password@localhost:5432/pragati_db?schema=public'),
});
const parsedEnv = envSchema.parse(process.env);
exports.config = {
    app: {
        port: parseInt(parsedEnv.PORT, 10),
        env: parsedEnv.NODE_ENV,
    },
    db: {
        url: parsedEnv.DATABASE_URL,
    },
};
