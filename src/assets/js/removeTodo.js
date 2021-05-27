import { projectsArray } from "./projects";
import { Ui, tasks } from "./dom";

function removeTodo(order) {
  if (Ui.todoPageTitle.textContent === "Home") {
    let taskOrder = tasks.find((task) => task.order == order);
    let index = tasks.indexOf(taskOrder);
    tasks.splice(index, 1);
  } else {
    let taskOrder = tasks.find((task) => task.order == order);
    let index = tasks.indexOf(taskOrder);
    let matchedProject = projectsArray.find(
      (project) => project.name === Ui.todoPageTitle.textContent
    );
    let projectIndex = matchedProject.tasks.indexOf(taskOrder);
    matchedProject.tasks.splice(projectIndex, 1);
    tasks.splice(index, 1);
  }
  return tasks;
}

export { removeTodo };
