import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log( CATEGORIES, TASKS );

function App() {
  const [clickCat, setClickCat] = useState('All')
  const [tasks, setTasks] = useState(TASKS)

  function handleClickCat(category) {
    setClickCat(category)
  }

  function handleTask(newItem) {
    setTasks(newItem)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleClickCat={handleClickCat} clickCat={clickCat} />
      <NewTaskForm categories={CATEGORIES} tasks={tasks} onTaskFormSubmit={handleTask} />
      <TaskList tasks={tasks} catValue={clickCat} setRemove={handleTask}  />
    </div>
  );
}

export default App;
