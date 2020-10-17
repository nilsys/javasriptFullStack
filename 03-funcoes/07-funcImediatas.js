// IIFE -> Immediately invoked function expression
// Função de invocação imediata
(function(){
  const data = new Date();
  const dataformat = `Dia ${data.getDate()} do 0${data.getMonth() + 1} de ${data.getFullYear()}`
  console.log(dataformat);
})();

