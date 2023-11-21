import {ArteList} from "../models/ArteList.js"

const arte = new ArteList()
function verifyImage(url) {
    var allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
  
    var extension = url.split('.').pop().toLowerCase();
  
    return allowedExtensions.includes(extension);
  }
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
}