import "./carts.css";
import { useState, useEffect } from "react";
export default function Carts({ cart, addToCart, removeFromCart }) {
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    let cost = cart.reduce((precCost, obj) => {
      return precCost + Number(obj.price);
    }, 0);

    setTotalCost(cost);
  }, [cart]);

  const increaseQty = (payLoad) => {
    payLoad.qty += 1;
    addToCart(payLoad);
  };
  const decreaseQty = (payLoad) => {
    payLoad.qty -= 1;
    if (payLoad.qty <= 0) {
      removeFromCart(payLoad);
    } else {
      addToCart(payLoad);
    }
  };
  return (
    <div className="carts">
      <h2>Carts</h2>
      <p>Total Cost : ${totalCost}</p>
      {cart.map((obj) => {
        return (
          <div key={obj.id} class="item">
            <img alt={obj.title} src={obj.thumbnail} />
            <p>{obj.title}</p>
            <p>${obj.price}</p>
            <p>{"qty" in obj ? obj.qty : ""}</p>

            <div>
              <span
                onClick={() => {
                  decreaseQty(obj);
                }}
              >
                ➖
              </span>
              <span>{obj.qty}</span>
              <span
                onClick={() => {
                  increaseQty(obj);
                }}
              >
                {" "}
                ➕
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
