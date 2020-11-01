let bear = document.querySelector('.bear');
let btnStart = document.querySelector('.start')
let divImg = document.querySelector('.divImg');

let number = 1;
let walk = 0

const subt = () => {
  number ++;
  walk += 20;
}

divImg.style.width = '200px';
bear.style.position = 'relative';

const startBear = btnStart.addEventListener("click", () => {
  btnStart.innerHTML = 'Pause'
  setInterval(() => {
    subt()

    let caminho = `./imgs/chara-${number}.png`;
    bear.src = caminho
    bear.style.marginLeft = `${walk}px`;

    number >= 3 ? number = 1 : number
    walk >= 200 ? walk = 0 : walk
  }, 500)
})

