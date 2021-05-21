class Todo {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
}

function createTodo(title, description, dueDate) {
  var todo = new Todo(title, description, dueDate);
  return todo;
}

export { createTodo };
