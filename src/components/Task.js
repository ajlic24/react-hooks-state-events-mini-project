import React from "react";

function Task({names, categories, handleClick}) {

  return (
    <div className="task">
      <div className="label">{categories}</div>
      <div className="text">{names}</div>
      <button className="delete" onClick={handleClick} >X</button>
    </div>
  );
}

export default Task;
