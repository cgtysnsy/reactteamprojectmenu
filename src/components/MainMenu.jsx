import React from "react";

function MainMenu({ getData, addToCart }) {
  return (
    <div className="section-center">
      {getData.map((items, index) => {
        return (
          <div className="menu-item" key={index}>
            <img className="photo" src={items.img} alt={items.title} />
            <div className="item-info">
              <header>
                <h4>{items.title}</h4>
                <h4 className="price">${items.price}</h4>
              </header>
              <p className="item-text">{items.desc}</p>
              <button className="filter-btn" onClick={() => addToCart(index)}>
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MainMenu;
