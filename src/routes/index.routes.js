import { Router } from "express";
import rotasArtes from "./arte.routes.js";

const router = Router()
router.use("/arte", rotasArtes)
router.get("/", (req, res) => {
    return res.status(200).send({ message: "Rota ta funfionando" });
});
export default router