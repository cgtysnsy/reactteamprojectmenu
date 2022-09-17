import React from "react";

export default function Categories({ categoriesBtn, handlerBtn }) {
  return (
    <div className="btn-container">
      {categoriesBtn.map((category, index) => {
        return (
          <button
            className="filter-btn"
            onClick={(e) => handlerBtn(e)}
            key={index}
            name={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
