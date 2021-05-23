import { Ui } from "./dom";
class Todo {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
}

let newTask = getTaskInput();

function createTodo(newTask, description, dueDate) {
  var todo = new Todo(newTask, description, dueDate);
  return todo;
}

export { createTodo };
