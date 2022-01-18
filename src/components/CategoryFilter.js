import React from "react";

function CategoryFilter({categories, handleClickCat, clickCat}) {

  function handleClick(e) {
    console.log(e.target)
    const textContent = e.target.textContent
    handleClickCat(textContent)

  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        const className = (clickCat === category) ? 'selected' : ''
        return (
          <button className={className} key={category} onClick={handleClick} >{category}</button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
