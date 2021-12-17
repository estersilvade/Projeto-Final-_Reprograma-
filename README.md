<h1 align="center">
    <br>
    <p align="center">Projeto Final {Reprograma}<p>
</h1>
<p align="center">
<img src="" width="80%" height="50%"/>
</p>
<br>

## 💻 Sobre o projeto 

<br>

<p align="justify">Devido a necessidade  que encontrei morando sozinha, sempre tive dificuldade de executar certas atividades ou funções que requer algumas habilidades, tinha muitos problemas  de encontrar pessoas que dispunha desses tipos de artifícios.
<p>Com o aumento da crise e a taxa de desemprego resolvi unir o útil com o agradável,
então para o projeto final desenvolvi uma API que irá unir a necessidade de alguns  com a disponibilidade  e habilidade de outras pessoas.</p> 
<p>Sabendo que já existem projetos voltados para isto, também foi pensado que esta união seja feita dentro do seu bairro ou sua região .</p>
<p>Possibilitando o aumento do trabalho informal e gerando renda para pessoas que disponibilizam pouca, baixa ou nem uma.</p>
<p>Sendo também inclusivo, assim possibilitando que qualquer pessoa possa cadastrar suas habilidades independente de gênero, cabendo ao contratante se irá requerer ou não</p>  



API desenvolvida como Projeto Final para a conclusão do curso de Backend [{Reprograma}](https://reprograma.com.br/)
  
<br>

## 🔗 Link 

- [Apresentação](colocar o link da apresentação)

<br>

## ⚙️ Funcionalidades/Objetivos

- Cadastro de pessoas solicitante 
- Cadastro de  pessoas prestadoras de serviços
- Possibilidade de cadastrar diversos serviços
- Gerar renda , aumentar renda de pessoas da comunidade  

<br>

## 📚 Aprendizados

> ⚠️ O projeto final consiste em uma API fundamentada no CRUD. O CRUD é um acrônimo para Create(CRIAR), Read(LER-CONSULTAR), Update(ATUALIZAR) e Delete(DELETAR). 
    São as 4 operações principais em um banco de dados. No MongoDB, usando o Mongoose aqui estão algumas formas de fazer:
<br>

| OPERAÇÃO | MONGODB | MONGOOSE |
| --- | --- | --- |
| C`REATE` | insertOne() | save() |
| R`EAD` | find() | find() |
| U`PDATE` | updateOne() | save() |
| D`ELETE` | deleteOne() | remove() |

<br>

<br>

## 🛠️ Tecnologias utilizadas nesse projeto

<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps)  

### Pacotes Utilizados 

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)
- [modemon](https://www.npmjs.com/package/nodemon)


<br>

## 📁 Arquitetura MVC 

```
 📁 Projeto-Final-Reprograma
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📑 prof_contro.js
   |         |- 📑 user.js
   |
   |    |- 📁 database
   |         |- 📑 configMong.js
   |
   |    |- 📁helpers
   |         |- 📑auth.js
   |    |- 📁 models
   |         |- 📑 prof_model.js
   |         |- 📑 usuarios.js
   |
   |    |- 📁 routes
   |         |- 📑 prof_route.js 
   |         |- 📑 routes.js
   |
   |    |- 📑 app.js
   |
   |
   |- 📑 .env
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 server.js

```
<br>
    
## ⚙️ Como rodar o projeto localmente
Siga os passos e inclua as informações abaixo:

| Passo     | Comando/informação       |
| --------- | ----------- |
| Faça o fork  | `botão de forkar` |
| Faça o clone  | `git clone` |
| Instale as dependências   | `npm i` |
| Crie seu .env e inclua as variáveis e os valores     | `MONGODB_URL` |
| utilize o script de dev    | `npm dev` |

 MONGODB_URL = URL do `MongoDb Atlas` Banco de dados orientado a documentos e interface na nuvem.
    
<br>

## 🔃 Rotas

* local: http://localhost:8084

* Heroku:https://help-vizinho.herokuapp.com/

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

<br>

## 🔃 Retorna a documentação no swagger 
    
Swagger - Heroku: https://estante-de-historias.herokuapp.com/api-docs/

| Método HTTP  | Endpoint                            | Descrição                            |
| ------------ | ----------------------------------- | ------------------------------------ |
| GET          | `http://localhost:8084/api-docs`    |  documentação  swagger               |        

<br>

## 🔃 Retorna teste com apresentação 

| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `http://localhost:8074/`     |  Mensagem de apresentação (Index)    |             |

<br>

## 🔃 Manipulação das Rotas de Autores:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/`              | Retorna todos os             |
| GET          | `/`                 | Retorna autor específico por nome    |
| GET          | `//:id`          | Retorna autor específico por id      |
| POST         | `/autores/cadastrar`    | Cria/cadastra um novo autor          |
| PUT          | `/autores/:id`          | Altera informações de um autor       |
| DELET        | `/autores/:id`          | Remove um autor específico           |

<br>

## 🔃 Manipulação das Rotas de Comentarios:

| Método HTTP  | Endpoint              | Descrição                                  |
| ------------ | --------------------- | ------------------------------------------ |
| GET          | `/comentario`         | Retorna todos os comentários               |
| GET          | `/comentario/:id`     | Retorna um comentário específico por id    |
| POST         | `/comentario/criar`   | Cria um novo comentário                    |
| PUT          | `/comentario/:id`     | Altera informações de um comentário        |
| DELET        | `/comentario/:id`     | Remove um comentário  específico           |

<br>

## 🔃 Manipulação das Rotas de Livros:

| Método HTTP  | Endpoint               | Descrição                                         |
| ------------ | ---------------------- | ------------------------------------------------- |
| GET          | `/livros`              | Retorna todos os livros cadastrados               |
| GET          | `/livros/genero`       | Retorna um livro específico gênero                |
| GET          | `/livros/:id`          | Retorna um livro específico por id                |
| POST         | `/livros/cadastrar`    | Cria/cadastra um novo livro                       |
| PUT          | `/livros/:id`          | Altera informações de um livro                    |
| PATCH        | `/livros/:id`          | atualiza informações por parte                    |
| DELET        | `/livros/:id`          | Remove um livro específico                        |
| POST         | `/livros/:id/like`     |  Dar um like em um livro                          |
| POST         | `/livros/:id/dislike`  |  Dar um dislike em um livro                       |

<br>

## 📊 Dados para Collection Autores

- id: autogerado e obrigatório
- nome: texto e obrigatório
- biografia: texto e obrigatório 
- email: texto e obrigatório 
- criadoEm: data gerada automaticamente e obrigatório

<br>

## ✔️ API deve retornar seguinte JSON:

```jsx

{
  {
    
  }
    
}

```
 <br>

 ## 📊 Dados para Collection Livros

- id: autogerado e obrigatório
- like: opcional
- titulo: texto e obrigatório
- sinopse: texto e obrigatório
- autor: referência do autor cadastrado previamente obrigatório
- genero: texto e obrigatório
- paginas: número e obrigatório
- idioma: texto e obrigatório
- exibição: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório

<br>

## ✔️ API deve retornar seguinte JSON:

```jsx
{
    "likes": 1,
    "criadoEm": "2021-07-02T12:43:39.099Z",
    "_id": "60df0a0382bb996448b380c0",
    "titulo": "O casamento",
    "sinopse": "PARA OS NOIVOS É O DIA MAIS IMPORTANTE DE SUAS VIDAS Meses atrás, os amigos diriam que o namoro de Plínio e Diana tinha prazo de validade. Eles se conheceram de um jeito bizarro, pensam completamente diferente e nenhuma das famílias aprova o relacionamento. Mas eles resistiram a tudo. E agora vão se casar. PARA O DETETIVE É A MELHOR CHANCE DE PEGAR UM CRIMINOSO O mais ntegro dos convidados esconde um segredo devastador. Mas alguém sabe e está disposto a espremê-lo com chantagens.Enquanto a plateia espera ansiosa em frente ao altar, algo brutal acontece na antessala. Só quando veem as paredes lavadas com sangue é que os convidados se rendem ao desespero. Começa uma confusão para interromper a marcha nupcial e chamar a polícia. Ninguém sabe o que fazer. E Bardelli, que lidava com um caso de extorsão, descobre que se meteu em algo muito pior. Agora, ele é o único capaz de encontrar respostas. O problema é que as mortes não param de acontecer...",
    "autor": {
        "criadoEm": "2021-07-02T12:24:59.726Z",
        "_id": "60df0799f34e3c6ebca1dce0",
        "nome": "Victor Bonini",
        "biografia": "Victor Bonini nasceu em São Paulo, capital, e se mudou para Vinhedo, interior do estado, durante a infância. Voltou à metrópole aos dezoito anos para cursar Jornalismo na Faculdade Cásper Líbero.O primeiro passo do escritor foi ler muito, o segundo, começar a desenvolver suas próprias histórias.",
        "email": "victorbonini@gmail.com",
         "__v": 0
    },
    "genero": "suspense",
    "paginas": 368,
    "idioma": "poetugues",
    "exibicao": "download do livro",
    "__v": 0
}

```

<br>

## 📊 Dados para Collection comentário

- id: autogerado e obrigatório
- comentario: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório

<br>

## ✔️ API deve retornar seguinte JSON:
   
```jsx

{
    "criadoEm": "2021-07-05T16:34:19.089Z",
    "_id": "60df0bdcf0a295a0f4207f91",
    "comentario": "Nunca tinha lido nada de Victor Bonini e confesso que me surpreendi e muito. História bem traçada e com final que para mim, foi inimaginável.",
    "__v": 0
} 

```
<br>

## 🚧 Projeto em Construção (futuras melhorias)

<br>

*  Autenticação das Rotas;
*  Sistema de login;
*  Uma rota para que os autores possam enviar seus manuscritos para as editoras cadastradas;
*  Ranking;
*  Implantação de código HTML e CSS para criação de uma interface capaz de possibilitar a interação do usuário com aplicação.

<br>
    
## 👋 Saudações, Eli!
    
_Caso queira contribuir com meu projeto, será totalmente bem-vindx!!!_
_Qualquer dúvida ou sugestão, chama no contatinho!_

 <img src="https://i.picasion.com/pic91/8dd880c47cfc761e805745c941097adb.gif" alt="Gif Yeah" width="200">

### Vamos nos conectar!

- [LinkedIn](https://www.linkedin.com/in/elisabete-a-santos/)
- [GitHub](https://github.com/elisabetealves)

### Feito com 💜 por Elisabete Alves
 
<br> 
    
## 📝 Licença

Este projeto esta sob a licença [MIT](./LICENSE).
    
    
    
<!-- ## 👨‍💻 Autora

<br>

<td align="center"><a href="https://github.com/elisabetealves">
<img style="border-radius: 20%;" src="https://unavatar.now.sh/github/elisabetealves" width="200px;" alt=""/> </td><br> 


## [Elisabete Alves](https://github.com/elisabetealves)
## [LinkedIn](https://www.linkedin.com/mwlite/in/elisabete-alves-675637135)  -->
