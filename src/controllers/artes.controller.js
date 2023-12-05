
import obras from "../data/obras.js"; //importaçao pagina obras js
import resgataArtes from "../models/ArteList.js"; //importaçao pagina ArteList js
import Arte from "../models/arte.js"; //importaçao pagia obras js

//cont responsavel em criar novas artes
const arteLista = new resgataArtes()

//mapea as artes
obras.map(arte => new Arte(
  arte.nomeObra,
  arte.url,
  arte.idadeArtista,
  arte.artista ,
  arte.dataProducao,
  arte.tipo,

)) .forEach(obras => arteLista.criarArtes(obras));



//Função de verificação de imagem
function verifyImage(url) {
  var allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];

  var extension = url.split('.').pop().toLowerCase();

  return allowedExtensions.includes(extension);
}

//Função de obter todas as artes
export const getTodasArtes = (req, res) => {
  const tipo = req.query.tipo;
  let artes;


  //Se 'tipo' estiver presente nos parâmetros de consulta
  if (tipo) {
    artes = arteLista.buscarporTipo(tipo);
    return res.status(200).send({
      Totaltipo: artes.length,
      artes
    });
  } else {
    artes = arteLista.getTodasArtes();
  }
//Se não houver artes cadastradas, o código retorna um erro 404 dizendo que não existem artes. 
//Se houver, ele retorna um sucesso 200 com o número total de artes e a lista delas.

  if (artes.length === 0) {
    return res.status(404).send({
      message: `Não existem artes cadastradas`
    });
  }

  return res.status(200).send({
    totalArtes: artes.length,
    artes
  });
};

//Função de obter uma arte por id
export const buscarArtePorID = (req, res) => {
  const { id } = req.params;
  const arte = arteLista.buscarArtePorID(id);

  if (arte) {
    return res.status(200).send(arte);
  }
  else {
    return res.status(404).send({
      message: `Não existe arte com o id ${id}`
    })
  }
};

//Ela extrai um parâmetro chamado dataProducao da requisição e usa esse parâmetro para encontrar uma arte específica. 
//Se a arte não for encontrada, retorna um erro 404. Se encontrada, retorna a arte como resposta.
export const dataProducao = (req, res) => {
  const { dataProducao } = req.params;
  const arteProducao = arteLista.dataProducao(dataProducao);

  if (!arteProducao) {
    return res.status(404).send({
      message: "Arte não encontrada!"
    });
  }

  return res.send(arteProducao);
};
//Esse código cria uma arte, verificando se os dados da requisição estão corretos. Ele checa campos obrigatórios, 
//comprimento do texto, idade do artista, tamanho do texto e se a URL da imagem é válida. Se tudo estiver certo, 
//adiciona a arte a uma lista. Se houver algum erro nos dados, retorna uma mensagem indicando o problema.
export const criarArtes = (req, res) => {

  const { nomeObra, url, artista, dataProducao, tipo, idadeArtista } = req.body;
  const arte = new Arte(nomeObra, url, artista, dataProducao, tipo, idadeArtista)

  let numerosErros = 0;
  let erros = [];

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

  //Se houver erros nos dados da arte, o código retorna um status de erro 400 junto com uma lista de erros.
  // Caso contrário, se os dados estiverem corretos, 
  //ele adiciona a arte à lista e retorna um status de sucesso 201 com os detalhes da arte criada.
  if (numerosErros > 0) {
    return res.status(400).send({
      errors: erros,
      status: "ERRO"
    });
  } else {
    arteLista.criarArtes(arte);
    return res.status(201).send(arte);
  }
};

//Essa função busca uma arte pelo ID fornecido na requisição. 
//Se a arte é encontrada, atualiza suas informações com os novos dados recebidos e retorna uma mensagem de 
//sucesso com os detalhes da arte atualizada. Se a arte não é encontrada, retorna uma mensagem indicando que 
//a arte não foi encontrada.


export const editarArtes = (req, res) => {
  const { id } = req.params;
  const { nomeObra, url, artista, dataProducao, tipo, idadeArtista } = req.body;
  const arteId = arteLista.buscarArtePorID(id);

  if (!arteId) {
    return res.status(404).send({ message: "Arte não encontrada!" });
  }

  const arteAtualizada = arteLista.editarArtes(
    nomeObra,
    url,
    artista,
    dataProducao,
    tipo,
    idadeArtista,
    id
  );

  return res.send({
    message: "Arte atualizada!",
    arteAtualizada
  });
};

//Essa função busca a arte pelo ID fornecido. Se a arte é encontrada, ela é removida da lista de artes e uma mensagem confirmando a remoção é enviada como resposta. Se a arte não é encontrada, 
//retorna uma mensagem indicando que a arte não foi encontrada.
export const deletarArte = (req, res) => {
  const { id } = req.params;
  const arte = arteLista.buscarArtePorID(id);

  if (!arte) res.status(404).send({ message: "Arte não encontrada!" });

  arteLista.deletarArte(arte);
  return res.send({ message: "Arte removida com sucesso!" });
};