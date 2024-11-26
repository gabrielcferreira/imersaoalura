import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";
import cors from "cors";


const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const upload = multer({dest: "./uploads"})


const routes = (app) => {
    // Permite que o Express entenda requisições com corpo no formato JSON
    app.use(express.json());

    app.use(cors(corsOptions))
    // Rota para obter todos os posts
    app.get("/posts", listarPosts);  
    // Rota para criar um post
    app.post("/posts", postarNovoPost) // chama a função controladora para criação de posts
    // Rota para upload de imagens (assumindo uma única imagem chamada 'imagem')
    app.post("/upload", upload.single("imagem"), uploadImagem)

    app.put("/upload/:id", atualizarNovoPost)
}

export default routes;