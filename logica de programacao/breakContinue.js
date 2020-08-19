const numeros = [0,1,2,3,4,5,6,7,8];

/* for (const n of numeros) {
  if (n % 2 !== 0) {
    continue;
  }
  console.log('par')
} */

for (const n of numeros ) {
  if (n === 7) {
    break;
  }
  console.log(n);
}
