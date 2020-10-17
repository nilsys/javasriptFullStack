// Cada item do todo será um Objeto
let todoList = [];

const form = document.querySelector('.todoForm');
const input = document.querySelector('.newTodo');
const list = document.querySelector('.todoList');

function addTodo(text) {
  const todo = {
    id: Date.now(),
    text,
    checked: false,
  }

  todoList.push(todo);
  renderTodo(todo)
  save();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = input.value.trim();

  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});

function renderTodo(todo) {
  list.insertAdjacentHTML('beforeend', `
  <li class="todo" data-key="${todo.id}">
    <input id="${todo.id}" type="checkbox" class="tick"/>
    <label for="${todo.id}"></label>
    <span>${todo.text}</span>
    <button class="deleteTodo">Apagar</button>
  </li>
  `)
}

function toggleDone(key) {
  const index = todoList.findIndex(item => item.id === Number(key));
  todoList[index].checked = !todoList[index].checked;
  const item = document.querySelector(`[data-key='${key}']`);
  if (todoList[index].checked) {
    item.classList.add('done');
  } else {
    item.classList.remove('done')
  }
}

// Marcando uma tarefa como completa 
list.addEventListener('click', (event) => {
  if (event.target.classList.contains('tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
});

function deleteTodo(key) {
  todoList = todoList.filter(todo => todo.id !== Number(key));
  const todo = document.querySelector(`[data-key='${key}']`);
  todo.remove();
}

list.addEventListener('click', (event) => {
  if(event.target.classList.contains('deleteTodo')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});

function save() {
  for (let todo of todoList) {
    
  }
}
