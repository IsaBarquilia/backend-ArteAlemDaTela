import resgataArtes from "../models/ArteList.js"
import Arte from "../models/arte.js"
const arteLista = new resgataArtes()

//Função de verificação de imagem
function verifyImage(url) {
  var allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];

  var extension = url.split('.').pop().toLowerCase();

  return allowedExtensions.includes(extension);
}

//Função de obter todas as artes
export const getTodasArtes = (req, res) => {

  let artes = arteLista.getTodasArtes();

  const tipo = req.query.tipo;

  if (tipo) {
    artes = arteLista.buscarporTipo(tipo);
    return res.status(200).send({
      Totaltipo: artes.length, artes
    })
  } else {
    arteLista.getTodasArtes();
  }
  if (!artes) {
    return res.status(404).send({
      message: `Não existem artes cadastradas`
    })
  }
  return res.status(200).send({
    totalArtes: artes.length, artes
  });

};

//Função de obter uma arte por id
export const buscarArtePorID = (req, res) => {
  const { id } = req.params;
  const arte = list.buscarArtePorID(id);

  if (!arte) res.status(404).send({ message: "Arte não encontrada!" });

  return res.send(arte);
};

//Função de criar uma arte
export const criarArtes = (req, res) => {

  const { nomeObra, url, artista, dataProducao, tipo, idadeArtista } = req.body;
  const arte = new Arte(nomeObra, url, artista, dataProducao, tipo, idadeArtista)

  let numerosErros = 0;
  let erros = [];
  console.log(dataProducao)
  console.log(idadeArtista)
  //verificação de todos os campos preenchidos
  if (nomeObra == "" || url == "" || artista == "" || dataProducao == "" || tipo == "" || idadeArtista == "") {
    numerosErros++;
    erros.push("Campo obrigatório vazio!");
  }

  //verificação de caracteres no nome da obra
  if (nomeObra.length < 3) {
    numerosErros++;
    erros.push("O nome da obra precisa ter no mínimo 3 caracteres");
  }

  //verificação se a idade do artista é permitida
  if (idadeArtista < 16) {
    numerosErros++;
    erros.push("Muito jovem para cadastrar!");
  }
  //verificação de caracteres no tipo da obra
  if (tipo.length > 30) {
    numerosErros++;
    erros.push("O tipo da obra deve ter até 15 caracteres!");
  }

  //verificação de caracteres no nome do artista
  if (artista.length > 30) {
    numerosErros++;
    erros.push("O nome do artista deve ter até 30 caracteres!");
  }

  //verificação de imagem
  if (verifyImage(arte.url) == false) {
    numerosErros++;
    erros.push('Imagem inválida');
  }

  if (numerosErros > 0) {
    return res.status(400).send({
      errors: erros,
      status: "BAD REQUEST"
    });
  } else {
    arteLista.criarArtes(arte);
    return res.status(201).send(arte);
  }
};
export const dataProducao = (req, res) => {
  const { dataProducao } = req.params;
  const arteProducao = arteLista.dataProducao(dataProducao);
  if (!arteProducao) res.status(404).send({ message: "arte não encontrada!" });
  return res.send(arteProducao);
}

export const editarArtes = (req, res) => {
  const { id } = req.params;
  const { nomeObra, url, artista, dataProducao, tipo, idadeArtista } = req.body;

  const arteId = arteLista.buscarArtePorID(id);

  if (!arteId) res.status(404).send({ message: "arte não encontrada!" });

  //Se deu certo, enviar todos os dados para o método no Model
  arteLista.editarArtes(nomeObra, url, artista, dataProducao, tipo, idadeArtista) // Retornar arte atualizado
  return res.send(arteLista);
}
export const deletarArte = (req, res) => {
  const { id } = req.params;
  const arte = arte.buscarArtePorID(id);

  if (!arte) res.status(404).send({ message: "arte não encontrada!" });

  arte.deletarArte(arte);
  return res.send({ message: "arte removida com sucesso!" });
}
