function pessoa(nome, sobrenome, idade) {
  const pessoaPrototype = {
    falar() {
      console.log(`Meu nome é ${this.nome}, ${this.sobrenome}`)
    },
    minhaIdade() {
      console.log(`Eu tenho: ${this.idade} anos`)
    }
  }

  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
    idade: { value: idade }
  })
}

const p1 = pessoa('Isaias', 'Batista', 21);
console.log(p1);