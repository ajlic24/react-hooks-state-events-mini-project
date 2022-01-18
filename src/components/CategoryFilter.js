import React from "react";

function CategoryFilter({categories, handleClickCat}) {
  // const [isSelected, setIsSelected] = useState(false)

  function handleClick(e) {
    console.log(e.target)
    const textContent = e.target.textContent
    handleClickCat(textContent)
    // setIsSelected(!isSelected)
    e.target.className = 'selected'

  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return (
          <button key={category} onClick={handleClick} >{category}</button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
