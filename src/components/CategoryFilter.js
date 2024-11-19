import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryClick }) {
  const categoryBtns = categories.map((category) => {
    const categoryClass = category === selectedCategory ? "selected" : "";
    return (
      <button
        key={category}
        className={categoryClass}
        onClick={() => onCategoryClick(category)}
      >
        {category}
      </button>
    );
  });
  return <div className="categories">{categoryBtns}</div>;
}

export default CategoryFilter;
