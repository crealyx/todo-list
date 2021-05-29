import { projectsArray } from "./projects";
import { Ui, tasks } from "./dom";

function removeTodo(order) {
  let taskOrder = tasks.find((task) => task.order == order);
  let index = tasks.indexOf(taskOrder);
  let matchedProject = projectsArray.find((project) =>
    project.tasks.includes(taskOrder)
  );

  if (matchedProject !== undefined) {
    let projectIndex = matchedProject.tasks.indexOf(taskOrder);
    matchedProject.tasks.splice(projectIndex, 1);
    tasks.splice(index, 1);
  } else {
    tasks.splice(index, 1);
  }
}

export { removeTodo };
