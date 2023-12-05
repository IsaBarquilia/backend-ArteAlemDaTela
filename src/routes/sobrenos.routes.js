import { Router } from "express";

//O código importa funções do arquivo sobrenos.controller.js que tratam das operações do grupo "Sobre Nós", 
//incluindo obtenção de integrantes, busca por ID, criação, edição e exclusão de integrantes na aplicação.

import { 
    getIntegrantes, 
    getIntegrantePorId, 
    criarIntegrante, 
    editarIntegrante, 
    deletarIntegrante
  } 
    from "../controllers/sobrenos.controller.js";

    const rotasSobreNos = new Router();

    rotasSobreNos.get("/", getIntegrantes);
    rotasSobreNos.get("/:id", getIntegrantePorId);
    rotasSobreNos.post("/", criarIntegrante);
    rotasSobreNos.put("/:id", editarIntegrante);
    rotasSobreNos.delete("/:id", deletarIntegrante);

    export default rotasSobreNos;