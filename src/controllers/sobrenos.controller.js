import sobreNos from "../models/sobrenosList.js"

const sobre = new sobreNos();

//verificar imagem

function verificaimg(url){
    const verifica = ["jpg", "jpeg", "png", "gif", "bmp"];

    const extensao = url.split('.').pop().toLowerCase();

    return verifica.includes(extensao);

}

export const getTodosIntegrantes = (req, res) => {

    let nos = sobre.getTodosIntegrantes();

    if(!nos){
        return res.status(404).send({message:"Não há integrantes cadastrados"});
    }

    return res.status(200).send({Integrantes: nos.length, nos});
}

export const getIntegrantesByid = (req, res) => {
    
        const {id} = req.params;
        const integrantes = sobre.getIntegrantesByid(id);
    
        if(!integrantes){
            return res.status(404).send({message:"Integrante não encontrado"});
        }
    
        return res.status(200).send(integrantes);
    }

export const adicionarIntegrantes = (req, res) => {

    const {nome, idade, imagem} = req.body;

    if(!nome || !idade || !imagem){
        return res.status(400).send({message:"Dados inválidos"});
    }

    if(!verificaimg(imagem)){
        return res.status(400).send({message:"Imagem inválida"});
    }

    const integrantes = sobre.adicionarIntegrantes(nome, idade, imagem)
        return res.status(200).send(integrantes);
    
}

//deletar integrante
export const deletarIntegrante = (req, res) => {
    const {id} = req.params;

    const integrantes = sobre.deletarIntegrante(id);

    if(!integrantes){
        return res.status(404).send({message:"Integrante não encontrado"});
    }

    sobre.deletarIntegrante(id);

    return res.status(200).send(integrantes);
}

//editar integrante

export const editarIntegrante = (req, res) => {

    const {id} = req.params;
    const {nome, idade, imagem} = req.body;
    const sobre1 = sobre.getIntegrantesByid(id);

    if(!nome || !idade || !imagem){
        return res.status(400).send({message:"Dados inválidos"});
    }

    if(!verificaimg(imagem)){
        return res.status(400).send({message:"Imagem inválida"});
    }

    const integrantes = sobre.editarIntegrante(id, nome, idade, imagem);

    if(!integrantes){
        return res.status(404).send({message:"Integrante não encontrado"});
    }

    return res.status(200).send(integrantes);
}