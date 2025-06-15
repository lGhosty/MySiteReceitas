CREATE DATABASE IF NOT EXISTS BCDMyWebReceitas;
USE BCDMyWebReceitas;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS receitas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  ingredientes TEXT NOT NULL,
  modo_preparo TEXT NOT NULL,
  categoria_id INT NOT NULL,
  usuario_id INT NOT NULL,
  FOREIGN KEY (categoria_id) REFERENCES categorias(id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

INSERT IGNORE INTO categorias (id, nome) VALUES
(1, 'Sobremesa'),
(2, 'Entrada'),
(3, 'Prato Principal'),
(4, 'Bebida');
