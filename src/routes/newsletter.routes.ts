// src/routes/newsletter.routes.ts
import express from 'express';
import { subscribe } from '../controllers/newsletter.controller';

// import { subscribe } from '../controllers/newsletter.controller';

const router = express.Router();

router.post('/newsletter', (req, res, next) => {
  Promise.resolve(subscribe(req, res)).catch(next);
});

export default router;
