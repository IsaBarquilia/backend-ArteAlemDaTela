
//essa classe Sobrenos representa um integrante ou pessoa com propriedades como nome, 
//idade, imagem e um identificador único (id) gerado automaticamente ao criar uma nova instância.

import { v4 as uuidv4 } from "uuid";

export class Sobrenos {
    constructor(nome, idade, imagem){
        this.nome = nome;
        this.idade = idade;
        this.imagem = imagem;
        this.id = uuidv4();
    }
}