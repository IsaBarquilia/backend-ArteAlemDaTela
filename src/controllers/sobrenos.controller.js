import { SobreNosList } from "../models/sobrenosList.js";
import integrantes from "../data/sobreNos.js";
import { Sobrenos } from "../models/sobrenos.js";

const sobrenosList = new SobreNosList();
obras.map(integrante => new integrantes(
integrante.nome,
integrante.idade,
integrante.imagem,
)) .forEach(getIntegrantes => sobrenosList.criarIntegrante(integrantes));


function verifyImage(url) {
    var allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
  
    var extension = url.split('.').pop().toLowerCase();
  
    return allowedExtensions.includes(extension);
  }

export const getIntegrantes = (req, res) => {
    const integrantes = sobrenosList.getIntegrantes();

    if (integrantes.length) {
        return res.status(200).send(integrantes);
    }
    return res.status(404).send({ message: "Não há integrantes cadastrados" });
};

export const getIntegrantePorId = (req, res) => {
    const { id } = req.params;
    const integrante = sobrenosList.getIntegrantesPorId(id);

    if (!integrante) res.status(404).send({ message: "Integrante não encontrado" });

    return res.send(integrante);
};

export const criarIntegrante = (req, res) => {
    const { nome, idade, imagem } = req.body;
    



    if (nome == "" || idade == "" || imagem == ""){
        return res.status(400).send({message: "Preencha todos os campos"});
    }
    if (nome.length < 3){
        return res.status(400).send({message:"Digite no minímo 3 caracteres"});
     }

    if(verifyImage(imagem) == false){
        return res.status(400).send({message:"Imagem inválida"});
     }

     if(idade < 16 || idade > 116){
        return res.status(400).send({message: "Idade minima 16 anos e maxima 117"});
     }
     const integrante = new Sobrenos(nome, idade, imagem);


        sobrenosList.criarIntegrante(integrante);

        return res.status(201).send(integrante);


   
}

export const editarIntegrante = (req, res) => {
    const { id } = req.params;
    const { nome, idade, imagem } = req.body;
    const integrante = sobrenosList.getIntegrantesPorId(id);

    if (!integrante) res.status(400).send({ message: "Integrante não encontrado" });

    sobrenosList.editarIntegrante(id, nome, idade, imagem);

    return res.send(integrante);
}

export const deletarIntegrante = (req, res) => {
    const { id } = req.params;
    const integrante = sobrenosList.getIntegrantesPorId(id);

    if (!integrante) res.status(404).send({ message: "Integrante não encontrado" });

    sobrenosList.deletarIntegrante(id);

    return res.send(integrante);
}