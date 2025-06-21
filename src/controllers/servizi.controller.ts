// src/controllers/servizi.controller.ts
import { Request, Response } from 'express';
import { Servizio } from '../models/servizio.model';

export const getServizi = async (_req: Request, res: Response) => {
  try {
    const servizi = await Servizio.find();
    res.json(servizi);
  } catch (error) {
    res.status(500).json({ message: 'Errore recupero servizi', error });
  }
};
