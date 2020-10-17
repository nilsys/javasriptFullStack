const novaTarefa = document.querySelector('.nova-tarefa');
const btnNovaTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

const limpaInput = () => {
  novaTarefa.value = '';
  novaTarefa.focus();
}

const btnApagar = (li) => {
  li.innerText += ` `;
  const btnApagar = document.createElement('button');
  btnApagar.innerText = 'Apagar';
  btnApagar.setAttribute('class', 'btnApagar');
  li.appendChild(btnApagar);
}

const criaLi = () => {
  return document.createElement('li');
}

const criaTarefa = (texto) => {
  const li = criaLi();
  li.innerText = texto;
  tarefas.appendChild(li);
  limpaInput();
  btnApagar(li);
  salvarTarefas();
};

novaTarefa.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    if (!novaTarefa.value) return;
    criaTarefa(novaTarefa.value);
  }
});

btnNovaTarefa.addEventListener('click', (e) => {
  if (!novaTarefa.value) return;
  criaTarefa(novaTarefa.value);
});

// Apagando uma tarefa
document.addEventListener('click', (e) => {
  const el = e.target;
  // Pegar o elemento pai
  if (el.classList.contains('btnApagar')) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

const salvarTarefas = () => {
  const liTarefas = tarefas.querySelectorAll('li');
  listaTarefas = [];
  
  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaTarefas.push(tarefaTexto);
  }

  const tarefaJSON = JSON.stringify(listaTarefas);
  localStorage.setItem('tarefas', tarefaJSON);
}

const loadingTarefas = () => {
  const tarefas = localStorage.getItem('tarefas');
  const listaTarefas = JSON.parse(tarefas);

  for (let tarefa of listaTarefas) {
    criaTarefa(tarefa);
  }
}

loadingTarefas();