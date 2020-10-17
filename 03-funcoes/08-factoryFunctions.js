// Função que retorna um Objeto
function pessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    peso,
    altura,

    //Quando se usa get - o metodo vira um atributo
    get nomeCompleto() { // Getter
      return `Sr(a) ${this.nome} ${this.sobrenome}`; 
    },
    imc() {
      const indice = this.peso / (this.altura ** 2)
      return indice.toFixed(2);
    },
  }
}

const p1 = pessoa('Isaias', 'Batista', 1.86, 70);
console.log(p1.nomeCompleto);
console.log(p1.imc());

