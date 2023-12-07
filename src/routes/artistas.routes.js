import { Router } from "express";

//Um conjunto específico de funções, responsáveis pela gestão e manipulação das informações das artes, 
//é importado do arquivo artes.controller.js. Essas funções incluem operações como obter todas as artes, 
//buscar uma arte por ID, criar, editar e deletar uma arte. Ao importá-las, elas se tornam acessíveis para uso 
//em outro arquivo, possivelmente para executar operações relacionadas à gestão de artes em um sistema ou aplicativo.
import {
    getIntegrantes,
    getIntegrantePorId,
    criarIntegrante,
    editarIntegrante,
    deletarIntegrante
    
} from "../controllers/artistas.controller.js"


//um conjunto de rotas para gerenciar operações relacionadas às artes na aplicação web, permitindo a definição 
//de endpoints para manipular requisições HTTP associadas à gestão de informações de arte. Essas rotas organizam 
//as funcionalidades específicas do servidor para atender a solicitações direcionadas a essas operações
const artistasRouter = Router();

//Cada rota está associada a uma função específica: getTodasArtes, buscarArtePorID, criarArtes, 
//editarArtes e deletarArte. Essas funções provavelmente correspondem a operações CRUD (Criar, Ler, Atualizar, 
//Deletar) relacionadas à gestão das informações das artes no sistema. Essas rotas determinam como as requisições
// HTTP serão tratadas e respondidas em relação às operações de gerenciamento de arte.


artistasRouter.get("/",getIntegrantes );
artistasRouter.get("/:id", getIntegrantePorId);
artistasRouter.post("/", criarIntegrante);
artistasRouter.put("/:id",editarIntegrante );
artistasRouter.delete("/:id",deletarIntegrante  );



export default artistasRouter;