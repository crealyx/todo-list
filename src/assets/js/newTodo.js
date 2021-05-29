import { Ui } from "./dom";
import { format } from "date-fns";
class Todo {
  constructor(title, date, isComplete, order) {
    this.title = title;
    this.dueDate = date;
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
  let newDate = new Date();
  let formattedDate = format(newDate, "yyyy-MM-dd");
  var todo = new Todo(Ui.taskInput.value, formattedDate, false, order);
  return todo;
}

export { createTodo };
