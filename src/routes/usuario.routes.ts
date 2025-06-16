import { Router } from 'express';
import * as usuarioController from '../controllers/usuario.controller';

const router = Router();
router.post('/registro', usuarioController.registrar);
router.post('/login', usuarioController.login);

export default router;
