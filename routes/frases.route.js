import { Router } from 'express';
import { getFrase, recargarFrases } from '../controllers/frases.controller.js';

const router = Router();

router.get('/', getFrase);
router.get('/recargar', recargarFrases);

export default router;