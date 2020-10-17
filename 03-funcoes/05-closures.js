//Closure = Habilidade de acessar o seu corpo lexico

function returnFunc(nome) {
  return function () {
    return nome;
  }
}

const func = returnFunc('Isaias');
console.dir(func());