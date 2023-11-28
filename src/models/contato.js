import {v4 as uuidv4 }from "uuid"

//informações que terá na página de contato
class artista{
    constructor(nome, email){
        this.nome = nome;
        this.email = email;
        this.id=uuidv4()
    }
}
export default artista;