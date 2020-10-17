function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const err = "Mensagem passada não é uma string";
      return typeof msg !== 'string' ? reject(err) : resolve(msg);
    }, tempo);
  });
}

// Promise.all() ; Promise.race() ; Promise.resolve() ; Promise.reject()
const promises = [
  esperaAi('Msg 1', 1000),
  esperaAi('Msg 2', 200),
  esperaAi('Msg 3', 600),  
]

//Executa todas as promises passadas em um array e em ordem
//Se tiver algum erro ela para tudo
Promise.all(promises)
  .then(response => console.log("Método all:", response))
  .catch(err => console.log(err));

//Recebe como param um array de promises 
//E apenas executa a primeira que for resolvida
Promise.race(promises)
  .then(response => console.log("Método race:", response))
  .catch(err => console.log(err));