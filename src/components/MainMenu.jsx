import React from "react";

function MainMenu({ getData }) {
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
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MainMenu;
