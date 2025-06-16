import { Router } from 'express';
import * as receitaController from '../controllers/receita.controller';

const router = Router();
router.post('/', receitaController.criar);
router.get('/', receitaController.listar);
router.put('/:id', receitaController.editar);
router.delete('/:id', receitaController.remover);

export default router;
