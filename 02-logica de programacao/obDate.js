const data = new Date(2020, 7, 7, 00, 00, 00);
//Ano, Mês (começa do zero), Dia, Hora, Min, Segundo, MilSegundo
console.log(data.toString());

//Passando valores string
const newDate = new Date('2021-08-07 17:42');;
console.log(newDate.toString());

const date = new Date();
console.log(`Ano: ${date.getFullYear()}`);
console.log(`Mês: ${date.getMonth() + 1}`);
console.log(`Dia: ${date.getDate()}`);
console.log(`Dia da semana: ${date.getDay()}`);