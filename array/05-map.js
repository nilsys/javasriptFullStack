const people = [
  { nome: 'Isaias', idade: 21 },
  { nome: 'Kerolaine', idade: 24 },
  { nome: 'Janaina', idade: 41 },
  { nome: 'Pedro', idade: 12 },
  { nome: 'Eliseu', idade: 46 },
]

// const idade = people.map(obj => ({ idade: obj.idade }))
// console.log(idade)

// const nome = people.map(obj => obj.nome);
// console.log(nome);

const addIds = people.map((obj, indice) => {
  const newObj = { ...obj }
  newObj.id = indice

  return newObj
});

console.log(addIds);

// const numbers = [1, 24, 40, 20, 60, 13, 9, 12];
// const dobro = numbers.map(valor => valor * 2)
// console.log(dobro);











