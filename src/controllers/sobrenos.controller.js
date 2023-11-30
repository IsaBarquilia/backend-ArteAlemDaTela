import { SobreNosList } from "../models/sobrenosList.js";
import { Sobrenos } from "../models/sobrenos.js";

const sobrenosList = new SobreNosList();

export const getIntegrantes = (req , res) =>{
    const integrantes = sobrenosList.getIntegrantes();

    if(integrantes.length){
        return res.status(200).send(integrantes);
    }
    return res.status(404).send({message:"Não há integrantes cadastrados"});
};

export const getIntegrantePorId = (req, res) =>{
    const { id } = res.params;
    const integrante = sobrenosList.getIntegrantesPorId(id);

    if(integrante) res.status(404).send({message:"Integrante não encontrado"});

    return res.send(integrante);
};

export const criarIntegrante = (req, res) =>{
    const {nome, idade, imagem} = req.body;
    const integrante = new Sobrenos(nome, idade, imagem);

    sobrenosList.criarIntegrante(integrante);

    return res.status(201).send(integrante);
}

export const editarIntegrante  = (res, res) =>{
    const { id } = req.params;
    const {nome, idade, imagem} = req.body;
    const integrante = sobrenosList.getIntegrantesPorId(id);

    if(!integrante)res.status(404).send({message:"Integrante não encontrado"});

    sobrenosList.editarIntegrante(id, nome, idade, imagem);

    return res.send(integrante);
}

export const deletarIntegrante = (req, res) =>{
    const { id } = req.params;
    const integrante = sobrenosList.getIntegrantesPorId(id);

    if(!integrante) res.status(404).send({message:"Integrante não encontrado"});

    sobrenosList.deletarIntegrante(id);

    return res.send(integrante);
}