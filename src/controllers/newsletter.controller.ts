import { Request, Response } from 'express';
import { Newsletter } from '../models/newsletter.model';
import { sendConfirmationEmail } from '../utils/email';

export const subscribe = async (req: Request, res: Response): Promise<Response> => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email richiesta' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Email non valida' });
  }

  try {
    const alreadyExists = await Newsletter.findOne({ email });
    if (alreadyExists) {
      return res.status(409).json({ message: 'Email già iscritta' });
    }

    const newEntry = new Newsletter({ email });
    await newEntry.save();

    // Invia l'email di conferma
    await sendConfirmationEmail(email);

    return res.status(201).json({ message: 'Iscrizione completata!' });
  } catch (error) {
    return res.status(500).json({ message: 'Errore server', error });
  }
};
