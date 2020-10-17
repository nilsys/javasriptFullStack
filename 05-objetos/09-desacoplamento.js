// const nome = {
//   falar() {
//     console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
//   }
// }
// const idade = {
//   idade() {
//     console.log(`Eu tenho ${this.idade} anos`);
//   }
// }

const acoes = {
  falarNome() {
    console.log(`Meu nome é ${this.nome} ${this.sobrenome}`); 
  },
  falarIdade() {
    console.log(`Eu tenho ${this.idade} anos`);
  }
}

const pessoaPrototype = Object.assign({}, {...acoes});

function pessoa(nome, sobrenome, idade) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
    idade: { value: idade }
  })
}

const p1 = pessoa('Isaias', 'Santos', 21);
console.log(p1);