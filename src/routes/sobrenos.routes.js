import { Router } from "express";
import { getTodosIntegrantes, getIntegrantesByid,editarIntegrante,deletarIntegrante,adicionarIntegrantes } from "../controllers/sobrenos.controller.js";


const routes = new Router();

routes.get("/", getTodosIntegrantes);
routes.get("/:id", getIntegrantesByid);
routes.put("/:id",editarIntegrante);
routes.delete("/:id", deletarIntegrante);
routes.post("/", adicionarIntegrantes);
