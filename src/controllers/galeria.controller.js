import GaleriaList from "../models/GaleriaList.js";
import Galeria from "../models/Galeria.js";


const galeriaList =new GaleriaList();

export const cadastrar = (req, res) => {
    const { nome, cidade, rua, numero } = req.body;

    const galeria = new Galeria(nome, cidade, rua, numero);

    galeriaList.cadastrar(galeria);

    return res.status(201).send(galeria);
  }

export const listar  = (req, res) => {
    const galerias = galeriaList.listar();

    return res.status(200).send(galerias);
  }

export const buscarPorId = (req, res) => {
    const { id } = req.params;

    const galeria =  galeriaList.buscarPorId(Number(id));

    if (!galeria) {
      return res.status(404).send({ message: "Galeria não encontrado!" });
    }

    return res.status(200).send(galeria);
  }

export const alterar = (req, res) => {
    const { id } = req.params;
    const { nome, cidade, rua, numero } = req.body;

    const galeria = galeriaList.alterar(Number(id), nome,  cidade, rua, numero);

    if (!galeria) {
      return res.status(404).send({ message: "Galeria não encontrada!" });
    }

    return res.status(200).send(galeria);
  }

export const excluir = (req, res) => {
    const { id } = req.params;

    const galeria = galeriaList.excluir(Number(id));

    if (!galeria) {
      return res.status(404).send({ message: "Galeria não encontrada!" });
    }

    galeriaList.excluir(Number(id));

    return res.status(200).send(galeria); 
  }