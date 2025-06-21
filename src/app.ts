// src/app.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.config';
import newsletterRoutes from './routes/newsletter.routes';
import apiRoutes from './routes';

dotenv.config();
const app = express();

// ✅ Permetti Netlify + localhost in CORS
const allowedOrigins = [
  'http://localhost:4200',
  'https://aleksandernikollideveloper.netlify.app',  // <-- metti qui il dominio Netlify reale
  'https://www.tuodominio.com'      // <-- opzionale per quando avrai il dominio definitivo
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Postman o curl
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('CORS non permesso da questo dominio'), false);
  },
  credentials: true
}));

app.use(express.json());

// Rotte
app.use('/api', apiRoutes);
app.use('/api', newsletterRoutes);

// Server
const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server attivo su http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Connessione DB fallita:', error);
    process.exit(1);
  });
