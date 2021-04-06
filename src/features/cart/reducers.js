import produce from "immer";
import * as actionTypes from "./actionTypes";

const data = JSON.parse(localStorage.getItem("CART"));

const initialState = [
  {
    product: {
      id: "1",
      createdAt: "2021-02-03T14:39:09.327Z",
      product_name: "Generic Rubber Salad",
      product_image:
        "https://storage.googleapis.com/cdn.nhanh.vn/store/11486/ps/20210201/2__2_.jpg",
      price: 28,
      product_code: "50660-9202",
      category_name: "top",
    },
    quantity: 5,
  },
];

const cart = (state = initialState, action) =>
  produce(state, (newState) => {
    switch (action.type) {
      case actionTypes.ADD_TO_CART:
        console.log("action", action);
        newState = [...state];
        break;
      default:
        newState = [...state];
        break;
    }
  });

export default cart;
