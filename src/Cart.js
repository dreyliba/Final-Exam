import React, { useState, useEffect } from "react";

function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const localItem = localStorage.getItem("cartItem");

    if (localItem) {
      setItems(JSON.parse(localItem));
    }
  }, []);

  const checkOut = () => {
    localStorage.setItem("cartItem", JSON.stringify([]));

    window.location.href = "/";
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 text-md-left">
          <a href="/" className="btn btn-outline-info">
            Back
          </a>
        </div>
      </div>
      <div className="container">
        <div>
          <h1>Product List</h1>
        </div>
        {items.map((product, index) => (
          <div className="product col-12 my-3" key={index}>
            <div className="row">
              <div className="col-12 col-md-6 text-md-left">
                <h3>{product.name}</h3>
              </div>
              <div className="col-12 col-md-6 text-md-right">
                <h4>{product.cost}</h4>
              </div>
            </div>
            <div
              className="image-container"
              style={{ backgroundImage: `url("${product.image}")` }}
            ></div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-12 text-md-right">
          <a href="#" onClick={checkOut} className="btn btn-outline-warning">
            Checkout
            <span className="badge bg-danger text-white">{items.length}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cart;
