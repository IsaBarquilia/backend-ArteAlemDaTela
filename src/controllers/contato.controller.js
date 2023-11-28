import contato from "../models/contato.js";

const ctt = new contato();

//funçao verifica nome (maior que dois e menos que 40 algarismos).
export function verificanome(nome){
    if(nome.length < 2 || nome.length > 40){
        return false;
    }
    return true;
}
//funcao verifica se o email é valido. 
export function verificaemail(email){
    const verifica = ["gmail.com", "hotmail", "outlook", "yahoo", "bol"];
    const extensao = email.split('@').pop().toLowerCase();
    return verifica.includes(extensao);
}

//responsavel por adicionar mensagem do artista sendo necessario nome e email caso nao
//for respondido aparecera mensagem de dados invalidos.
export const adicionarArtista = (req, res) => {
    const {nome, email} = req.body;
//verifica campos preenchidos
    if(!nome || !email){
        return res.status(400).send({message:"Dados inválidos"});
    }
//verifica email valido
    if(!verificaemail(email)){
        return res.status(400).send({message:"Email inválido"});
    }
}

//deletar a mensagem do usuario 
//deletar integrantes caso o usuario informar id nao cadastrado retorna mensagem de integrante nao encontrado.

export const deletarArtista = (req, res) => {
//puxa o id do artista
    const {id} = req.params;
//puxa funcao deletar artista pelo seu id
    const artista = sobre.deletarArtista(id);
//verifica existencia do artista no sistema
    if(!artista){
        return res.status(404).send({message:"Artista não encontrado"});
    }

    sobre.deletarArtista(id);

    return res.status(200).send(artista);
}

//editar mensagem caso o artista queira editar o que escreveu.
export const editarMsg = (req, res) => {
//puxar artista por id
    const {id} = req.params;
    const {nome, email} = req.body;
//verifica campos preenchidos 
    if(!nome || !email){
        return res.status(400).send({message:"Dados inválidos"});
    }
//puxa funcao que verifica nome
    if(!verificanome(nome)){
        return res.status(400).send({message:"Nome inválido"});
    }
//puxa funcao que verifica email
    if(!verificaemail(email)){
        return res.status(400).send({message:"Email inválido"});
    }

    const artista = sobre.editarMsg(id, nome, email);

    if(!artista){
        return res.status(404).send({message:"Artista não encontrado"});
    }

    return res.status(200).send(artista);
}