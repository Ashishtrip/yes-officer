"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const unifiedConfig_1 = require("./config/unifiedConfig");
const startServer = async () => {
    try {
        app_1.default.listen(unifiedConfig_1.config.app.port, () => {
            console.log(`Pragati Backend running on http://localhost:${unifiedConfig_1.config.app.port} in ${unifiedConfig_1.config.app.env} mode`);
        });
    }
    catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};
startServer();
