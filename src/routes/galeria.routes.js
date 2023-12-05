import { Router } from "express"; // O Router serve para criar as rotas

//Representam operações CRUD (Criar, Ler, Atualizar, Deletar) relacionadas à gestão de galerias em um sistema 
//ou aplicativo. Ao importá-las dessa maneira, elas se tornam disponíveis para uso em outro arquivo ou contexto 
//para realizar operações específicas relacionadas às galerias.
import {
    cadastrar,
    listar,
    buscarPorId,
    alterar,
    excluir,
} from "../controllers/galeria.controller.js"; 

//Essa linha de código cria um roteador utilizando o Express.js, destinado a gerenciar as rotas relacionadas 
//às galerias em uma aplicação. Esse roteador será usado para definir endpoints específicos que lidam com 
//operações de galeria, como criar, ler, atualizar e deletar galerias na aplicação.
const galeriasRouter = Router(); 

// Configura o roteador para responder a requisições na rota 
galeriasRouter.post("/", cadastrar);
galeriasRouter.get("/", listar);
galeriasRouter.get("/:id", buscarPorId);
galeriasRouter.put("/:id", alterar);
galeriasRouter.delete("/:id", excluir);

export default galeriasRouter; // Exporta o roteador