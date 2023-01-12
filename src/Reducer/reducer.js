export default function (currentState, action) {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...currentState, products: action.payLoad };

    case "ADD_TO_CART":
      return { ...currentState, cart: action.payLoad };

    case "REMOVE_FROM_CART":
      return {
        ...currentState,
        cart: currentState.cart.filter((obj) => obj.id != action.payLoad.id)
      };

    default:
      return currentState;
  }
}
