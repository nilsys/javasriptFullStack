const nome = 'Isaias'

function mostraNomeIsa() {
  //A funcao busca primeiro se há uma var com esse nome no escopo da func.
  //Só depois ela  busca no escopo global
  console.log(nome);
}

function mostraOutroNome(params) {
  const nome = 'OutroNome'
  console.log(nome)
}
mostraNomeIsa();
mostraOutroNome();