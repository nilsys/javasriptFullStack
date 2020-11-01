import "./style.scss"
import { addTodo, todoItem, todos } from './functions/addTodos'

const inputTodo = document.querySelector('.inputTodo');
const btnTodo = document.querySelector('.btnTodo');

btnTodo.addEventListener('click', () => {
  let todo = todoItem(inputTodo.value)
  addTodo(todo)
  inputTodo.value = '';
  inputTodo.focus();
})

