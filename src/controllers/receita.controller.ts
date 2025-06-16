import { Request, Response } from 'express';
import * as receitaService from '../services/receita.service';

export const criar = async (req: Request, res: Response) => {
  try {
    const id = await receitaService.criarReceita(req.body);
    res.status(201).json({ message: 'Receita criada', id });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const listar = async (req: Request, res: Response) => {
  const usuario_id = Number(req.query.usuario_id);
  if (isNaN(usuario_id)) {
    return res.status(400).json({ message: 'Parâmetro usuario_id inválido' });
  }
  try {
    const lista = await receitaService.listarReceitas(usuario_id);
    res.json(lista);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const editar = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID inválido' });
  }
  try {
    await receitaService.editarReceita(id, req.body);
    res.json({ message: 'Receita atualizada' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const remover = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID inválido' });
  }
  try {
    await receitaService.removerReceita(id);
    res.json({ message: 'Receita removida' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
