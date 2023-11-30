import { Router } from "express"; // O Router serve para criar as rotas

import {
  cadastrar,
  listar,
  buscarPorId,
  alterar,
  excluir,
} from "../controllers/galeria.controller.js"; // Importa os controllers

const galeriasRouter = Router(); // Cria o roteador do express

// Configura o roteador para responder a requisições na rota /
galeriasRouter.post("/", cadastrar);
galeriasRouter.get("/", listar);
galeriasRouter.get("/:id", buscarPorId);
galeriasRouter.put("/:id", alterar);
galeriasRouter.delete("/:id", excluir);

export default galeriasRouterRouter; // Exporta o roteador