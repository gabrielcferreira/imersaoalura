## Imersão BackEnd Alura

Um projeto feito na Imersão backend de novembro de 2024 com a Alura

## ** Descrição **

Projeto criado em JavaScript e Nodejs feito no curso de imersão backend da Alura<br>
Foi feito um projeto que fazia um clone do Instagram (no meu caso Instadev) <br>
Utilizei a rota /posts para ser a página inicial<br>
getTodosOsPosts que tem como resposta mostrar no navegador os posts possíveis<br> 
MongoDB faz a função de retornar esses posts, subir novos posts e fazer atualizações<br>
uploadImagem que faz o post da imagem - post<br>
atualizarPost que faz a atualização - put<br>

Postman faz o processo de subir arquivos na url que solicitamos, ou seja, faz o processo por tras de post e put <br>
  Dentro do Postman precisamos manter a estrutura que está no MongoDB, pois a imagem vai pro banco de dados e depois será solicitada pela url

O projeto está divididos em pastas e arquivos:<br>
- dbConfig - Função: Esta pasta contém os arquivos responsáveis por configurar a conexão com o banco de dados MongoDB
- postsRoutes - Função: As rotas definem as diferentes URLs que a sua aplicação pode atender e qual controlador deve ser chamado para cada URL
- postsController - Função: Os controllers são responsáveis por receber as requisições HTTP, processar os dados e chamar os modelos para realizar as operações no banco de dados
- postsModels - Função: Os modelos definem a estrutura dos dados que serão armazenados no banco de dados
- arquivo server.js que possui as rotas
- service.sh: script do google para fornecer o deploy
- geminiServices: script que faz a integração do google Gemini com o projeto

## ** Como usar **

1. Clone este git para sua máquina
2. Instale o Nodejs
3. Instale o MongoDB
4. Instale dotenv 
5. Crie uma pasta chamada .env com sua string de conexão do mongoDB e sua chave api do google Gemini, deixando as urls em aspas duplas por conta do google cloud
6. Inclua suas imagens através do localhost:3000/upload utilizando o Postman com o método post, no modo body e form-data. Logo abaixo irá aparecer `key`e `value`, em key você irá inserir a palavra "imagem" e depois selecionar "file" e inserir a imagem PNG que quer.
7. Depois faça um put utilizando localhost:3000/upload/<id gerada> e vá em body novamente, selecionando Json e incluindo {"alt": "o que é a imagem"} pois a descrição será feito pelo Google Gemini
8. Se der erro em algum desses passos do Postman, verificar o tamanho da imagem e a extesão, que deve ser obrigatóriamente PNG.
9. Pronto, seu projeto está no ar no localhost:3000/posts
10. Escolha seu host e faça o deploy do projeto.

## ** Técnologias Utilizadas **

* Node.js
* JavaScript
* Google Gemini
* MongoDB
* Google Cloud
* Dotenv
* Express.js
* Multer
* Cors

## package.json

    "@google/generative-ai": "^0.21.0",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "mongodb": "^6.10.0",
    "multer": "^1.4.5-lts.1"


  
  
