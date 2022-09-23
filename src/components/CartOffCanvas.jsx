import React, { Component } from "react";
// npm install @mui/material @emotion/react @emotion/styled

class CartOffCanvas extends Component {
  render() {
    const basket = this.props.cartBusket.length;

    const allPrices = this.props.cartBusket.map((item) => {
      return item.price;
    });
    const sumOfPrices = allPrices.reduce((x, y) => {
      return x + y;
    }, 0);
    return (
      <div>
        <button
          className="filter-btncart"
          // class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Cart <span className="badge bg-secondary">{basket}</span>
        </button>

        <div
          style={{ zIndex: 2000 }}
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Orders...</h5>
            <br />
            <div className="cart-underline"></div>

            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            {this.props.cartBusket.map((item, index) => {
              return (
                <div>
                  <h4>{item.title} </h4>
                  <img
                    className="cart-photo"
                    style={{ width: "150px" }}
                    src={item.img}
                    alt={item.title}
                  />
                  <h4 className="price">${item.price}</h4>
                  <button
                    className="delete"
                    onClick={() => this.props.deleteFromCart(index)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
            <div>Total Sum ${sumOfPrices}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartOffCanvas;
