import { Router } from "express"
import { getTodasArtes, getArtesByid, criarArtes, editarArtes, deletarArte, buscarporObra, buscarporTipo } from "../controllers/artes.controller.js"

const rotasArtes = Router(); 

rotasArtes.get("/", getTodasArtes);
rotasArtes.get("/:id", getArtesByid);
rotasArtes.post("/", criarArtes);
rotasArtes.put("/:id", editarArtes);
rotasArtes.delete("/:id", deletarArte);
rotasArtes.get("/:obra", buscarporObra);
rotasArtes.get("/:tipo", buscarporTipo);


export default rotasArtes;