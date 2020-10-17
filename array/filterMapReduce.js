const numbers = [4, 9, 22, 33, 44, 99, 23, 24, 58, 68, 88, 93];

const numberPars = numbers
  .filter(valor => valor % 2 === 0)
  .map(valor => valor * 2)
  .reduce((ac, valor) => ac + valor)
console.log(numberPars)