import { Router } from "express"
import {
    getTodasArtes,
    buscarArtePorID,
    criarArtes,
    editarArtes,
    deletarArte,
} from "../controllers/artes.controller.js"

const rotasArtes = Router();

rotasArtes.get("/", getTodasArtes);
rotasArtes.get("/:id", buscarArtePorID);
rotasArtes.post("/", criarArtes);
rotasArtes.put("/:id", editarArtes);
rotasArtes.delete("/:id", deletarArte);

export default rotasArtes;