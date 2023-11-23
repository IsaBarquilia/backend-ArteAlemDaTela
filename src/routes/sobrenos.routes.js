import { Router } from "express";
import {
     getTodosIntegrantes, 
     getIntegrantesByid,
     editarIntegrante,
     deletarIntegrante,
     adicionarIntegrantes 
    } 
    from "../controllers/sobrenos.controller.js";


const rotasSobreNos = new Router();

//rotas para puxar as informaçoes
rotasSobreNos.get("/", getTodosIntegrantes);//rota todos os integrantes
rotasSobreNos.get("/:id", getIntegrantesByid);// rota integrantes por id
rotasSobreNos.put("/:id",editarIntegrante);// rota editar integrante por id
rotasSobreNos.delete("/:id", deletarIntegrante);// rota deletar integrante por id
rotasSobreNos.post("/", adicionarIntegrantes);//rota adicionar integrante

export default rotasSobreNos;