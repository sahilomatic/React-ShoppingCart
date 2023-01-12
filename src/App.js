import Carts from "./Components/cart";
import Products from "./Components/products";
import { useEffect, useReducer } from "react";
import Reducer from "./Reducer/reducer";
export default function App() {
  const [currentState, dispatch] = useReducer(Reducer, {
    products: [],
    cart: []
  });
  const getData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    await dispatch({
      type: "ADD_PRODUCTS",
      payLoad: data.products
    });
  };

  const addToCart = (payLoad) => {
    let cart = currentState.cart.filter((obj) => obj.id != payLoad.id);
    cart.push(payLoad);
    dispatch({
      type: "ADD_TO_CART",
      payLoad: cart
    });
  };

  const removeFromCart = (payLoad) => {
    console.log("removeFromCart");
    dispatch({
      type: "REMOVE_FROM_CART",
      payLoad: payLoad
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <Products products={currentState.products} addToCart={addToCart} />
      <Carts
        cart={currentState.cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}
