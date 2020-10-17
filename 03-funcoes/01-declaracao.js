// Function Hoisting
falarOi();
//Não importa se a função foi declara lá embaixo, o motor do javascript
//Joga ela para cima
function falarOi(params) {
  console.log('Olá! Tudo bem?!?');
}

//As funções são objetos de primeira-classe (First-class objects)
const souUmDado = function() {
 console.log('Sou um dado'); 
}

//Funções podem receber outras funções como parametro
function executaUmaFuncao(funcao) {
  //Executando um parametro
  funcao();
}
executaUmaFuncao(souUmDado);

const arrowFunction = () => {
  console.log('Sou uma arrow function');
}
arrowFunction();