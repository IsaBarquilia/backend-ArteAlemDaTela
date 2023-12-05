import GaleriaList from "../models/GaleriaList.js"; //importaçao da pagina GaleriaList
import Galeria from "../models/Galeria.js"; //importaçao da pagina  de estilizaçao da pagina Galeria.js

//Esse trecho de código cria uma nova lista de galerias, armazenando-a na variável galeriaList. 
//Essa lista é gerenciada por meio dos métodos e propriedades da classe GaleriaList.

const galeriaList =new GaleriaList();

//essa função cria uma nova galeria com base nos dados fornecidos na requisição e a 
//adiciona à lista de galerias. Em seguida, retorna os detalhes da galeria cadastrada como resposta à requisição, 
//indicando que o cadastro foi realizado com sucesso.

export const cadastrar = (req, res) => {
    const { nome, cidade, rua, numero } = req.body;

    const galeria = new Galeria(nome, cidade, rua, numero);

    galeriaList.cadastrar(galeria);

    return res.status(201).send(galeria);
  }

  //Essa função retorna todas as galerias presentes na lista de galerias como resposta à requisição, 
  //indicando que a operação foi bem-sucedida.

export const listar  = (req, res) => {
    const galerias = galeriaList.listar();

    return res.status(200).send(galerias);
  }

  //essa função busca uma galeria pelo seu ID na lista de galerias. Se a galeria é encontrada, 
  //retorna os detalhes da galeria. Se não for encontrada, 
  //retorna um erro indicando que a galeria não existe.
export const buscarPorId = (req, res) => {
    const { id } = req.params;

    const galeria =  galeriaList.buscarPorId(Number(id));

    if (!galeria) {
      return res.status(404).send({ message: "Galeria não encontrado!" });
    }

    return res.status(200).send(galeria);
  }

  //essa função procura uma galeria pelo seu ID na lista de galerias, altera os detalhes com os novos dados 
  //fornecidos e retorna os detalhes da galeria alterada. Se a galeria não é encontrada,
  // retorna um erro indicando que a galeria não existe.
export const alterar = (req, res) => {
    const { id } = req.params;
    const { nome, cidade, rua, numero } = req.body;

    const galeria = galeriaList.alterar(Number(id), nome,  cidade, rua, numero);

    if (!galeria) {
      return res.status(404).send({ message: "Galeria não encontrada!" });
    }

    return res.status(200).send(galeria);
  }

  //Essa função busca uma galeria pelo ID na lista de galerias e a exclui. Se a galeria é encontrada, 
  //ela é removida da lista e os detalhes da galeria excluída são retornados como resposta. 
  // Se a galeria não é encontrada, retorna um erro indicando que a galeria não existe.
export const excluir = (req, res) => {
    const { id } = req.params;

    const galeria = galeriaList.excluir(Number(id));

    if (!galeria) {
      return res.status(404).send({ message: "Galeria não encontrada!" });
    }

    galeriaList.excluir(Number(id));

    return res.status(200).send(galeria); 
  }