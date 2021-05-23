const body = document.querySelector("body");
class createUi {
  // DOM Elements
  constructor() {
    this.bgWrapper = createElement("div", "id", "bg-wrapper", body);
    this.wrapper = createElement("div", "id", "wrapper", this.bgWrapper);
    this.header = createElement("header", "id", "header", this.wrapper);
    this.projectsButton = createElement(
      "button",
      "id",
      "projects-button",
      this.header
    );
    this.title = createElement("h1", "id", "title", this.header);
    this.taskSvg = createSVG(
      "task",
      "M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm12.054-5.839l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201zm-6 8.92v3.955h-16v-18h4l2.102 2h3.898l2-2h4v1.911l2-2.024v-1.887h-3c-1.229 0-2.18-1.084-3-2h-8c-.82.916-1.771 2-3 2h-3v22h20v-7.98l-2 2.025zm-8-16.045c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
    );
    this.navbar = createElement("nav", "id", "navbar", this.wrapper);
    this.navUl = createElement("ul", "id", "nav-ul", this.navbar);
    this.home = createElement("li", "class", "nav-li", this.navUl);
    this.today = createElement("li", "class", "nav-li", this.navUl);
    this.thisWeek = createElement("li", "class", "nav-li", this.navUl);
    this.todoPage = createElement("main", "id", "todo-page", this.wrapper);
    this.todoPageTitle = createElement("h1", "id", "todo-title", this.todoPage);
    this.todoList = createElement("ul", "id", "todo-list", this.todoPage);
    this.todoContainer = createElement(
      "div",
      "class",
      "todo-container",
      this.todoList
    );
    this.todo = createElement("li", "class", "todo", this.todoContainer);
    this.editButton = createSVG(
      "edit",
      "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-5 17l1.006-4.036 3.106 3.105-4.112.931zm5.16-1.879l-3.202-3.202 5.841-5.919 3.201 3.2-5.84 5.921z"
    );
    this.deleteButton = createSVG(
      "delete",
      "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"
    );
    this.addTodoContainer = document.createElement("div");

    this.addButton = createSVG(
      "add-button",
      "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-5v5h-4v-5h-5v-4h5v-5h4v5h5v4z"
    );
    this.addTask = document.createElement("div");
    this.taskTitle = document.createElement("label");
    this.taskInput = document.createElement("input");
    this.buttonCtn = document.createElement("div");
    this.addTaskButton = document.createElement("button");
    this.cancelTaskButton = document.createElement("button");
  }

  // METHODS

  initializeAllDOM = () => {
    this.projectsButtonDOM();
    this.titleDOM();
    this.headerDOM();
    this.homeDOM();
    this.todayDOM();
    this.thisWeekDOM();
    this.todoPageDOM();
    this.todoDOM();
    this.todoContainerDOM();
    this.addTodoContainerDOM();
    this.addTodoContainerDOM();
    this.todoPageDOM();
    this.addTaskDOM();
    this.taskTitleDOM();
    this.taskInputDOM();
    this.buttonCtnDOM();
    this.addTaskButtonDOM();
    this.cancelTaskButtonDOM();
  };
  projectsButtonDOM() {
    this.projectsButton.innerHTML = "Projects";
  }
  titleDOM() {
    title.textContent = "To Do List";
  }
  headerDOM() {
    this.header.append(this.taskSvg);
  }
  homeDOM() {
    this.home.textContent = "Home";
  }
  todayDOM() {
    this.today.textContent = "Today";
  }
  thisWeekDOM() {
    this.thisWeek.textContent = "This Week";
  }
  todoPageDOM() {
    this.todoPageTitle.textContent = "Home";
  }
  todoDOM() {
    this.todo.textContent = "Work";
  }
  todoContainerDOM() {
    this.todoContainer.append(this.editButton);
    this.todoContainer.append(this.deleteButton);
  }
  addTodoContainerDOM() {
    this.addTodoContainer.setAttribute("id", "add-todo-container");
    this.addTodoContainer.append(this.addButton);
  }
  todoPageDOM() {
    this.todoPage.append(this.addTodoContainer);
  }
  addTaskDOM() {
    this.addTask.setAttribute("id", "add-task");
    this.addTask.append(this.taskTitle);
    this.addTask.append(this.taskInput);
    this.addTask.append(this.buttonCtn);
  }
  taskTitleDOM() {
    this.taskTitle.setAttribute("for", "taskName");
    this.taskTitle.textContent = "Task:";
  }
  taskInputDOM() {
    this.taskInput.setAttribute("id", "taskName");
    this.taskInput.setAttribute("type", "text");
  }
  buttonCtnDOM() {
    this.buttonCtn.setAttribute("id", "button-container");
    this.buttonCtn.append(this.addTaskButton);
    this.buttonCtn.append(this.cancelTaskButton);
  }
  addTaskButtonDOM() {
    this.addTaskButton.textContent = "Add";
    this.addTaskButton.setAttribute("id", "add-task-btn");
  }
  cancelTaskButtonDOM() {
    this.cancelTaskButton.textContent = "Cancel";
    this.cancelTaskButton.setAttribute("id", "cancel-task-btn");
  }
}

// Functions
function createElement(elType, attType, att, parent) {
  var el = document.createElement(elType);
  el.setAttribute(attType, att);
  parent.appendChild(el);
  return el;
}

function createSVG(id, pathAtt) {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("id", id);
  svg.setAttribute("width", 24);
  svg.setAttribute("height", 24);
  svg.setAttribute("viewBox", "0 0 24 24");

  var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttributeNS(null, "d", pathAtt);

  svg.append(path);
  return svg;
}

const Ui = new createUi();

Ui.addButton.addEventListener("click", createAddPopup);
Ui.addTaskButton.addEventListener("click", addTaskToPage);
Ui.cancelTaskButton.addEventListener("click", removeAddPopup);
Ui.initializeAllDOM();

function getTaskInput() {
  let newTask = Ui.taskInput.value;
  return newTask;
}

function addTaskToPage() {}

function removeAddPopup() {
  Ui.addTask.remove();
  Ui.addTodoContainer.append(Ui.addButton);
  Ui.addTodoContainer.style.margin = "150px auto";
}

function createAddPopup() {
  Ui.addButton.remove();
  Ui.addTodoContainer.append(Ui.addTask);
  Ui.addTodoContainer.style.margin = "80px 300px";
}

export { Ui };
