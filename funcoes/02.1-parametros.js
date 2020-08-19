//O javascript não esta nem ai para o parametros
//Não funciona com arrow-functions
function semParam() {
  //O js guarda uma variavel chamada 'arguments' sustentando todos os valores
  //passados pelo parametro da função
  //console.log(arguments);
  total = 0;
  for (const iterator of arguments) {
    total += iterator
  }
  console.log(total);
}
semParam(1,2,3,4,5,6,7);

//Settando valores padrões para os parametros da função
function soma(a = 0, b = 0) {
  console.log(`Soma de ${a} + ${b} é: ${a + b}`);
}
soma(6);