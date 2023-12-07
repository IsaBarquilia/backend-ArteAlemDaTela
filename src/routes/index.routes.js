import { Router } from "express";
import rotasArtes from "./arte.routes.js"; //importa as rotas relacionadas às operações de arte de um arquivo 

import galeriasRouter from "./galeria.routes.js"; 
import artistasRouter from "./artistas.routes.js";

//Esse código cria um roteador principal que encaminha conjuntos específicos de rotas para caminhos distintos 
//na aplicação Express.js. Ele gerencia rotas para galerias, informações sobre o grupo "Sobre Nós" e operações 
//relacionadas a artes, cada um acessível por um caminho específico na aplicação.

const router = Router()
router.use("/galerias", galeriasRouter);
router.use("/artistas", artistasRouter); //Rota para puxar os integrantes
router.use("/", rotasArtes); //Rota para puxar as artes

export default router;