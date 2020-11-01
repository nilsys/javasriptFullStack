import { todos } from './addTodos';

const ulGroup = document.querySelector(".bodyTodos");

function createLi(todo) {

  let li = document.createElement('li');
  li.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center')

  let span = document.createElement('span');
  span.innerHTML = todo;

  let btnDelete = document.createElement('button');
  btnDelete.setAttribute('class', 'btn btn-danger');
  btnDelete.innerHTML = "EXCLUIR"

  li.insertAdjacentElement('afterbegin', span);
  li.insertAdjacentElement('beforeend', btnDelete);

  ulGroup.insertAdjacentElement('beforeend', li)
}

function renderingTodos(todo) {
  return createLi(todo)
}

export { renderingTodos }