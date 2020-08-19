function soma(n1,n2) {
  if(typeof n1 !== 'number' || typeof n2 !== 'number') {
   throw ('Os valores não são númericos');
  }

  return n1 + n2;
}

try {
  console.log(soma(4,'i'))
} catch (err) {
  console.log(err)
}