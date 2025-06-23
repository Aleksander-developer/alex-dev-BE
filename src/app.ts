// src/app.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.config';
import apiRoutes from './routes'; // Contatti, progetti, ecc.
import newsletterRoutes from './routes/newsletter.routes';

dotenv.config();
const app = express();

// ✅ Configura CORS per frontend da Netlify e sviluppo locale
const allowedOrigins = [
  'https://aleksandernikollideveloper.netlify.app',
  'http://localhost:4200'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Consenti Postman e altri tool locali
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Accesso CORS non consentito da questo dominio'), false);
  },
  credentials: true
}));

// ✅ Middleware per leggere JSON dal body delle richieste
app.use(express.json());

// ✅ Rotte API
app.use('/api', apiRoutes);            // include contatti, progetti ecc.
app.use('/api', newsletterRoutes);     // include /api/newsletter

// ✅ Avvia il server
const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server attivo su http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Connessione al DB fallita:', error);
    process.exit(1);
  });
