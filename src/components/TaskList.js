import React from "react";
import Task from "./Task";

function TaskList({tasks, catValue, setRemove}) {
  const filtered = tasks.filter(task => {
    if (catValue === 'All'){
      return true
    } else {
    return task.category === catValue
    }
  })

  function handleClick(e) {
    const name = e.target.parentElement.childNodes[1].textContent
    const deleted = tasks.filter(task => task.text !== name)
    setRemove(deleted)
  }

  return (
    <div className="tasks">
      {filtered.map(task => {
        return (
          <Task key={task.text} names={task.text} categories={task.category} handleClick={handleClick} />
        )
      })}
    </div>
  );
}

export default TaskList;
