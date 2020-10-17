/* let control = 0;
while (control <= 10) {
  console.log(control);
  control++;
} */

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

let rand = random(1, 50);

while (rand !== 10) {
  rand = random(1, 50);
  console.log(rand);
}