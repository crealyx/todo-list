import { Ui } from "./dom";
class Todo {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
  }
  get setTitle() {
    return this.title;
  }
  set setTitle(text) {
    this.title = text;
  }
}

const tasks = [];

function createTodo(dueDate) {
  var todo = new Todo(Ui.taskInput.value, dueDate);
  tasks.push(todo);
  return todo;
}

export { Todo, createTodo };
