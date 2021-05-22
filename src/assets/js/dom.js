const createUi = (() => {
  const body = document.querySelector("body");

  const bgWrapper = createElement("div", "id", "bg-wrapper", body);
  const wrapper = createElement("div", "id", "wrapper", bgWrapper);
  const header = createElement("header", "id", "header", wrapper);

  const projectsButton = createElement(
    "button",
    "id",
    "projects-button",
    header
  );
  projectsButton.innerHTML = "Projects";

  const title = createElement("h1", "id", "title", header);
  title.textContent = "To Do List";

  const taskSvg = createSVG(
    "task",
    "M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm12.054-5.839l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201zm-6 8.92v3.955h-16v-18h4l2.102 2h3.898l2-2h4v1.911l2-2.024v-1.887h-3c-1.229 0-2.18-1.084-3-2h-8c-.82.916-1.771 2-3 2h-3v22h20v-7.98l-2 2.025zm-8-16.045c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
  );
  header.append(taskSvg);

  const navbar = createElement("nav", "id", "navbar", wrapper);
  const navUl = createElement("ul", "id", "nav-ul", navbar);

  const home = createElement("li", "class", "nav-li", navUl);
  home.textContent = "Home";

  const today = createElement("li", "class", "nav-li", navUl);
  today.textContent = "Today";

  const thisWeek = createElement("li", "class", "nav-li", navUl);
  thisWeek.textContent = "This Week";

  const todoPage = createElement("main", "id", "todo-page", wrapper);
  const todoPageTitle = createElement("h1", "id", "todo-title", todoPage);
  todoPageTitle.textContent = "Home";

  const todoList = createElement("ul", "id", "todo-list", todoPage);
  const todoContainer = createElement(
    "div",
    "class",
    "todo-container",
    todoList
  );
  const todo = createElement("li", "class", "todo", todoContainer);
  todo.textContent = "Work";

  const editButton = createSVG(
    "edit",
    "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-5 17l1.006-4.036 3.106 3.105-4.112.931zm5.16-1.879l-3.202-3.202 5.841-5.919 3.201 3.2-5.84 5.921z"
  );
  todoContainer.append(editButton);

  const deleteButton = createSVG(
    "delete",
    "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"
  );
  todoContainer.append(deleteButton);

  const addTodoContainer = document.createElement("div");
  addTodoContainer.setAttribute("id", "add-todo-container");
  todoPage.append(addTodoContainer);

  const addButton = createSVG(
    "add-button",
    "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-5v5h-4v-5h-5v-4h5v-5h4v5h5v4z"
  );
  addTodoContainer.append(addButton);

  const addTask = document.createElement("div");
  addTask.setAttribute("id", "add-task");

  const taskTitle = document.createElement("label");
  taskTitle.setAttribute("for", "taskName");
  taskTitle.textContent = "Task:";

  const taskInput = document.createElement("input");
  taskInput.setAttribute("id", "taskName");
  taskInput.setAttribute("type", "text");

  const buttonCtn = document.createElement("div");
  buttonCtn.setAttribute("id", "button-container");
  const addTaskButton = document.createElement("button");
  addTaskButton.textContent = "Add";
  addTaskButton.setAttribute("id", "add-task-btn");
  const cancelTaskButton = document.createElement("button");
  cancelTaskButton.textContent = "Cancel";
  cancelTaskButton.setAttribute("id", "cancel-task-btn");

  addTask.append(taskTitle);
  addTask.append(taskInput);
  addTask.append(buttonCtn);
  buttonCtn.append(addTaskButton);
  buttonCtn.append(cancelTaskButton);
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

  addButton.addEventListener("click", createAddPopup);

  addTaskButton.addEventListener("click", addTaskToPage);
  function addTaskToPage() {
    let newTask = taskInput.value;
    console.log(newTask);
    return newTask;
  }

  cancelTaskButton.addEventListener("click", removeAddPopup);
  function removeAddPopup() {
    addTask.remove();
    addTodoContainer.append(addButton);
    addTodoContainer.style.margin = "150px auto";
  }

  function createAddPopup() {
    addButton.remove();
    addTodoContainer.append(addTask);
    addTodoContainer.style.margin = "80px 300px";
  }
})();
