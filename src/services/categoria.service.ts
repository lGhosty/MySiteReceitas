import { Categoria } from '../models/Categoria';
import * as categoriaRepo from '../repositories/categoria.repository';

export const listarCategorias = async (): Promise<Categoria[]> => {
  return await categoriaRepo.listarCategorias();
};
