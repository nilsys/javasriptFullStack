// Funções Construtoras

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.nomeCompleto = () => {
    return `Meu nome completo é ${this.nome} ${this.sobrenome}`
  }
} 

const p1 = new Pessoa('Isaias', 'Batista');
const p2 = new Pessoa('Janaina', 'Iotti');

console.log(p1.nomeCompleto());
console.log(p2.nomeCompleto());