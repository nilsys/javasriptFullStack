const { name, idade, quantosAnos } = require('./modulos')
const { Pessoa } = require('./modulos')
console.log(quantosAnos())

const p1 = new Pessoa('Janaina', 41)
console.log(p1.meuNome())