import { Router } from "express";
import rotasArtes from "./arte.routes.js";
import rotasSobreNos from "./sobrenos.routes.js";


const router = Router()
router.use("/sobrenos", rotasSobreNos); //Rota para puxar os integrantes
router.use("/", rotasArtes); //Rota para puxar as artes

export default router;