import { tasks } from "./newTodo";
let completedArray = [];

function addToComplete(order) {
  console.log(tasks);
  let completedTask = tasks.find((task) => task.order == order);
  console.log(completedTask);
  completedArray.push(completedTask);
  console.log(completedArray);
  return completedArray;
}

export { addToComplete };
