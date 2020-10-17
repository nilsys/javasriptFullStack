/**
 * Var = Escopo Função 
 * Let = Escopo de Bloco { Bloco }
 * 
 */

/* Escopo Global */
let nome = 'Isaias';
var nome = 'Pedro';

/* Escopo de Bloco */
if (nome === 'Isaias') {
  let nome = 'Isaias'; 
  console.log(nome);
}

/* Escopo de Função */
function escopoFunc() {
  let nome = 'Isaias';
  console.log(nome);
}