import {v4 as uuidv4} from "uuid";
//Lista sobre nós com os integrantes

class sobreNos {
    constructor() {
        this.listIntegrantes = [] //criação do array
    }
    getTodosIntegrantes() {
        return this.listIntegrantes;
    }
    getIntegrantesByid(id) {
        return this.listIntegrantes.find((integrantes) => integrantes.id === id);
    }
    adicionarIntegrantes(integrantes) {
        return this.listIntegrantes.push(integrantes);
    }
    editarIntegrante(nome, idade, imagem) {

        const integrantes = this.getIntegrantesByid(id)
        if (integrantes) {
            integrantes.nome = nome,
            integrantes.idade = idade;
            integrantes.imagem = imagem;
            integrantes.id = uuidv4()
        }
        return integrantes
    }
    deletarIntegrante(id) {
        this.listIntegrantes = this.listIntegrantes.filter((integrantes) => integrantes.id != id)
    }
}
export default sobreNos;