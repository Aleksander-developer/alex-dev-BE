// <-- Importa e aggrega tutte le rotte qui

import express from 'express';
import newsletterRoutes from './newsletter.routes';
import progettiRoutes from './progetti.routes';
import chiSonoRoutes from './chi-sono.routes';
import contattiRoutes from './contatti.routes';
import serviziRoutes from './servizi.routes';


const router = express.Router();

router.use('/newsletter', newsletterRoutes);
router.use('/progetti', progettiRoutes);
router.use('/chi-sono', chiSonoRoutes);
router.use('/contatti', contattiRoutes);
router.use('/servizi', serviziRoutes);

export default router;
