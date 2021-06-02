import { tasks } from "./dom";

const completedArray = [];

function addToComplete(order) {
  const completedTask = tasks.find((task) => task.order === order);
  completedArray.push(completedTask);
  return completedArray;
}

export default { addToComplete };
