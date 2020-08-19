// Escreva uma função que receba 2 números e retorne o maior deles

const maior = (n1, n2) => {
  const maior = n1 > n2 ? n1 : n2;
  return n1 !== n2 ? maior : 'Números Iguais';
}

console.log(maior(20,14));