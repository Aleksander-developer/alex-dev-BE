"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// alex-alex-dev-be/src/app.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_config_1 = require("./config/db.config");
const routes_1 = __importDefault(require("./routes"));
const newsletter_routes_1 = __importDefault(require("./routes/newsletter.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const allowedOrigins = [
    'https://aleksandernikollideveloper.netlify.app',
    'http://localhost:4200'
];
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.includes(origin))
            return callback(null, true);
        return callback(new Error('Accesso CORS non consentito da questo dominio'), false);
    },
    credentials: true
}));
app.use(express_1.default.json());
app.use('/api', routes_1.default);
app.use('/api', newsletter_routes_1.default);
// ⛔️ RIMUOVI app.listen()
// ✅ Esporta direttamente Express app (senza avviare server)
(0, db_config_1.connectDB)(); // Non è async, quindi non blocca la response
exports.default = app;
