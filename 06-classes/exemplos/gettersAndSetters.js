class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  set nomeCompleto(valor) {
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');
  }

  get nomeCompleto() {
    return `Nome Completo ${this.nome} ${this.sobrenome}`;
  }
}

const p1 = new Pessoa('Isaias', 'Iotti');
p1.nomeCompleto = 'Isaias Iotti';
console.log(p1);