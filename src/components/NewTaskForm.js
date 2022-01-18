import React, { useState } from "react";

function NewTaskForm({categories, tasks, onTaskFormSubmit}) {
  const [text, setText] = useState('')
  const [select, setSelect] = useState('Code')

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const newItem = {
      text: text,
      category: select,
    }
    const newArr = [...tasks, newItem]
    onTaskFormSubmit(newArr)

  }

  function handleCatChange(e) {
    setSelect(e.target.value)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCatChange} >
          {categories.map(category => {
            if (category !== 'All') {
              return <option key={category} >{category}</option>
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
