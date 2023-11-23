import { Router } from "express";
import rotasArtes from "./arte.routes.js";
import rotasSobreNos from "./sobrenos.routes.js"

const router = Router()
router.use("/", rotasArtes); //Rota para puxar as artes
router.use("/sobrenos", rotasSobreNos); //Rota para puxar os integrantes

router.get("/", (req, res) => {
    return res.status(200).send({ message: "Rota está funcionando!" }); //Rota para ver se o servidor está funcionando
});

export default router;