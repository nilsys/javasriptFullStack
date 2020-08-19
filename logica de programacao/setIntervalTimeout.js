const hourReturn = () => {
  let data = new Date();
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
  });
}

// Executa a função por tempo indeterminado
const time = setInterval(() => console.log(hourReturn()), 1000)

// Para a execução depois de um tempo estabelecido
const pararTempo = setTimeout(() => {
  clearInterval(time);
  console.log('Acabou o tempo!!!')
}, 6000);
