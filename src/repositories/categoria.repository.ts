import { RowDataPacket } from 'mysql2';
import { db } from '../db';
import { Categoria } from '../models/Categoria';

export const listarCategorias = async (): Promise<Categoria[]> => {
  const sql = 'SELECT * FROM categorias';
  const [rows] = await db.execute<RowDataPacket[] & Categoria[]>(sql);
  return rows;
};
