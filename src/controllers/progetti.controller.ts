// src/controllers/progetti.controller.ts
import { Request, Response } from 'express';
import { Progetto } from '../models/progetto.model';

export const getProgetti = async (req: Request, res: Response) => {
  try {
    const progetti = await Progetto.find();
    res.json(progetti);
  } catch (error) {
    res.status(500).json({ message: 'Errore recupero progetti', error });
  }
};

export const getProgettoById = async (req: Request, res: Response): Promise<void> => {
  try {
    const progetto = await Progetto.findById(req.params.id);
    if (!progetto) {
      res.status(404).json({ message: 'Progetto non trovato' });
      return;
    }
    res.json(progetto);
  } catch (error) {
    res.status(500).json({ message: 'Errore recupero progetto', error });
  }
};

