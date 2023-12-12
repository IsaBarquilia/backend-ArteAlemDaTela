//É uma classe JavaScript chamada Arte que recebe informações sobre obras de arte, como nome, URL da imagem, detalhes do artista e data de produção. Além disso, ela gera um identificador único para cada obra utilizando a biblioteca uuid. 
//Essa classe pode ser utilizada para criar e manipular dados sobre obras de arte em um programa ou sistema.

import {v4 as uuidv4 }from "uuid"
class Arte{
    constructor(nomeObra, url,  tipo ,artista, idadeArtista, dataProducao){
        this.nomeObra =nomeObra, 
        this.url =url;
        this.tipo = tipo;
        this.artista =artista;
        this.idadeArtista=idadeArtista; 
        this.dataProducao=dataProducao;
     
        this.id=uuidv4()
    }
}
export default Arte;