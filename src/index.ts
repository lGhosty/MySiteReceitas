import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import usuarioRoutes from './routes/usuario.routes';
import categoriaRoutes from './routes/categoria.routes';
import receitaRoutes from './routes/receita.routes';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/receitas', receitaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
