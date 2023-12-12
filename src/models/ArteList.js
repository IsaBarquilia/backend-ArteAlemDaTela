import { v4 as uuidv4 } from "uuid";
//lista de arte e metodos do crud

//É um esboço de classe em JavaScript chamada resgataArtes. No construtor dessa classe, é inicializada uma propriedade chamada listArtes como um array vazio. 
//Este código parece ser um ponto de partida para gerenciar uma lista de obras de arte, mas não contém implementações de métodos para adicionar, remover ou manipular itens nessa lista.
class resgataArtes {
    //Este código cria uma classe chamada resgataArtes com um construtor que define uma propriedade chamada 
    //listArtes como um array vazio. Essa classe parece ser um ponto de partida para gerenciar uma lista de obras de arte, mas não apresenta funcionalidades específicas de manipulação de dados nessa lista.
    constructor() {
        this.listArtes = []
    }
    //getTodasArtes() é um método dentro da classe resgataArtes que retorna o conteúdo da propriedade listArtes, que é um array. Esse método possibilita obter todas as obras de arte armazenadas 
    //nessa lista específica da instância da classe resgataArtes.
    getTodasArtes() {
        return this.listArtes;
    }
    //esse método procura por uma obra de arte na lista listArtes com base no id fornecido e retorna essa obra de arte específica,
    // se encontrada. Caso contrário, retorna undefined.
    buscarArtePorID(id) {
        return this.listArtes.find((artes) => artes.id == id);
    }
    //esse método criarArtes é responsável por adicionar uma nova obra de arte à lista
    // de obras existente na instância da classe resgataArtes.
    criarArtes(artes) {
        this.listArtes.push(artes);
    }
    //O método `editarArtes` da classe `resgataArtes` procura por uma obra de arte na lista `listArtes` 
    //com base no `id` fornecido. Se a obra é encontrada, ele atualiza suas propriedades com os novos valores passados como parâmetros para o método, como nome,
    // URL, artista, data de produção, tipo e idade do artista.
    editarArtes(nomeObra, url, artista, dataProducao, tipo, idadeArtista, id) {
        const artes = this.buscarArtePorID(id)
        if (artes) {
            artes.nomeObra = nomeObra,
            artes.url = url;
            artes.tipo = tipo;
            artes.artista = artista;
            artes.idadeArtista = idadeArtista;
            artes.dataProducao = dataProducao;
        }
        return artes
    }
    //esse método remove da lista listArtes a obra de arte que possui o id fornecido, mantendo todas as outras
    // obras na lista e atualizando a propriedade listArtes para essa nova lista filtrada.

    deletarArte(id) {
        // console.log("ARTELIST");
        // console.log(id);
        this.listArtes = this.listArtes.filter((artes) => artes.id != id)
    }
    //este método busca e retorna todas as obras de arte na lista listArtes cujos tipos correspondem exatamente ao tipo fornecido,
    // ignorando diferenças de maiúsculas e minúsculas.
    buscarporTipo(tipo) {
        // console.log(tipo)
        return this.listArtes.filter((obras) => obras.tipo == tipo);
    }

}
export default resgataArtes;