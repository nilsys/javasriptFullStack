let a = 'a'; // c
let b = 'b'; // a
let c = 'c'; // b
const letras = [c, a, b];
[a, b, c] = letras;
console.log(a, b, c);

const listas = [ [1,2,3], [4,5,6], [7,8,9] ];
const [lista1, lista2, lista3] = listas;
console.log(lista2[1]);
