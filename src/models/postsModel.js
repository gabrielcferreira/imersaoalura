import conectarAoBanco from "../config/dbConfig.js"

// Conecta ao banco de dados usando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// Função assíncrona para obter todos os posts do banco de dados
export default async function getTodosPosts() {
    // Seleciona o banco de dados "imersao-instalike"
    const db = conexao.db("imersao-instalike")
    // Seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts")
    // Busca todos os documentos da coleção e retorna um array com os resultados
    return colecao.find().toArray()
}