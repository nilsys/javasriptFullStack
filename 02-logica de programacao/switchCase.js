const data = new Date(2020, 8, 9);
let dia = data.getDay();

switch(dia) {
  case 0: 
    console.log('Domingo') 
    break;
  case 1: 
    console.log('Segunda-feira')
    break;
  case 2: 
    console.log('Terça-feira') 
    break;
  case 3: 
    console.log('Quarta-feira')
    break;
  case 4: 
  console.log('Quinta-feira')
  break;
  case 5: 
    console.log('Sexta-feira')
    break;
  case 6: 
    console.log('Sabado')
    break;
  default: console.log('');
}