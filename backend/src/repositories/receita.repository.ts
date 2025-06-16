import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { db } from '../db';
import { Receita } from '../models/Receita';

export const inserirReceita = async (receita: Receita): Promise<number> => {
  const sql = `
    INSERT INTO receitas (titulo, ingredientes, modo_preparo, categoria_id, usuario_id)
    VALUES (?, ?, ?, ?, ?)
  `;
  const [result] = await db.execute<ResultSetHeader>(sql, [
    receita.titulo,
    receita.ingredientes,
    receita.modo_preparo,
    receita.categoria_id,
    receita.usuario_id
  ]);
  return result.insertId;
};

export const listarReceitasPorUsuario = async (usuario_id: number): Promise<(Receita & { categoria: string })[]> => {
  const sql = `
    SELECT r.id, r.titulo, r.ingredientes, r.modo_preparo, r.categoria_id, r.usuario_id, c.nome AS categoria
    FROM receitas r
    JOIN categorias c ON r.categoria_id = c.id
    WHERE r.usuario_id = ?
  `;
  const [rows] = await db.execute<RowDataPacket[] & (Receita & { categoria: string })[]>(sql, [usuario_id]);
  return rows;
};

export const atualizarReceita = async (id: number, receita: Partial<Receita>): Promise<void> => {
  const sql = `
    UPDATE receitas
    SET titulo = ?, ingredientes = ?, modo_preparo = ?, categoria_id = ?
    WHERE id = ?
  `;
  await db.execute(sql, [
    receita.titulo,
    receita.ingredientes,
    receita.modo_preparo,
    receita.categoria_id,
    id
  ]);
};

export const deletarReceita = async (id: number): Promise<void> => {
  const sql = 'DELETE FROM receitas WHERE id = ?';
  await db.execute(sql, [id]);
};
