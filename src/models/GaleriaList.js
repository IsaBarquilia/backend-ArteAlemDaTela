//A classe GaleriaList é um esboço para gerenciar uma lista de galerias de arte. 
//Ela possui um construtor que inicializa a propriedade galerias como um array vazio, 
//pronto para armazenar informações sobre as galerias. Essa estrutura serve para manipular e organizar informações relacionadas a várias galerias em um programa.

class GaleriaList {
    constructor() {
      this.galerias = [];
    }
  
    //este método cadastrar permite adicionar uma nova galeria à lista de galerias (galerias) 
    //presente na instância da classe GaleriaList.
    cadastrar(galeria) {
      this.galerias.push(galeria);
    }
  //O método listar() da classe GaleriaList retorna a lista atual de galerias cadastradas, proporcionando acesso 
  //a todas as galerias que foram previamente adicionadas através do método cadastrar().
    listar() {
      return this.galerias;
    }
  //esse método busca e retorna a galeria na lista galerias cujo id corresponde exatamente ao id 
  //fornecido como parâmetro.

  buscarPorId(id) {
      return this.galerias.find((galeria) => galeria.id === id);
    }
  //esse método procura por uma galeria específica na lista de galerias pelo id e, se encontrada,
  // atualiza os detalhes dessa galeria com os novos valores fornecidos.
    alterar(id, nome, cidade, rua, numero) {
      const galeria = this.buscarPorId(id);
  
      if (galeria) {
        galeria.nome = nome;
        galeria.cidade = cidade;
        galeria.rua = rua;
        galeria.numero = numero;
      }
  
      return galeria;
    }
  //esse método procura por uma galeria na lista de galerias pelo id, e se encontrada, remove essa galeria da lista, 
  //retornando-a se a exclusão for bem-sucedida, caso contrário, retorna undefined.
    excluir(id) {
      const galeria = this.buscarPorId(id);
  
      if (galeria) {
        this.galerias = this.galerias.filter((galeria) => galeria.id !== id);
      }

      return galeria
    }
  }
  
  export default GaleriaList;