import { SobreNosList } from "../models/sobrenosList.js";
import { Sobrenos } from "../models/sobrenos.js";

const sobrenosList = new SobreNosList();

export const getIntegrantes = (req , res) =>{
    const integrantes = sobrenosList.getIntegrantes();

    if(integrantes.length){
        return res.status(200).send(integrantes);
    }
    return res.status(404).send({message:"Não há integrantes cadastrados"});
}