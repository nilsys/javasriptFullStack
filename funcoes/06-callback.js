//Callbacks foram feitas para serem executadas depois de determinado EVENTO
//Na programação assíncrona, callbacks são passadas como funções 
//para serem executadas após um certo evento.

let salarioBruto = 3000;
let salarioLiquido;

getSalario(salarioBruto, (resultado) => {
  salarioLiquido = resultado;
  console.log(`O total descontado é: R$${salarioBruto - salarioLiquido}`)
  console.log(`O salario liquido é de: R$${salarioLiquido}`);
});

function getSalario(salarioBruto, callBack) {
  let liquido = 0;
  
  const inss = 80;
  const vr = 15;
  const vt = 15;
  const fgts = 120;

  const descontos = inss + vr + vt + fgts;

  liquido = salarioBruto - descontos;

  return callBack(liquido);
}