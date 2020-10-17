const numbers = [1, 4, 9, 8, 14, 28, 46, 99, 66, 44];

const redu = numbers.reduce((ac, valor) => {
  return ac + valor;
}, 0)

console.log(redu);