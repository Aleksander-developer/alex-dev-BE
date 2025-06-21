// src/models/chisono.model.ts
import mongoose from 'mongoose';

const chiSonoSchema = new mongoose.Schema({
  contenuto: { type: String, required: true },
  aggiornata: { type: Date, default: Date.now }
});

export const ChiSono = mongoose.model('ChiSono', chiSonoSchema);
