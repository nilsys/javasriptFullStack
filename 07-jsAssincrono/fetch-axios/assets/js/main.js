const createDataInTable = (nome, email, idade) => {
  let tr = document.createElement('tr');
  const tBody = document.querySelector('.bodyTable')
  
  let insertPerson = `
    <td>${nome}</td>
    <td>${email}</td>
    <td>${idade}</td>  
  `
  tr.innerHTML = insertPerson;
  tBody.appendChild(tr)
}

const getDatas = async () => {
  const response = await fetch('pessoas.json')
  const datasJson = await response.json().then(values => values.map(datas => {
    createDataInTable(datas.nome, datas.email, datas.idade)
  }));
  
}

getDatas();