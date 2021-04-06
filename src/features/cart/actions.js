import * as actionsType from "./actionTypes";

export const actAddToCart = (product, quantity) => {
  return {
    type: actionsType.ADD_TO_CART,
    product,
    quantity,
  };
};
