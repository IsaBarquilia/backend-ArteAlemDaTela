import { Router } from "express";
import rotasArtes from "./arte.routes.js";

const router = Router()


router.use("/artes", rotasArtes); //Rota para puxar as artes

router.get("/", (req, res) => {
    return res.status(200).send({ message: "Rota está funcionando!" }); //Rota para ver se o servidor está funcionando
});

export default router;