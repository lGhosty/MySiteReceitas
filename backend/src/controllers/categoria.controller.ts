import { Request, Response } from 'express';
import * as categoriaService from '../services/categoria.service';

export const listar = async (_req: Request, res: Response) => {
  try {
    const categorias = await categoriaService.listarCategorias();
    res.json(categorias);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
