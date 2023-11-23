import sobreNos from "../models/sobrenosList.js"

const sobre = new sobreNos();

//verificar imagem, só ira funcionar se tiver as tages jpg,jpeg,png,gif ou bmp
function verificaimg(url){
    const verifica = ["jpg", "jpeg", "png", "gif", "bmp"];

    const extensao = url.split('.').pop().toLowerCase();

    return verifica.includes(extensao);

}

//obter todos os integrantes caso nao houver retorna a mensagem que nao ha integrantes cadastrados
export const getTodosIntegrantes = (req, res) => {

    let nos = sobre.getTodosIntegrantes();

    if(!nos){
        return res.status(404).send({message:"Não há integrantes cadastrados"});
    }

    //puxar dados do array
    return res.status(200).send({Integrantes: nos.length, nos});
}

//obter integrantes por id caso nao houver retorna a mensagem que nao ha integrantes cadastrados
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
//verifica numero de caracteres do nome
    if(nome.length < 3 || nome.length > 30){
        return res.status(400).send({message:"Nome deve conter entre 3 e 30 caracteres"});
    }
//verifica idade
    if(idade < 0 ){
    return res.status(400).send({message:"Idade Inválida"});
}
    const integrantes = sobre.adicionarIntegrantes(nome, idade, imagem)
        return res.status(200).send(integrantes);
    
}

//deletar integrantes caso o usuario informar id nao cadastrado retorna mensagem de integrante nao encontrado
export const deletarIntegrante = (req, res) => {
    const {id} = req.params;

    const integrantes = sobre.deletarIntegrante(id);

    if(!integrantes){
        return res.status(404).send({message:"Integrante não encontrado"});
    }

    sobre.deletarIntegrante(id);

    return res.status(200).send(integrantes);
}

//edita integrante conforme o id cadastrado caso o id nao for encontrado a mensagem 
//sera de integrante nao encontrado, caso a imagem seja invalida a mensagem sera de
//imagem invalida e caso os dados forem invalidos a mensagem sera de dados invalidos

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

