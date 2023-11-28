import { v4 as uuidv4 } from "uuid";
//lista de arte e metodos do crud
class resgataArtes {
    constructor() {
        this.listArtes = []
    }
    getTodasArtes() {
        return this.listArtes;
    }
    buscarArtePorID(id) {
        return this.listArtes.find((artes) => artes.id === id);
    }
    criarArtes(artes) {
        this.listArtes.push(artes);
    }
    editarArtes(nomeObra, url, artista, dataProducao, tipo, idadeArtista, id) {

        const artes = this.buscarArtePorID(id)
        if (artes) {
            artes.nomeObra = nomeObra,
            artes.url = url;
            artes.artista = artista;
            artes.dataProducao = dataProducao;
            artes.tipo = tipo;
            artes.idadeArtista = idadeArtista;
            artes.id = uuidv4()
        }
        return artes
    }
    deletarArte(id) {
        this.listArtes = this.listArtes.filter((artes) => artes.id != id)
    }

    buscarporObra(nomeObra){
        return this.listArtes.filter((artes)=>artes.nomeObra.toLowerCase() == nomeObra.toLowerCase());
    } 
    buscarporTipo(tipo){
    return this.listArtes.filter((artes) => artes.tipo.toLowerCase() == tipo.toLowerCase());
    }
}
export default resgataArtes;