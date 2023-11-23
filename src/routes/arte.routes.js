import { Router } from "express"
import { getTodasArtes, getArtesByid, criarArtes, editarArtes, deletarArte, buscarporObra, buscarporTipo } from "../controllers/artes.controller.js"

const rotasArtes = Router();  //todas as rotas

//rotas para puxar as informações das obras
rotasArtes.get("/", getTodasArtes);// rota para puxar todos as obras
rotasArtes.get("/:id", getArtesByid);// rota para puxar apenas pelo id 
rotasArtes.post("/", criarArtes);// rota para adicionar obras
rotasArtes.put("/:id", editarArtes);// rota para editar as obras pelo id
rotasArtes.delete("/:id", deletarArte);// rota para deletar as obras pelo id
rotasArtes.get("/:obra", buscarporObra);// rota para buscar a obra pelo nome
rotasArtes.get("/:tipo", buscarporTipo);// rota para buscar a obra pelo tipo


export default rotasArtes;