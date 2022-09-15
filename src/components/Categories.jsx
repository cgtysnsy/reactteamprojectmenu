import React from 'react'


export default function Categories({CategoriesBtn, filter}) {

  return (
    <div className="btn-container">
        {CategoriesBtn.map((category, index) => {
            return (
              <button className="filter-btn"
                onClick={ ()=>{ filter(category) }}
                >{category}
              </button>
            );
          })}
    </div>
  )
}
