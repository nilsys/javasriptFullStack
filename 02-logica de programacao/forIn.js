/* const frutas = ['perâ', 'maçã', 'morango', 'laranja'];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

for (let i in frutas) {
  console.log(frutas[i]);
} */

const pessoa = {
  nomeCompleto: {
    nome:'Isaias',
    sobrenome: 'Santos', 
  },
  idade: 18,
  profissao: 'repositor',
  estadoCivil: 'Namorando',
}

for (let i in pessoa.nomeCompleto) {
  console.log(pessoa.nomeCompleto[i])
}

