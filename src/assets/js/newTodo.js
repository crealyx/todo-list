import { Ui } from "./dom";
class Todo {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
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

function createTodo(description, dueDate) {
  var todo = new Todo(Ui.taskInput.value, description, dueDate);
  tasks.push(todo);
  return todo;
}

export { Todo, createTodo };
