"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const app = (0, express_1.default)();
// Global middlewares
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Setup routes
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const bidRoutes_1 = require("./routes/bidRoutes");
const documentRoutes_1 = __importDefault(require("./routes/documentRoutes"));
const auditRoutes_1 = __importDefault(require("./routes/auditRoutes"));
const tenderRoutes_1 = require("./routes/tenderRoutes");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const vigilanceRoutes_1 = __importDefault(require("./routes/vigilanceRoutes"));
const interactionRoutes_1 = __importDefault(require("./routes/interactionRoutes"));
const configRoutes_1 = __importDefault(require("./routes/configRoutes"));
app.use('/api/v1/auth', authRoutes_1.default);
app.use('/api/v1/bids', bidRoutes_1.bidRoutes);
app.use('/api/v1/documents', documentRoutes_1.default);
app.use('/api/v1/audit', auditRoutes_1.default);
app.use('/api/v1/tenders', tenderRoutes_1.tenderRoutes);
app.use('/api/v1/users', userRoutes_1.default);
app.use('/api/v1/vigilance', vigilanceRoutes_1.default);
app.use('/api/v1/interactions', interactionRoutes_1.default);
app.use('/api/v1/config', configRoutes_1.default);
// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});
// 404 Handler
app.use((req, res) => {
    res.status(404).json({ success: false, error: 'Endpoint not found' });
});
// Global Error Handler
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    // Sentry.captureException(err);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
});
exports.default = app;
