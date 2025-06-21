// src/config/db.config.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      // puoi aggiungere opzioni qui se vuoi
      // ex: useNewUrlParser: true, useUnifiedTopology: true,
    });
    console.log('✅ Connesso a MongoDB Atlas');
  } catch (error) {
    console.error('❌ Errore di connessione a MongoDB:', error);
    process.exit(1);  // termina il processo se non riesce a connettersi
  }
};
