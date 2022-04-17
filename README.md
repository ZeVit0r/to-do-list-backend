<h1 align="center">
  <img src="https://github.com/ZeVit0r/to-do-list/blob/main/src/assets/logo.svg" />
</h1>

<p align="center">🚀 Tecnologias:</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=express&message=4.4.2&color=444444&logo=express" />
  <img src="https://img.shields.io/static/v1?label=prisma&message=18.0.0&color=262F3E&logo=prisma" />
  <img src="https://img.shields.io/static/v1?label=typescript&message=4.4.2&color=3178C6&logo=typescript" />
</p>

### ✅ Screenshots
  <div align="center">
    <img align="center" src="https://github.com/ZeVit0r/to-do-list/blob/main/images/telas.png" alt="projeto" />
  </div>
  
### 💻 Projeto

Projeto desenvolvido com o intuito de organizar tarefas do dia a dia.

### 📕 Bibliotecas:

- express
- prisma
- jsonwebtoken
- axios
- typescript

### 📎 Features 

- [x] Autenticação na aplicação com Github
- [x] Cadastro de tarefas na lista
- [x] Listagem de tarefas, podendo marcar como feitas ou não feitas
- [x] Exclusão de tarefas

### ⚙ Pré-requisitos

- Node.js
- Yarn.js
- Editor de códigos

<h1 align="center"> Rodando o software</h1>

### OBS: Para rodar Corretamente a aplicação web, será necessário criar uma aplicação OAuth no github na aba de desenvolvimento, colocar a rota de callback na aplicação OAuth e utilizar as variáveis e IDs concedidos como se segue a baixo!

### Clonando o repositório

```bash
$ git clone https://github.com/gabriel-nt
```

### Criando variáveis de ambiente

```
# dentro da pasta raiz da aplicação crie um arquivo ".env" para colocar as variaveis de ambiente como na imagem abaixo!

DATABASE_URL => COLOCAR AQUI AS CONFIGURAÇÕES DO BANCO DE DADOS MYSQL

GITHUB_CLIENT_ID => COLOCAR AQUI O ID OBTIDO PELA APLICAÇÃO NO GITHUB
GITHUB_CLIENT_SECRET => COLOCAR AQUI O SECRET OBTIDO PELA APLICAÇÃO NO GITHUB

JWT_SECRET => COLOCAR AQUI A CHAVE SECRETA PARA O JSONWEBTOKEN
```
<div align="center">
    <img align="center" src="https://github.com/ZeVit0r/to-do-list-backend/blob/main/images/variables.png" alt="variaveis de ambiente" />
 </div>

### 💻 para rodar o Backend

```bash
# Navegue para a pasta
$ cd to-do-list-backend

# Instale as dependências
$ yarn

# Execute as migrations
$ yarn prisma migrate dev

# Execute a aplicação
$ yarn dev
```

<hr/>

<p align="center">by José Vitor</p>
