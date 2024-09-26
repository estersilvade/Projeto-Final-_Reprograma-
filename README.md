<h1 align="center">
    <br>
    <p align="center">Projeto Final {Reprograma}<p>
</h1>

 <p align="center">
<img src='https://w7.pngwing.com/pngs/265/604/png-transparent-architectural-engineering-architecture-renovation-worker-team-public-relations-engineering-thumbnail.png'title="Banner">

<h2 align="center">
    <br>
    <p align="center"> Help Vizinhos  <p>
</h2>

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
- [Nodemon](https://www.npmjs.com/package/nodemon)


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
    
Swagger - Heroku: 

| Método HTTP  | Endpoint                            | Descrição                            |
| ------------ | ----------------------------------- | ------------------------------------ |
| GET          | http://localhost:8084api`    |  documentação  swagger               |        

<br>

## 🔃 Manipulação das Rotas de usuários:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `'/ ' `              | Retorna apresentação  do API             |
| GET          | `'/all'`                 | Retorna lista de usuários cadastrados     |
| POST         | `'/login'`          |  Abrir aba de loguim       |
| Delete         | `'/delete/:id`    | Deletar usuário           |
| POST           | `'/atualizar'`     | Atualização de dados do usuário      

<br>
## 🔃 Manipulação das Rotas de usuários:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `'/prof' `              | Apresentação  da aba de profissões    |
| GET          | `'/criar'`                 | Cria um campo de profissão para o usuario     |
| GET          | `'/excluir/:id'`          | Deleta profição post de profição   |
| POST         | `'/lista/:id'`    | mostra lista  de pessoas e profissões cadastradas        |

<br>

## 📊 Dados para Collection Usuários 

- id: autogerado e obrigatório
- nome: texto e obrigatório
- email: texto e obrigatório 
- password: texto e obrigatório
- bairro : texto obrigatório
- profissaoRefId : configMong e obrigatório
<br>
<br>
## ✔️ API deve retornar seguinte JSON:

```json

 {"_id": "61bc1398c23b79fb0b6d4e5d",
    "nome": "ffff  ",
    "email": "fffff@gmail.com",
    "password": "$2b$10$x1sGon6bKVXIiyYhBwWQ9OJvb9bjKnhIKJY.sAxrJjfuATmwWDsza",
    "idade": 00,
    "genero": "mulher",
    "prestadorDeServico": true,
    "pagamento": "pix",
 }
 
 
 ```



## 📊 Dados para Collection Profissão  

<br>

- id: autogerado e obrigatório
- atividade: texto e obrigatório
-diaria : boolean e obrigatório 
- hora: boolean e obrigatório
- bairro : texto obrigatório
- agendarData: Date e obrigatório
-agendarHorario: Number e obrigatório
<br>

```json
{
    "atividade": "programadora",
    "diaria" : "true",
    "hora" :"false",
    "valor" : "150",
    "agendarData" : "00" ,
    "agendarHorario" : "00"
}
```
<br>
## 🚧 Projeto em Construção (futuras melhorias)

*  Autenticação das Rotas;
*  Sistema de login;
*  Atualização na construções da  API
*  Licença
*  Implantação de código HTML e CSS para criação de uma interface capaz de possibilitar a interação do usuário com aplicação.

## 👋 Até breve 

<br>

<p align="center">
<img src='https://raw.githubusercontent.com/davidtheclark/gifs/master/alarum.gif' title="Banner">
</p>




