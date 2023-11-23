import { Router } from "express"
import { getTodasArtes, getArtesByid, criarArtes, editarArtes, deletarArte, buscarporObra, buscarporTipo } from "../controllers/artes.controller.js"

const rotasArtes = Router(); 

rotasArtes.get("/", getTodasArtes); //Rota para puxar todas as obras

rotasArtes.get("/:id", getArtesByid); //Rota para puxar apenas a obra do id solicitado

rotasArtes.post("/", criarArtes); //Rota para criar mais obras

rotasArtes.put("/:id", editarArtes); //Rota para conseguir editar apenas a obra do id solicitado

rotasArtes.delete("/:id", deletarArte); //Rota para conseguir deletar apenas a obra do id solicitado

rotasArtes.get("/:obra", buscarporObra); //Rota para conseguir buscar pelo nome da obra

rotasArtes.get("/:tipo", buscarporTipo); //Rota para conseguir puxar apenas a obra do tipo digitado

export default rotasArtes;