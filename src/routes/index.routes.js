import { Router } from "express";
import rotasArtes from "./arte.routes.js";

const router = Router()

router.use("/artes", rotasArtes);

router.get("/", (req, res) => {
    return res.status(200).send({ message: "Rota está funcionando!" });
});

export default router;