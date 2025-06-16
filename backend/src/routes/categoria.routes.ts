import { Router } from 'express';
import * as categoriaController from '../controllers/categoria.controller';

const router = Router();
router.get('/', categoriaController.listar);

export default router;
