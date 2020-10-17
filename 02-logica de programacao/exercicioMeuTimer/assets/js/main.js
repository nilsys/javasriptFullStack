let seconds = 0;
let timer;

const watchScreen = (second) => {
  const data = new Date(second * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC',
  });
}

const startWatch = () => {
  timer = setInterval(() => {
    seconds++;
    relogio.innerHTML = watchScreen(seconds);
  }, 1000)
}

const relogio = document.querySelector('.relogio');

document.addEventListener('click', (e) => {

  const el = e.target;

  if(el.classList.contains('iniciar')) {
    relogio.classList.remove('pausado')
    clearInterval(timer);
    startWatch();
  }
  if(el.classList.contains('pausar')) {
    relogio.classList.add('pausado');
    clearInterval(timer);
  }
  if(el.classList.contains('zerar')) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    seconds = 0;
  }
});