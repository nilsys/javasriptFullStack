const usuario = 'isaiasiotti';
const senha = 'isaias9398';

const login = usuario === 'isaiasiotti' && senha === 'isaias9398';
if (login === false) {
  console.log(`Usuário Incorreto!`)
} else {
  console.log(`Usuário ${usuario} logado com sucesso!`);
}