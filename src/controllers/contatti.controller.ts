// src/controllers/contatti.controller.ts
import { Request, Response } from 'express';
import { Contatto } from '../models/contatti.model';

export const inviaMessaggio = async (req: Request, res: Response) => {
  const { nome, email, messaggio } = req.body;

  if (!nome || !email || !messaggio) {
    return res.status(400).json({ message: 'Tutti i campi sono obbligatori' });
  }

  try {
    const nuovoMessaggio = new Contatto({ nome, email, messaggio });
    await nuovoMessaggio.save();
    res.status(201).json({ message: 'Messaggio inviato con successo' });
  } catch (error) {
    res.status(500).json({ message: 'Errore del server', error });
  }
};
