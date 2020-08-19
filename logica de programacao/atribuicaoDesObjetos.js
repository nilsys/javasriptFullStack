const pessoa = {
  NomeCompleto: {
    nome: 'Isaias',
    sobrenome: 'Iotti',
  },
  idade: 18,
  profissao: {
    empresa: 'Atacadão s/a',
    cargo: 'Repositor',
  },
  endereco: {
    cep: 14066452,
    numero: 158,
    rua: 'Ernesta Ceoloto',
    bairro: 'Jd Orestes',
    cidade: 'Ribeirão Preto',
    uf: 'SP',
  },
}

/** Atribuição Via Desestruturação por Objeto */
const { NomeCompleto: { nome, sobrenome } } = pessoa;
const { profissao: { cargo } } = pessoa;
const { endereco: { cep, numero, rua, bairro } } = pessoa;

console.log(`Nome: ${nome}, Cargo: ${cargo}`);
console.log(`cep: ${cep}, número: ${numero}, rua: ${rua}`);