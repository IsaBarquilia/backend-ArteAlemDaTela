import {v4 as uuidv4 }from "uuid"
class arte{
    constructor(nomeObra,url,artista, dataProducao, tipo){
        this.nomeObra =nomeObra, 
        this.url =url;
        this.artista=artista; 
        this.dataProducao=dataProducao;
        this.tipo = tipo;
        this.id=uuidv4()
    }
}
export default arte;