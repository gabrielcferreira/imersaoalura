import {getTodosPosts, criarPost, atualizarPost} from "../models/postsModel.js";
import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiService.js";

export async function listarPosts(req, res) {
    // Chama a função para obter todos os posts
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {

    // Extrai os dados do novo post a partir do corpo da requisição
    const novoPost = req.body;

    try {
        // Chama a função `criarPost` para inserir o novo post no banco de dados
        // A função `criarPost` não foi apresentada, mas presumimos que ela se encarrega de 
        // inserir os dados no banco de dados
        const postCriado = await criarPost(novoPost);

        // Retorna uma resposta HTTP 200 com o post criado como JSON
        res.status(200).json(postCriado);
    } catch (erro) {
        // Captura qualquer erro que possa ocorrer durante o processo e loga no console
        console.error(erro.message);

        // Retorna uma resposta HTTP 500 com uma mensagem de erro genérica
        res.status(500).json({"Erro": "Falha na requisição"})
    }
}

export async function uploadImagem(req, res) {
    // Cria um objeto com os dados básicos do novo post, incluindo o nome original da imagem
    // e um caminho relativo para a imagem
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        // Chama a função `criarPost` para inserir o novo post no banco de dados
        // A função `criarPost` deve inserir o caminho da imagem no banco de dados
        const postCriado = await criarPost(novoPost);

        // Constrói o novo nome do arquivo da imagem, utilizando o ID do post inserido
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`

        // Renomeia o arquivo da imagem para o novo nome, movendo-o para o diretório 'uploads'
        fs.renameSync(req.file.path, imagemAtualizada)

        // Retorna uma resposta HTTP 200 com o post criado como JSON
        res.status(200).json(postCriado);  
    } catch(erro) {
        // Captura qualquer erro que possa ocorrer durante o processo e loga no console
        console.error(erro.message);

        // Retorna uma resposta HTTP 500 com uma mensagem de erro genérica
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}

export async function atualizarNovoPost(req, res) {

    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`

    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`) 
        const descricao = await gerarDescricaoComGemini(imgBuffer)
        
        const post = {
            imgUrl: urlImagem,
            descricao: descricao,
            alt: req.body.alt
        }

        const postCriado = await atualizarPost(id, post);

        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);

        res.status(500).json({"Erro": "Falha na requisição"});
    }
}