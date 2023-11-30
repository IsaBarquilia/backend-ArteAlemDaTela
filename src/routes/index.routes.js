import { Router } from "express";
import rotasArtes from "./arte.routes.js";
import rotasSobreNos from "./sobrenos.routes.js";
import contato from "./contato.routes.js";

const router = Router()
router.use("/", rotasArtes); //Rota para puxar as artes
router.use("/sobrenos", rotasSobreNos); //Rota para puxar os integrantes
router.use("/contato", contato); //Rota para puxar o contato



export default router;