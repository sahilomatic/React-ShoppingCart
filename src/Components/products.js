import "./products.css";
import { useState } from "react";

export default function Products({ products, addToCart }) {
  const handleAddButton = (obj) => {
    console.log("handleAddButton");
    if ("qty" in obj) {
      obj.qty += 1;
    } else {
      obj.qty = 1;
    }
    addToCart(obj);
  };
  return (
    <div className="products">
      {products.map((obj) => {
        return (
          <div key={obj.id} class="item">
            <img alt={obj.title} src={obj.thumbnail} />
            <p>{obj.title}</p>
            <p>${obj.price}</p>
            <p>{"qty" in obj ? obj.qty : ""}</p>
            {"qty" in obj && obj.qty > 0 ? (
              <button>Added</button>
            ) : (
              <button onClick={() => handleAddButton(obj)}>Add to cart</button>
            )}
          </div>
        );
      })}
    </div>
  );
}
