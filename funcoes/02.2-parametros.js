//Rest Operator
function conta(operador, acomulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === '+') acomulador += numero
    if (operador === '-') acomulador -= numero
    if (operador === '/') acomulador /= numero
    if (operador === '*') acomulador *= numero
  }

  console.log(acomulador)
}

conta('/', 90, 100,9,45,4,5,6);