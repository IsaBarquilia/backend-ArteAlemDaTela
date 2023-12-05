export class SobreNosList{
    constructor(){
        this.integrantes = [];
    }

    getIntegrantes(){
        return this.integrantes;

    }

    getIntegrantesPorId(id){
        return this.integrantes.find((integrante) => integrante.id === id);
    }

    criarIntegrante(integrante){
        this.integrantes.push(integrante);
    }

    editarIntegrante(id, nome, idade, imagem){
        const integrante = this.getIntegrantesPorId(id);

        if(integrante){
            integrante.nome = nome;
            integrante.idade = idade;
            integrante.imagem = imagem;
           
        }
        return integrante;
    }
    deletarIntegrante(id){
        this.integrantes = this.integrantes.filter((integrante) => integrante.id == id);
    }
}