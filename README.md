Projeto criado em JavaScript e Nodejs feito no curso de imersão backend da Alura
Foi feito um projeto que fazia um clone do Instagram (no meu caso Instadev) 
Utilizei a rota /posts para ser a página inicial
Conta com projetos getTodosOsPosts que tem como resposta mostrar no navegador os posts possíveis 
MongoDB faz a função de retornar esses posts, subir novos posts e fazer atualizações
uploadImagem que faz o post da imagem - post
atualizarPost que faz a atualização - put

Postman faz o processo de subir arquivos na url que solicitamos, ou seja, faz o processo por tras de post e put 
  Dentro do Postman precisamos manter a estrutura que está no MongoDB, pois a imagem vai pro banco de dados e depois será solicitada pela url

O projeto está divididos em pastas:
  dbConfig - Função: Esta pasta contém os arquivos responsáveis por configurar a conexão com o banco de dados MongoDB.
  postsRoutes - Função: As rotas definem as diferentes URLs que a sua aplicação pode atender e qual controlador deve ser chamado para cada URL.
  postsController - Função: Os controllers são responsáveis por receber as requisições HTTP, processar os dados e chamar os modelos para realizar as operações no banco de dados.
  postsModels - Função: Os modelos definem a estrutura dos dados que serão armazenados no banco de dados.
  
