function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const err = "Mensagem passada não é uma string";
      return typeof msg !== 'string' ? reject(err) : resolve(msg);
    }, tempo);
  });
}

async function executa() {
  try {
    const fase1 = await esperaAi('FRASE 1', rand(1,3))
    console.log(fase1)

    const fase2 = await esperaAi('FRASE 2', rand(1,3))
    console.log(fase2)

    const fase3 = await esperaAi('FRASE 3', rand(1,3))
    console.log(fase3)
  } catch (error) {
    console.log(error)
  }
}

executa();