import { tasks } from "./dom";
let completedArray = [];

function addToComplete(order) {
  let completedTask = tasks.find((task) => task.order == order);
  console.log(completedTask);
  completedArray.push(completedTask);
  console.log(completedArray);
  return completedArray;
}

export { addToComplete };
