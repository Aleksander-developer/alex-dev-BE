// src/models/contatto.model.ts
import mongoose from 'mongoose';

const contattoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  messaggio: { type: String, required: true },
  cellulare: String,
  data: { type: Date, default: Date.now }
});

export const Contatto = mongoose.model('Contatto', contattoSchema);
