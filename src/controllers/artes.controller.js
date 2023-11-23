import resgataArtes from "../models/ArteList.js"

const arte = new resgataArtes()

//Função de verificação de imagem
function verifyImage(url) {
    var allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
  
    var extension = url.split('.').pop().toLowerCase();
  
    return allowedExtensions.includes(extension);
  }

  //Função de obter todas as artes
export const getTodasArtes = (req , res) => {

    let artes = arte.getTodasArtes();

    const tipo = req.query.tipo;

    if(tipo){
        artes = arte.buscarporTipo(tipo);
        return res.status(200).send({
            Totaltipo:artes.length, artes
        })
    }else{
        artes.arte.getTodasArtes();
    }
    if(!artes){
        return res.status(404).send({
            message: `Não existem artes cadastradas`
          })
    }
    return res.status(200).send({
        totalArtes: artes.length, artes
      });
    
    };

    //Função de obter uma arte por id
    export const buscarArtePorId = (req, res) => {
        const { id } = req.params;
        const arte = list.buscarArtePorID(id);
      
        if (!arte) res.status(404).send({ message: "Arte não encontrada!" });
      
        return res.send(arte);
      };
     
        //Função de criar uma arte
    export const criarArtes = (req, res) => {
        const { nome, imagem, tipo, obra } = req.body;
      
        if (!nome || !imagem || !tipo || !obra) {
          return res
            .status(400)
            .send({ message: "Você deve informar o nome, imagem, tipo e obra!" });
        }
      
        if (!verifyImage(imagem)) {
          return res
            .status(400)
            .send({ message: "Você deve informar uma imagem válida!" });
        }
      
        const arte = list.criarArte(nome, imagem, tipo, obra);
      
        return res.status(201).send(arte);
      }
    