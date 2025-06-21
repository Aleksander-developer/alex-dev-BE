// src/app.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.config';
import newsletterRoutes from './routes/newsletter.routes';
import apiRoutes from './routes'

const allowedOrigins = ['http://localhost:4200', 'https://www.tuodominio.com'];

dotenv.config();
const app = express();

// Middleware
app.use(cors(
  {
  origin: function(origin, callback){
    // permette richieste senza origin come curl o postman
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'La CORS policy non permette l\'accesso da questo dominio';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}
));
app.use(express.json());

app.use('/api', apiRoutes);  // Tutte le API sotto /api/*

// Rotte API
app.use('/api', newsletterRoutes);

// Connessione DB e avvio server
const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server attivo su http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Errore durante la connessione al database:', error);
    process.exit(1);
  });
