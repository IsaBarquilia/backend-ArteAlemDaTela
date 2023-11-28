import contato from "../models/contato.js";

const ctt = new contato();

//funçao verifica nome (maior que dois e menos que 40 algarismos).
function verificanome(nome){
    if(nome.length < 2 || nome.length > 40){
        return false;
    }
    return true;
}
//funcao verifica se o email é valido. 
function verificaemail(email){
    const verifica = ["gmail", "hotmail", "outlook", "yahoo", "bol"];
    const extensao = email.split('@').pop().toLowerCase();
    return verifica.includes(extensao);
}

export const adicionarArtista = (req, res) => {
    const {nome, email} = req.body;

    if(!nome || !email){
        return res.status(400).send({message:"Dados inválidos"});
    }

    if(!verificaemail(imagem)){
        return res.status(400).send({message:"Email inválido"});
    }
}

//deletar a mensagem do usuario 
//deletar integrantes caso o usuario informar id nao cadastrado retorna mensagem de integrante nao encontrado.

export const deletarArtista = (req, res) => {
    const {id} = req.params;

    const artista = sobre.deletarArtista(id);

    if(!artista){
        return res.status(404).send({message:"Artista não encontrado"});
    }

    sobre.deletarArtista(id);

    return res.status(200).send(artista);
}

//editar mensagem caso o artista tenha escrito algo errado.
export const editarMsg = (req, res) => {
    const {id} = req.params;
    const {nome, email} = req.body;

    if(!nome || !email){
        return res.status(400).send({message:"Dados inválidos"});
    }

    if(!verificanome(nome)){
        return res.status(400).send({message:"Nome inválido"});
    }

    if(!verificaemail(email)){
        return res.status(400).send({message:"Email inválido"});
    }

    const artista = sobre.editarMsg(id, nome, email);

    if(!artista){
        return res.status(404).send({message:"Artista não encontrado"});
    }

    return res.status(200).send(artista);
}