import { Router } from "express";
import { getTodosIntegrantes, getIntegrantesByid,editarIntegrante,deletarIntegrante,adicionarIntegrantes } from "../controllers/sobrenos.controller.js";


const routes = new Router();

//rotas para puxar as informaçoes
routes.get("/", getTodosIntegrantes);//rota todos os integrantes
routes.get("/:id", getIntegrantesByid);// rota integrantes por id
routes.put("/:id",editarIntegrante);// rota editar integrante por id
routes.delete("/:id", deletarIntegrante);// rota deletar integrante por id
routes.post("/", adicionarIntegrantes);//rota adicionar integrante
