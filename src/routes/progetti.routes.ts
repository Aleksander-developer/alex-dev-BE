// src/routes/progetti.routes.ts
import express from 'express';
import { getProgetti, getProgettoById } from '../controllers/progetti.controller';

const router = express.Router();

router.get('/', getProgetti);
router.get('/:id', getProgettoById);

export default router;
