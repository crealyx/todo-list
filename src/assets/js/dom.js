import { createTodo, Todo, tasks } from "./newTodo";
import { removeTodo } from "./removeTodo";
import { addToComplete } from "./completeTodo";
import { createProject } from "./projects";

const body = document.querySelector("body");
class createUi {
  // DOM Elements
  constructor() {
    this.bgWrapper = createElement("div", "id", "bg-wrapper", body);
    this.wrapper = createElement("div", "id", "wrapper", this.bgWrapper);
    this.projectsPopup = createElement("div", "id", "projects", this.wrapper);
    this.projectsHeader = createElement(
      "h1",
      "id",
      "projects-title",
      this.projectsPopup
    );
    this.projectsContainer = createElement(
      "div",
      "id",
      "projects-container",
      this.projectsPopup
    );
    this.addProjectButton = createElement(
      "button",
      "id",
      "add-project-button",
      this.projectsPopup
    );
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
    this.todoPageTitle = createElement("h1", "id", "page-title", this.todoPage);
    this.todoList = createElement("ul", "id", "todo-list", this.todoPage);
    this.newTodoContainer = document.createElement("div");

    this.addNewTodoButton = createSVG(
      "add-new-todo-button",
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
    this.projectsHeaderDOM();
    this.titleDOM();
    this.headerDOM();
    this.homeDOM();
    this.todayDOM();
    this.thisWeekDOM();
    this.todoPageTitleDOM();
    this.newTodoContainerDOM();
    this.todoPageDOM();
    this.addTaskDOM();
    this.taskTitleDOM();
    this.taskInputDOM();
    this.buttonCtnDOM();
    this.addTaskButtonDOM();
    this.cancelTaskButtonDOM();
    this.addProjectButtonDOM();
  };
  projectsButtonDOM() {
    this.projectsButton.innerHTML = "Projects";
  }
  projectsHeaderDOM() {
    this.projectsHeader.textContent = "Projects";
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
  todoPageTitleDOM() {
    this.todoPageTitle.textContent = "Home";
  }
  newTodoContainerDOM() {
    this.newTodoContainer.setAttribute("id", "new-todo-container");
    this.newTodoContainer.append(this.addNewTodoButton);
  }
  todoPageDOM() {
    this.todoPage.append(this.newTodoContainer);
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
  addProjectButtonDOM() {
    this.addProjectButton.textContent = "Add New Project";
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
Ui.initializeAllDOM();

Ui.todoPage.addEventListener("click", todoEvents);
Ui.addNewTodoButton.addEventListener("click", createAddPopup);
Ui.addTaskButton.addEventListener("click", addTaskToPage);
Ui.cancelTaskButton.addEventListener("click", removeAddPopup);
Ui.projectsButton.addEventListener("click", openProjects);
Ui.todoList.addEventListener("input", changeDate);
Ui.projectsPopup.addEventListener("click", projectInput);

function changeDate(e) {
  let order = e.target.parentElement.parentElement.dataset.number;
  let changedDate = tasks.find((task) => task.order == order);
  console.log(changedDate);
  changedDate.setDate = e.target.value;
}
// Projects
function projectInput(e) {
  console.log(e.target);
  // Add name input and buttons
  if (e.target.id === "add-project-button") {
    Ui.addProjectButton.remove();
    let input = createElement(
      "input",
      "id",
      "project-input",
      Ui.projectsContainer
    );
    let buttonContainer = createElement(
      "div",
      "id",
      "input-button-container",
      Ui.projectsContainer
    );
    input.setAttribute("placeholder", "Enter project name");
    let addButton = createElement("button", "id", "input-add", buttonContainer);
    let cancelButton = createElement(
      "button",
      "id",
      "input-cancel",
      buttonContainer
    );
    addButton.textContent = "Add";
    cancelButton.textContent = "Cancel";
  }
  // Add project to container and remove input buttons if clicked on add button
  else if (e.target.id === "input-add") {
    if (e.target.parentElement.previousSibling.value == "") {
      alert("Please enter project name");
    } else {
      addProject(e.target.parentElement.previousSibling.value);
      e.target.parentElement.previousSibling.remove();
      e.target.parentElement.remove();
      Ui.projectsPopup.append(Ui.addProjectButton);
    }
  }
  // Remove input and buttons if clicked on cancel
  else if (e.target.id === "input-cancel") {
    e.target.parentElement.previousSibling.remove();
    e.target.parentElement.remove();
    Ui.projectsPopup.append(Ui.addProjectButton);
  } else if (e.target.id === "delete-project") {
    e.target.parentElement.remove();
  } else if (
    e.target.classList.contains("project") ||
    e.target.id === "projects-title"
  ) {
    Ui.todoPageTitle.textContent = e.target.textContent;
  }
}
function addProject(name) {
  let project = createElement("li", "class", "project", Ui.projectsContainer);
  let projectName = createElement("p", "id", "project-name", project);
  let newProject = createProject();
  newProject.setName = name;
  projectName.textContent = newProject.name;
  let deleteButton = createSVG(
    "delete-project",
    "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"
  );
  project.append(deleteButton);
}

function openProjects() {
  if (Ui.projectsPopup.style.display !== "inline-flex") {
    Ui.projectsPopup.style.display = "inline-flex";
  } else {
    Ui.projectsPopup.style.display = "none";
  }
}
const todoList = document.querySelector("#todo-list");

function todoEvents(e) {
  console.log(tasks);
  let el = e.target;
  // Toggle edit,delete buttons when clicked on todo
  if (el.id === "todo-text") {
    if (el.dataset.buttonToggle === "true") {
      el.nextSibling.style.display = "none";
      el.dataset.buttonToggle = "false";
    } else if (el.dataset.buttonToggle === "false") {
      el.nextSibling.style.display = "flex";
      el.dataset.buttonToggle = "true";
    }
  }
  // delete todo
  else if (el.id === "delete") {
    el.parentElement.parentElement.remove();
    removeTodo(el.parentElement.parentElement.dataset.number);
  } else if (el.parentElement.id === "delete") {
    el.parentElement.parentElement.parentElement.remove();
    removeTodo(el.parentElement.parentElement.parentElement.dataset.number);
  }
  // complete todo
  else if (el.id === "complete") {
    el.parentElement.parentElement.remove();
    addToComplete(el.parentElement.parentElement.dataset.number);
    removeTodo(el.parentElement.parentElement.dataset.number);
  } else if (el.parentElement.id === "complete") {
    el.parentElement.parentElement.parentElement.remove();
    addToComplete(el.parentElement.parentElement.parentElement.dataset.number);
    removeTodo(el.parentElement.parentElement.parentElement.dataset.number);
  }
}

let totalTasks = -1;
function addTaskToPage() {
  let todo = createElement("li", "class", "todo", Ui.todoList);
  let todoText = createElement("p", "id", "todo-text", todo);
  todoText.dataset.buttonToggle = "false";
  totalTasks++;
  todo.dataset.number = totalTasks;
  let newTodo = createTodo(totalTasks);
  todoText.textContent = newTodo.title;

  let dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("id", "date");
  dateInput.value = newTodo.dueDate;
  todoText.append(dateInput);
  let buttonCont = document.createElement("div");
  buttonCont.setAttribute("id", "button-cont");
  let completeButton = createSVG(
    "complete",
    "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"
  );

  let deleteButton = createSVG(
    "delete",
    "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"
  );
  buttonCont.append(completeButton);
  buttonCont.append(deleteButton);
  todo.append(buttonCont);
  return todo;
}

function removeAddPopup() {
  Ui.addTask.remove();
  Ui.newTodoContainer.append(Ui.addNewTodoButton);
  Ui.newTodoContainer.style.margin = "150px auto";
}

function createAddPopup() {
  Ui.addNewTodoButton.remove();
  Ui.newTodoContainer.append(Ui.addTask);
  Ui.newTodoContainer.style.margin = "80px 300px";
}

export { Ui };
