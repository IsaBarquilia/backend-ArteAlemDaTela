import { v4 as uuidv4 } from "uuid";

export class Sobrenos {
    constructor(nome, idade, imagem){
        this.nome = nome;
        this.idade = idade;
        this.imagem = imagem;
        this.id = uuidv4();
    }
}