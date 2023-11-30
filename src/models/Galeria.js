class Galeria {
    constructor(nome, cidade, rua, numero) {
      this.id = this.gerarId();
      this.nome = nome;
      this.cidade = cidade;
      this.rua = rua;
      this.numero = numero;
    }
  
    gerarId() {
      return Math.floor(Math.random() * 1000);
    }
  }
  
  export default Galeria;