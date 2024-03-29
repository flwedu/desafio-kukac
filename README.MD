# Descrição do projeto

Optei por dividir o projeto em duas pastas: `backend` e `frontend`, em que cada uma contém uma parte da aplicação.

O backend utiliza `Typescript` e `Node.js` para ser executado.
Já o frontend, consiste de uma aplicação `React.js` criada com `Vite` e `Typescript`.

Para que a aplicação seja executada, é necessário rodar o Node.js nas duas pastas:

## Executando o backend 🖥️

Para executar o backend:

```bash
# Navegue até a pasta /backend
cd backend

# Instale as dependências
yarn

# Execute a aplicação em modo dev...
yarn dev

# ...ou em modo produção
yarn start
```

## Executando o frontend ⚛️

Para executar o frontend, abra um novo terminal, navegue até a pasta raiz do projeto e em seguida:

```bash
# Navegue até a pasta /frontend
cd frontend

# Instale as dependências
yarn

# Execute a aplicação em modo dev...
yarn dev

# ...ou em modo produção
yarn start
```

## Dica: Executando as duas aplicações de uma vez 🥷

Depois da instalação das dependências, é possível executar as duas partes de uma vez em um só terminal.
Para isso, volte a página raiz do projeto e execute:

```bash
# Instalando o concurrently
yarn add concurrently

# Comando para iniciar o frontend e o backend
yarn dev:all
```
