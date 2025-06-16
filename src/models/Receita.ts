export interface Receita {
  id?: number;
  titulo: string;
  ingredientes: string;
  modo_preparo: string;
  categoria_id: number;
  usuario_id: number;
}
