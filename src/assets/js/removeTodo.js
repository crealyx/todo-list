import { projectsArray } from "./projects";
import { tasks } from "./dom";

function removeTodo(order) {
  const taskOrder = tasks.find((task) => task.order == order);
  const index = tasks.indexOf(taskOrder);
  const matchedProject = projectsArray.find((project) =>
    project.tasks.includes(taskOrder)
  );

  if (matchedProject !== undefined) {
    const projectIndex = matchedProject.tasks.indexOf(taskOrder);
    matchedProject.tasks.splice(projectIndex, 1);
    tasks.splice(index, 1);
  } else {
    tasks.splice(index, 1);
  }
}

export { removeTodo };
