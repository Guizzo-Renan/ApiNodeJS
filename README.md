# ApiNodeJS

Banco de dados 


CREATE DATABASE EcommerceBanco;

-- Usar o banco de dados recém-criado
USE EcommerceBanco;

-- Criação da tabela
CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  preco DECIMAL(10, 2) NOT NULL,
  promocao BOOLEAN NOT NULL DEFAULT FALSE,
  url_imagem VARCHAR(255),
  categorias_id int
);
CREATE TABLE estoque (
  id INT AUTO_INCREMENT PRIMARY KEY,
  produto_id INT NOT NULL,
  quantidade INT NOT NULL,
  FOREIGN KEY (produto_id) REFERENCES produtos(id) ON DELETE CASCADE
);
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL
);
CREATE TABLE produto_extenso (
  id INT AUTO_INCREMENT PRIMARY KEY,
  produto_id INT NOT NULL,
  descricao TEXT,
  url_imagem_principal VARCHAR(255),
  url_imagem_secundaria1 VARCHAR(255),
  url_imagem_secundaria2 VARCHAR(255),
  url_imagem_secundaria3 VARCHAR(255),
  tipo_produto VARCHAR(100),
  nota_produto DECIMAL(2, 1),
  especificacoes TEXT,
  FOREIGN KEY (produto_id) REFERENCES produtos(id) ON DELETE CASCADE
);
CREATE TABLE categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL
);
CREATE TABLE tamanho_roupa (
  id INT AUTO_INCREMENT PRIMARY KEY,
  categoria_id INT NOT NULL,
  tamanho VARCHAR(10) NOT NULL,
  FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE CASCADE
);
