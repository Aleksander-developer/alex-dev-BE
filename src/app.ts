// alex-alex-dev-be/src/app.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.config';
import apiRoutes from './routes';
import newsletterRoutes from './routes/newsletter.routes';

dotenv.config();
const app = express();

// Lista degli origin autorizzati
const allowedOrigins = [
  'https://github.com/Aleksander-developer/alex-dev-BE.git',
  'http://localhost:4200'
];

// Configurazione CORS
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Consente richieste da strumenti tipo Postman
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Accesso CORS non consentito da questo dominio'));
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

// Gestisce le richieste preflight manualmente (opzionale ma consigliato)
app.options('*', cors());

// Middlewares
app.use(express.json());

// Routes
app.use('/api', apiRoutes);
app.use('/api', newsletterRoutes);

// Connessione al DB
connectDB();

// Esportiamo l'app per usarla in server.ts
export default app;
