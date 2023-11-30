import { Router } from "express";
import { 
    getIntegrantes, 
    getIntegrantePorId, 
    criarIntegrante, 
    editarIntegrante, 
    deletarIntegrante
  } 
    from "../controllers/sobrenos.controller";

    const rotasSobreNos = new Router();

    rotasSobreNos.get("/", getIntegrantes);
    rotasSobreNos.get("/:id", getIntegrantePorId);
    rotasSobreNos.post("/", criarIntegrante);
    rotasSobreNos.put("/:id", editarIntegrante);
    rotasSobreNos.delete("/:id", deletarIntegrante);

    export default rotasSobreNos;