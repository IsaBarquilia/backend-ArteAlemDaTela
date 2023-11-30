class GaleriaList {
    constructor() {
      this.galerias = [];
    }
  
    cadastrar(galeria) {
      this.galerias.push(galeria);
    }
  
    listar() {
      return this.galerias;
    }
  
    buscarPorId(id) {
      return this.galerias.find((galeria) => galeria.id === id);
    }
  
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
  
    excluir(id) {
      const galeria = this.buscarPorId(id);
  
      if (galeria) {
        this.galerias = this.galerias.filter((galeria) => galeria.id !== id);
      }

      return galeria
    }
  }
  
  export default GaleriaList;