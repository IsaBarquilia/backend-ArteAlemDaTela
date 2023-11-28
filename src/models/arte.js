import {v4 as uuidv4 }from "uuid"
class Arte{
    constructor(nomeObra, url, artista, dataProducao, tipo, idadeArtista){
        this.nomeObra =nomeObra, 
        this.url =url;
        this.idadeArtista=idadeArtista; 
        this.artista =artista;
        this.dataProducao=dataProducao;
        this.tipo = tipo;
        this.id=uuidv4()
    }
}
export default Arte;