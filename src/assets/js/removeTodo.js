import { tasks } from "./newTodo";

function removeTodo(order) {
  let taskOrder = tasks.find((task) => task.order == order);
  let index = tasks.indexOf(taskOrder);
  tasks.splice(index, 1);
  return tasks;
}

export { removeTodo };
