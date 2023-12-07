
import { SobreNosList } from "../models/sobrenosList.js";
import { Sobrenos } from "../models/sobrenos.js";
import Artistas from "../data/artistas.js";



//Esse trecho de código cria uma nova lista chamada sobrenosList que será usada para gerenciar informações sobre o "Sobre Nós".
// Essa lista é controlada por meio dos métodos e propriedades da classe SobreNosList.
const sobrenosList = new SobreNosList();


Artistas.map( sobrenos => {
    const novoArtista = new Sobrenos(
        sobrenos.nome,
        sobrenos.idade,
        sobrenos.imagem,
    )
sobrenosList.criarIntegrante(novoArtista)
})




//essa função analisa a URL fornecida, identifica a extensão do arquivo na URL e verifica 
//se essa extensão está na lista de extensões de imagem permitidas. Se estiver, retorna true; se não estiver, retorna false,
// indicando se a URL corresponde a uma imagem com uma extensão permitida

function verifyImage(url) {
    var allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];

    var extension = url.split('.').pop().toLowerCase();

    return allowedExtensions.includes(extension);
  }

  //essa função busca os integrantes na lista relacionada ao "Sobre Nós" e, se houver integrantes, os retorna. 
  //Caso contrário, se não houver integrantes cadastrados,  retorna uma mensagem informando sobre a ausência de integrantes.
export const getIntegrantes = (req, res) => {
    const integrantes = sobrenosList.getIntegrantes();

    if (integrantes.length) {
        return res.status(200).send(integrantes);
    }
    return res.status(404).send({ message: "Não há integrantes cadastrados" });
};

//Essa função busca um integrante na lista relacionada ao "Sobre Nós" pelo ID fornecido na requisição e, 
//se encontrado, retorna os detalhes desse integrante. Se não for encontrado,
// retorna uma mensagem indicando que o integrante não existe.

export const getIntegrantePorId = (req, res) => {
    const { id } = req.params;
    const integrante = sobrenosList.getIntegrantesPorId(id);

    if (!integrante) res.status(404).send({ message: "Integrante não encontrado" });

    return res.send(integrante);
};




//essa função valida os dados recebidos, cria um novo integrante e o adiciona à lista de integrantes. 
//Em seguida, retorna os detalhes desse integrante como resposta à requisição, indicando que a criação foi bem-sucedida.
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

//Essa função busca um integrante na lista do "Sobre Nós" pelo ID fornecido na requisição, atualiza suas informações com os novos dados enviados e retorna os detalhes desse integrante, confirmando que a edição foi concluída com sucesso. 
//Se o integrante não é encontrado, retorna uma mensagem indicando que não foi possível localizá-lo.
export const editarIntegrante = (req, res) => {
    const { id } = req.params;
    const { nome, idade, imagem } = req.body;
    const integrante = sobrenosList.getIntegrantesPorId(id);

    if (!integrante) res.status(400).send({ message: "Integrante não encontrado" });

    sobrenosList.editarIntegrante(id, nome, idade, imagem);

    return res.send(integrante);
}

//Essa função busca um integrante na lista do "Sobre Nós" pelo ID fornecido na requisição e o remove da lista. Em seguida, retorna os detalhes desse integrante que foi removido. 
//Se o integrante não for encontrado, retorna uma mensagem indicando que o integrante não existe.
export const deletarIntegrante = (req, res) => {
    const { id } = req.params;
    const integrante = sobrenosList.getIntegrantesPorId(id);

    if (!integrante) res.status(404).send({ message: "Integrante não encontrado" });

    sobrenosList.deletarIntegrante(id);

    return res.send(integrante);
}
