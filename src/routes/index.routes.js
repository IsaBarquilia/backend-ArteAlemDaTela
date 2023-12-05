import { Router } from "express";
import rotasArtes from "./arte.routes.js";
import rotasSobreNos from "./sobrenos.routes.js";
import galeriasRouter from "./galeria.routes.js";


const router = Router()
router.use("/galerias", galeriasRouter);
router.use("/artistas", rotasSobreNos); //Rota para puxar os integrantes
router.use("/", rotasArtes); //Rota para puxar as artes

export default router;