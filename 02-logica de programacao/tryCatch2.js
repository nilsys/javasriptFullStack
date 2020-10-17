function hourReturn(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Tipo diferente do esperado');
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {

  });
}

try {
  const date = new Date('08-07-1999 12:57:37');
  const hora = hourReturn(111);
  console.log(hora);
}
catch (err) {
  console.log(err);
}