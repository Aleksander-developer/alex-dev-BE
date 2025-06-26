// alex-frontend-backend/api/src/app.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.config';
import apiRoutes from './routes';
import newsletterRoutes from './routes/newsletter.routes';

dotenv.config();
const app = express();

const allowedOrigins = [
  'https://alex-frontend-backend.vercel.app',
  'http://localhost:4200'
  
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Accesso CORS non consentito da questo dominio'), false);
  },
  credentials: true
}));

app.use(express.json());

app.use('/api', apiRoutes);
app.use('/api', newsletterRoutes);

// ⛔️ RIMUOVI app.listen()
// ✅ Esporta direttamente Express app (senza avviare server)
connectDB(); // Non è async, quindi non blocca la response
export default app;
