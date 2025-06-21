// src/models/progetto.model.ts
import mongoose from 'mongoose';

const progettoSchema = new mongoose.Schema({
  titolo: { type: String, required: true },
  descrizione: String,
  tecnologie: [String],
  linkDemo: String,
  linkRepo: String,
  immagine: String,
  data: { type: Date, default: Date.now }
});

export const Progetto = mongoose.model('Progetto', progettoSchema);
