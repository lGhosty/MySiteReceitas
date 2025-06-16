import { Request, Response } from 'express';
import * as usuarioService from '../services/usuario.service';

export const registrar = async (req: Request, res: Response) => {
  try {
    const id = await usuarioService.registrarUsuario(req.body);
    res.status(201).json({ message: 'Usuário criado', id });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const usuario = await usuarioService.autenticarUsuario(req.body.email, req.body.senha);
    const { senha, ...userWithoutPass } = usuario;
    res.json({ message: 'Login bem-sucedido', usuario: userWithoutPass });
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
};
