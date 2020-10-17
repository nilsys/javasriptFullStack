// const obj = {
//   nome: 'Isaias',
//   sobrenome: 'Santos',
//   idade: 21
// } // console.log(obj)

// const pessoa = new Object();
// pessoa.nome = 'Isaias';
// pessoa.sobrenome = 'Batista';
// console.log(pessoa)

// pessoa.falarNome = function() {
//   return `Meu nome é ${this.nome}`
// }
// console.log(pessoa.falarNome());

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;

  this.nomeCompleto = () => `Meu nome completo é ${this.nome} ${this.sobrenome}`

  this.minhaIdade = () => `Eu Tenho ${this.idade}`
}

const p1 = new Pessoa('Isaias', 'Santos', 21);
console.log(p1);
console.log(p1.nomeCompleto());
console.log(p1.minhaIdade());




