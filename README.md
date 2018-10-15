# Projeto My-Readable

Esse projeto é uma aplicação de  conteúdo e comentários que permite que os usuários postem conteúdo em categorias pré-definidas, façam comentários em suas próprias postagens e nas de outros usuários e votem nas postagens e comentários. Os usuários poderão editar e excluir postagens e comentários. O projeto e feito em e utiliza uma API disponibilizada pela udacity que é utilizada para interagir com a aplicação.

## Instalação

você deve seguir os passos listado abaixa para instalar todas as dependências e iniciar o projeto.

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Dependencia

Essa aplicação tem depêndencia dessa [api](https://github.com/udacity/reactnd-project-readable-starter) para manter os posts, server roda em `localhost:3001`.

## Funcionalidade da aplicação

Nesta aplicação, temos 2 views que são:

* root(home) mostrara uma lista todos posts atuais ordenados por data de criação
* post(new) onde podemos criar novos posts

## Rota Home

Ná rota home está implementada praticamente todas as funcionalidades da aplicação
nela podemos ordenar os posts por votação de likes e data, tambem temos no navBar um dropdown de 
categorias onde filtramos nossos posts.

Cada post mostras seu `Author` e `Title` e o `Body` da postagem, tambem podemos votar na bostagem com `like` e `dislike` e `editar` e `excluir` o post.

Tambem podemos ver todos os comentário feito sobre o post clicando no icone de comentarios no canto inferior direito da postagem, onde uma lista com os comentários é exibida e podemos `incluir`, `votar`, `editar` e `excluir` o comentário.

Para incluir um novo comentário basta informa um nome do author e seu comentário, sendo somente o campo `body` como obrigatório, se não for informado um nome o author aparece como `anonymous`.

## Rota Post

Ná rota post podemos incluir novas postagem atravez dos campos `title`, `author`, `category`, e `body`, todos os campos são obrigatórios.