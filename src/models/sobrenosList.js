//Essa classe fornece uma estrutura básica para manipular e organizar informações relacionadas aos integrantes 
//de um grupo, equipe ou entidade, permitindo adicionar, remover, listar e gerenciar as informações desses integrantes.
export class SobreNosList{
    constructor(){
        this.integrantes = [];
    }
//esse método permite acessar a lista completa de integrantes que foram armazenados na instância da classe SobreNosList. 
//Ele fornece acesso direto à lista de integrantes para visualização ou manipulação de suas informações.
    getIntegrantes(){
        return this.integrantes;

    }
//esse método busca e retorna o integrante na lista integrantes cujo id corresponde exatamente ao id 
//fornecido como parâmetro. Se nenhum integrante for encontrado com esse id, o método retorna undefined.
    getIntegrantesPorId(id){
        return this.integrantes.find((integrante) => integrante.id === id);
    }
//quando este método é invocado, ele adiciona o objeto do novo integrante à lista existente de integrantes na instância 
//da classe SobreNosList, permitindo o armazenamento e gerenciamento de informações sobre os integrantes.
    criarIntegrante(integrante){
        this.integrantes.push(integrante);
    }
// este método busca um integrante na lista por meio do id e, se encontrado, atualiza suas informações com os novos valores 
//de nome, idade e imagem, retornando o integrante modificado ou undefined se o integrante não for localizado.
    editarIntegrante(id, nome, idade, imagem){
        const integrantes = this.getIntegrantesPorId(id);

        if(integrante){
            integrantes.nome = nome;
            integrantes.idade = idade;
            integrantes.imagem = imagem;
           
        }
        return integrantes;
    }
    //ao chamar esse método com um determinado id, ele remove o integrante correspondente a esse id da lista 
    //integrantes, mantendo todos os outros integrantes na lista, e atualiza a lista integrantes com essa nova 
    //versão, resultando na exclusão do integrante específico com o id informado.

    deletarIntegrante(id){
        this.integrantes = this.integrantes.filter((integrante) => integrante.id == id);
    }
}