class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
  
  falar() {
    return `${this.nome} está falando!`;
  }
  comer() {
    return `${this.nome} está comendo!`;
  }
  beber() {
    return `${this.nome} está bebendo!`;
  }
}

const p1 = new Pessoa('Isaias');