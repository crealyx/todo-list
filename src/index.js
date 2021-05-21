import "./assets/styles/main.scss";

import { createTodo } from "./assets/js/newTodo";

// HMR
if (module.hot) {
  module.hot.accept();
}
//
console.log(createTodo("Work", "workday", "today"));
console.log(createTodo("Dance", "danceday", "today"));
