function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
// resolve - quando tudo ocorre bem / reject - quando algo der errado
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Se tudo ocorrer bem, resolve() será executada
      //resolve() só recebe apenas um paramêtro
      resolve(msg);
    }, tempo);
  });
}

// Só serão executadas se derem certas.
// Não seráo executadas na ordem que foram escritas

esperaAi('Frase - 1', rand(1,3))
  .then(response => console.log(response))
  .catch();

esperaAi('Frase - 2', rand(1,3))
  .then(response => console.log(response))
  .catch();

esperaAi('Frase - 3', rand(1,3))
  .then(response => console.log(response))
  .catch();

