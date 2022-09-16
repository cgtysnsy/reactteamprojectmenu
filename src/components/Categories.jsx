import React from "react";

export default function Categories({ categoriesBtn, handlerBtn }) {
  return (
    <div className="btn-container">
      {categoriesBtn.map((category, index) => {
        return (
          <button className="filter-btn" onClick={() => handlerBtn(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
}
