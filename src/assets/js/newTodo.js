import { format } from 'date-fns';
import { Ui } from './dom';

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
  const newDate = new Date();
  const formattedDate = format(newDate, 'yyyy-MM-dd');
  const todo = new Todo(Ui.taskInput.value, formattedDate, false, order);
  return todo;
}

export default { createTodo };
