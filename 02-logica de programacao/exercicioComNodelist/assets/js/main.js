const paragrafros = document.querySelector('.paragrafos');
const ps = paragrafros.querySelectorAll('p');

const styles = getComputedStyle(document.body);
const background = styles.backgroundColor;

for (let p of ps) {
  p.style.backgroundColor = background;
  p.style.color = '#FFF';
}