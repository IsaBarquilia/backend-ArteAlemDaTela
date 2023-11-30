import GaleriaList from "../models/ArteList.js";
import Galeria from "../models/Galeria.js";
import GaleriaList from "../models/GaleriaList.js";

const GaleriaList =new GaleriaList();

export const cadastrar = (req, res) => {
    const { nome, cidade, rua, numero } = req.body;

    const galeria = new Galeria(nome, cidade, rua, numero);

    GaleriaList.cadastrar(galeria);

    return res.status(201).send(galeria);
  }

export const listar  = (req, res) => {
    const galerias = GaleriaList.listar();

    return res.status(200).send(galerias);
  }

export const buscarPorId = (req, res) => {
    const { id } = req.params;

    const galeria =  GaleriaList.buscarPorId(Number(id));

    if (!galeria) {
      return res.status(404).send({ message: "Galeria não encontrado!" });
    }

    return res.status(200).send(galeria);
  }

export const alterar = (req, res) => {
    const { id } = req.params;
    const { nome, cidade, rua, numero } = req.body;

    const galeria = GaleriaList.alterar(Number(id), nome,  cidade, rua, numero);

    if (!galeria) {
      return res.status(404).send({ message: "Galeria não encontrada!" });
    }

    return res.status(200).send(galeria);
  }

export const excluir = (req, res) => {
    const { id } = req.params;

    const galeria = GaleriaList.buscarPorId(Number(id));

    if (!galeria) {
      return res.status(404).send({ message: "Galeria não encontrada!" });
    }

    GaleriaList.excluir(Number(id));

    return res.status(204).send(galeria);
  }