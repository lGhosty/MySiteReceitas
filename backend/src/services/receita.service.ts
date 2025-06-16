import { Receita } from '../models/Receita';
import * as receitaRepo from '../repositories/receita.repository';

export const criarReceita = async (receita: Receita): Promise<number> => {
  const id = await receitaRepo.inserirReceita(receita);
  return id;
};

export const listarReceitas = async (usuario_id: number): Promise<(Receita & {categoria: string})[]> => {
  return await receitaRepo.listarReceitasPorUsuario(usuario_id);
};

export const editarReceita = async (id: number, receita: Partial<Receita>): Promise<void> => {
  await receitaRepo.atualizarReceita(id, receita);
};

export const removerReceita = async (id: number): Promise<void> => {
  await receitaRepo.deletarReceita(id);
};
