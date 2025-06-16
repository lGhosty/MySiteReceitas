import { Usuario } from '../models/Usuario';
import * as usuarioRepo from '../repositories/usuario.repository';

export const registrarUsuario = async (usuario: Usuario): Promise<number> => {
  const existente = await usuarioRepo.buscarUsuarioPorEmail(usuario.email);
  if (existente) {
    throw new Error('Email já cadastrado');
  }
  const id = await usuarioRepo.inserirUsuario(usuario);
  return id;
};

export const autenticarUsuario = async (email: string, senha: string): Promise<Usuario> => {
  const usuario = await usuarioRepo.buscarUsuarioPorEmail(email);
  if (!usuario || usuario.senha !== senha) {
    throw new Error('Credenciais inválidas');
  }
  return usuario;
};
