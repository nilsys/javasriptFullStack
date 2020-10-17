const produtos = ['Coca', 'Pepsi', 'Sprite', 'Arroz', 'Feijão'];
const pedido = ['Oleo', 'Azeite'];

const numbers = [1, 24, 40, 20, 60, 13, 9, 12];
// const arr = [];
// for (const n of numbers) {
//   if (n >= 10) arr.push(n);
// }
// console.log(arr);

// const filtredNUmbers = numbers.filter(n => n >= 10);
// console.log(filtredNUmbers); 

const people = [
  { nome: 'Isaias', idade: 21 },
  { nome: 'Kerolaine', idade: 24 },
  { nome: 'Janaina', idade: 41 },
  { nome: 'Pedro', idade: 12 },
  { nome: 'Eliseu', idade: 46 },
]

const filterYear = people.filter(obj => obj.idade >= 25)
console.log(filterYear);

const filterNames = people.filter(obj => obj.nome.length >= 6);
console.log(filterNames);

const filterA = people.filter(obj => {
  return obj.nome.toLowerCase().endsWith('a');
});
console.log(filterA);
