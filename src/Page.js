import React, { useEffect, useState } from "react";

function Page() {
  const [cart, setCart] = useState([]);

  const [products] = useState([
    {
      cost: "₱53,995.00",
      image:
        "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/ASUS_X570UD/ASUS_X570UD_L_1.jpg",
      stock: 1,
    },
    {
      name: "Lenovo",
      cost: "$157.89",
      image:
        "https://bestdealgadgets.com/wp-content/uploads/2019/09/lenovo-phone-4.jpg",
      stock: 1,
    },
    {
      name: "Asus Laptop",
      cost: "₱53,995.00",
      image:
        "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/ASUS_X570UD/ASUS_X570UD_L_1.jpg",
      stock: 1,
    },
    {
      name: "Lenovo",
      cost: "$157.89",
      image:
        "https://bestdealgadgets.com/wp-content/uploads/2019/09/lenovo-phone-4.jpg",
      stock: 1,
    },
    {
      name: "Sample",
      cost: "10000",
      image:
        "https://bestdealgadgets.com/wp-content/uploads/2019/09/lenovo-phone-4.jpg",
      stock: 0,
    },
  ]);

  useEffect(() => {
    const localItem = localStorage.getItem("cartItem");

    if (localItem) {
      setCart(JSON.parse(localItem));
    }
  }, []);

  const addToCart = (product) => {
    localStorage.setItem("cartItem", JSON.stringify([...cart, product]));
    setCart([...cart, product]);
  };

  const gotoCartPage = () => {
    window.location.href = "/cart";
  };

  const isAdded = (item) => {
    const list = cart.filter((product) => product.name === item.name);

    if (list.length) {
      return true;
    }

    return false;
  };

  const removeItem = (prod) => {
    setCart((prev) => prev.filter((item) => item.name !== prod.name));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 text-md-left">
            <h1>Product List</h1>
          </div>
          <div className="col-12 col-md-6 text-md-right">
            <a
              href="#"
              onClick={gotoCartPage}
              className="btn btn-outline-warning"
            >
              My Cart{" "}
              <span className="badge bg-danger text-white">{cart.length}</span>
            </a>
          </div>
        </div>
        <div className="products row px-3">
          {products
            .filter((product) => product.stock > 0)
            .map((product, index) => (
              <div className="product col-12 col-md-6 my-3" key={index}>
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

                {isAdded(product) ? (
                  <>
                    <button
                      className="btn btn-danger btn-sm btn-block"
                      onClick={() => removeItem(product)}
                    >
                      Remove
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn-success btn-sm btn-block"
                    onClick={() => addToCart(product)}
                  >
                    Add to cart
                  </button>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
