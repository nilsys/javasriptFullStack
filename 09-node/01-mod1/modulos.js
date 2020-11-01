const name = 'Isaias';
const idade = 21;

const quantosAnos = () => `${name} tem ${idade} anos`

class Pessoa {
  constructor(name, idade) {
    this.name = name;
    this.idade = idade;
  }

  meuNome() {
    return `Meu nome é ${this.name}`
  }
}

module.exports = {
  name, idade, quantosAnos, Pessoa
}
