import { Ui } from "./dom";
class Todo {
  constructor(title, dueDate, isComplete, order) {
    this.title = title;
    this.dueDate = dueDate;
    this.isComplete = isComplete;
    this.order = order;
  }
  get getTitle() {
    return this.title;
  }
  set setTitle(text) {
    this.title = text;
  }
  get getDate() {
    return this.dueDate;
  }
  set setDate(dueDate) {
    this.dueDate = dueDate;
  }
}

function createTodo(order) {
  var todo = new Todo(Ui.taskInput.value, "today", false, order);
  return todo;
}

export { createTodo };
