function ePar(numero) {
  return new Promise((resolve, reject )=> {
    if(numero % 2 === 0) {
      const result = "Número é par";
      resolve(result);
    } else {
      reject("Número errado!")
    }
  })
}

ePar(4)
  .then(response => console.log(response))
  .catch(error => console.log(error));

ePar(7)
  .then(response => console.log(response))
  .catch(error => console.log(error));