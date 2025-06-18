MySiteReceitas
Um sistema completo para gerenciamento de receitas culinárias, permitindo aos usuários visualizar, cadastrar e gerenciar suas receitas e categorias favoritas. O projeto é composto por uma aplicação front-end em HTML, CSS e JavaScript puro, e um back-end construído com Node.js, Express e TypeScript, utilizando MySQL como banco de dados relacional.

Principais Funcionalidades
Este sistema tem como objetivo principal oferecer uma plataforma intuitiva para a gestão de receitas. As principais funcionalidades incluem:

Gestão de Usuários: Permite o cadastro e listagem de usuários. (Caso de Uso Real)
Gestão de Categorias: Possibilita o cadastro e listagem de categorias para organizar as receitas. (Caso de Uso Real)
Gestão de Receitas: Permite o cadastro, listagem, visualização detalhada e, possivelmente, edição/exclusão de receitas. (Caso de Uso Real)
Interação Completa: Fluxo completo desde o cadastro de uma nova receita no front-end, envio via API para o back-end, gravação no banco de dados e subsequente exibição no front-end.
Características do Sistema Desenvolvido
Front-End
O front-end é desenvolvido utilizando tecnologias web padrão para garantir compatibilidade e leveza:

HTML: Estrutura das páginas.
CSS: Estilização e responsividade da interface.
JavaScript (Vanilla JS): Lógica de interação com o usuário e consumo da API.
Páginas Distintas: O sistema possui pelo menos 3 páginas distintas (index.html, receitas.html, cadastro.html, cadastro-usuario.html), proporcionando uma experiência de navegação organizada.
Consumo de Dados (GET): O front-end é capaz de buscar e exibir listas de receitas, categorias e usuários através de requisições GET à API do back-end.
Envio de Dados (POST/PUT): O front-end permite o envio de novas receitas, categorias e dados de usuário (via formulários) utilizando requisições POST/PUT, que são persistidas no banco de dados.
Back-End
O back-end é robusto e segue uma arquitetura em camadas para facilitar a manutenção e escalabilidade:

Tecnologias:
Node.js: Ambiente de execução.
Express.js: Framework web para construção da API RESTful.
TypeScript: Linguagem para tipagem estática, melhorando a robustez e manutenibilidade do código.
MySQL2: Driver para conexão com o banco de dados MySQL, com suporte a Promises.
Dotenv: Para gerenciamento de variáveis de ambiente.
CORS: Configurado para permitir requisições do front-end.
API RESTful: Expõe endpoints para todas as operações CRUD (Criar, Ler, Atualizar, Deletar) para as entidades principais (Usuários, Categorias, Receitas).
Casos de Uso Implementados:
Criar Usuário (POST /usuarios)
Listar Usuários (GET /usuarios)
Criar Categoria (POST /categorias)
Listar Categorias (GET /categorias)
Criar Receita (POST /receitas)
Listar Receitas (GET /receitas)
(Outros casos de uso como Obter Receita por ID, Atualizar Receita, Deletar Receita, Autenticação de Usuário podem ser implementados se não estiverem presentes, seguindo a estrutura existente.)
Arquitetura em Camadas: O código é organizado em:
src/controllers: Responsável por receber as requisições HTTP, validar os dados e chamar a camada de serviço.
src/services: Contém a lógica de negócio da aplicação (casos de uso).
src/repositories: Abstrai a lógica de acesso ao banco de dados.
src/models: Define as estruturas dos dados.
Banco de Dados Relacional (MySQL)
Estrutura: O banco de dados (banco.sql ou Banco1.sql) possui no mínimo 3 tabelas (usuarios, categorias, receitas).
Relacionamento: Existe um relacionamento entre receitas e categorias (uma receita pertence a uma categoria), e entre receitas e usuarios (uma receita é criada por um usuário), garantindo a integridade e organização dos dados.
Operações CRUD: As operações do front-end e back-end (inserir, consultar, atualizar, deletar) são refletidas e gerenciadas corretamente no banco de dados.
Instruções de Execução
Para rodar este projeto localmente, siga os passos abaixo:

Pré-requisitos
Node.js (versão 14 ou superior)
npm (gerenciador de pacotes do Node.js)
MySQL Server (ou um ambiente como Docker para MySQL)
Configuração do Banco de Dados
Crie o banco de dados:
Acesse seu servidor MySQL (via terminal ou ferramenta como MySQL Workbench/DBeaver) e execute o script SQL fornecido para criar o banco de dados e as tabelas:

SQL

-- Use o script adequado, banco.sql ou Banco1.sql
SOURCE /caminho/completo/para/o/seu/projeto/scripts/banco.sql;
-- OU
SOURCE /caminho/completo/para/o/seu/projeto/scripts/Banco1.sql;
Certifique-se de que o usuário do MySQL tenha permissões adequadas para criar e manipular tabelas.

Variáveis de Ambiente:
No diretório backend, crie um arquivo .env com as seguintes variáveis de ambiente (ajuste os valores conforme sua configuração do MySQL):

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=mysitereceitas
PORT=3000
Instalação e Execução do Back-End
Navegue até o diretório do back-end:

Bash

cd MySiteReceitas/backend
Instale as dependências:

Bash

npm install
Inicie o servidor back-end:

Bash

npm run dev # Para desenvolvimento (com recarregamento automático)
# OU
npm start # Para produção (após build)
O servidor estará rodando em http://localhost:3000 (ou na porta definida em PORT no seu arquivo .env).

Execução do Front-End
O front-end é uma aplicação estática em HTML, CSS e JavaScript. Você pode abri-la diretamente no seu navegador.

Navegue até o diretório do front-end:

Bash

cd MySiteReceitas/frontend
Abra os arquivos HTML:
Abra index.html ou qualquer outra página (receitas.html, cadastro.html, cadastro-usuario.html) no seu navegador.

Exemplo: file:///C:/caminho/completo/para/o/seu/projeto/frontend/index.html

Para que as requisições API funcionem corretamente (especialmente em ambientes de produção ou se você encontrar problemas de CORS ao abrir o arquivo diretamente), é recomendado servir o front-end através de um servidor web local (por exemplo, live-server para desenvolvimento):

Bash

# Se ainda não tiver, instale o live-server globalmente
npm install -g live-server

# No diretório MySiteReceitas/frontend, execute:
live-server
Isso abrirá automaticamente o front-end no seu navegador, geralmente em http://127.0.0.1:8080 ou similar.

Estrutura do Projeto
MySiteReceitas/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── categoria.controller.ts
│   │   │   ├── receita.controller.ts
│   │   │   └── usuario.controller.ts
│   │   ├── db.ts
│   │   ├── models/
│   │   │   ├── Categoria.ts
│   │   │   ├── Receita.ts
│   │   │   └── Usuario.ts
│   │   ├── repositories/
│   │   │   ├── categoria.repository.ts
│   │   │   ├── receita.repository.ts
│   │   │   └── usuario.repository.ts
│   │   ├── routes/
│   │   │   ├── categoria.routes.ts
│   │   │   ├── receita.routes.ts
│   │   │   └── usuario.routes.ts
│   │   ├── services/
│   │   │   ├── categoria.service.ts
│   │   │   ├── receita.service.ts
│   │   │   └── usuario.service.ts
│   │   └── index.ts
│   ├── .env.example
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
├── frontend/
│   ├── cadastro-usuario.html
│   ├── cadastro.html
│   ├── index.html
│   └── receitas.html
└── scripts/
    ├── Banco1.sql
    └── banco.sql