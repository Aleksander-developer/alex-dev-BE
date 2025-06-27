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
// Lista degli origin autorizzati
const allowedOrigins = [
    'https://alex-dev-be.onrender.com',
    'http://localhost:4200'
];
// Configurazione CORS
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        if (!origin)
            return callback(null, true); // Consente richieste da strumenti tipo Postman
        if (allowedOrigins.includes(origin))
            return callback(null, true);
        return callback(new Error('Accesso CORS non consentito da questo dominio'));
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));
// Gestisce le richieste preflight manualmente (opzionale ma consigliato)
app.options('*', (0, cors_1.default)());
// Middlewares
app.use(express_1.default.json());
// Routes
app.use('/api', routes_1.default);
app.use('/api', newsletter_routes_1.default);
// Connessione al DB
(0, db_config_1.connectDB)();
// Esportiamo l'app per usarla in server.ts
exports.default = app;
