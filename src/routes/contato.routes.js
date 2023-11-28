import { Router } from "express";

import {
    verificanome, 
    verificaemail,
    adicionarArtista,
    deletarArtista,
    editarMsg} 
   from "../controllers/contato.controller.js";

   const rotasContato = new Router();

   //rotas para puxar as informaçoes
    rotasContato.post("/", adicionarArtista);
    rotasContato.delete("/:id", deletarArtista);
    rotasContato.put("/:id", editarMsg);
    //rotas para teste de validação
    rotasContato.get("/nome/:nome", verificanome);
    rotasContato.get("/email/:email", verificaemail);
    export default rotasContato;
