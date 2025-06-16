import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { db } from '../db';
import { Usuario } from '../models/Usuario';

export const inserirUsuario = async (usuario: Usuario): Promise<number> => {
  const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
  const [result] = await db.execute<ResultSetHeader>(sql, [usuario.nome, usuario.email, usuario.senha]);
  return result.insertId;
};

export const buscarUsuarioPorEmail = async (email: string): Promise<Usuario | null> => {
  const sql = 'SELECT * FROM usuarios WHERE email = ?';
  const [rows] = await db.execute<RowDataPacket[] & Usuario[]>(sql, [email]);
  return rows.length > 0 ? rows[0] : null;
};
