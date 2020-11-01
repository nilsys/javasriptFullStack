const todos = []

import { renderingTodos } from './listTodos'

import { v4 as uuidv4 } from 'uuid'

function addTodo(todo) {
  todos.push(todo);
  renderingTodos(todo.name)
}

function todoItem(nameTodo) {
  return {
    id: uuidv4(), 
    name: nameTodo,
    concluded: false
  }
}

export {
  addTodo,
  todoItem,
  todos
}




