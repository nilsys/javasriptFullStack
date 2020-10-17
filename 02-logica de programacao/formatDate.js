function formataMes(mes) {
  let nomeMes;
  switch (mes) {
    case 0:
      nomeMes = 'Janeiro'; 
      return nomeMes;
    case 1: 
      nomeMes = 'Fevereiro'; 
      return nomeMes;
    case 2: 
      nomeMes = 'Março'; 
      return nomeMes;
    case 3: 
      nomeMes = 'Abril'; 
      return nomeMes;
    case 4: 
      nomeMes = 'Maio'; 
      return nomeMes;
    case 5: 
      nomeMes = 'Junho'; 
      return nomeMes;
    case 6: 
      nomeMes = 'Julho'; 
      return nomeMes;
    case 7: 
      nomeMes = 'Agosto'; 
      return nomeMes;
    case 8: 
      nomeMes = 'Setembro'; 
      return nomeMes;
    case 9: 
      nomeMes = 'Outubro'; 
      return nomeMes;
    case 10: 
      nomeMes = 'Novembro'; 
      return nomeMes;
    case 11: 
      nomeMes = 'Dezembro'; 
      return nomeMes;
  }
}

function formatDate(dia, mes, ano) {
  const data = new Date(ano, mes, dia);
  return `Dia ${data.getDate()}, ${formataMes(data.getMonth())} de ${data.getFullYear()}`;
}

console.log(formatDate(9, 11, 1999));