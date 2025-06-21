// src/models/servizio.model.ts
import mongoose from 'mongoose';

const servizioSchema = new mongoose.Schema({
  titolo: { type: String, required: true },
  descrizione: String,
  icona: String
});

export const Servizio = mongoose.model('Servizio', servizioSchema);
