const data = new Date();
const dataformat = data.toLocaleDateString('pt-BR', {dateStyle: 'full', month: 'long'});
console.log(dataformat);