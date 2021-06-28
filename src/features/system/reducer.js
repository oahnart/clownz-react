import Cookie from "js-cookie";
import produce from "immer";

import * as actionTypes from "../../utils/constants/actionTypes";
import * as constants from "../../utils/constants/constant";
import { data } from "../../utils/constants/fakeData";

const dataCart = JSON.parse(localStorage.getItem("CART"));

const initialState = {
  isLoading: false,
  role: Cookie.get(constants.USER_ROLES) || constants.Roles.ROLE_USER,
  profile: {},
  product: data,
  isFetching: false,
  cart: dataCart ? dataCart : [],
};

const system = (state = initialState, action) =>
  produce(state, (newState) => {
    let { product, quantity } = action;
    let index = -1;
    switch (action.type) {
      case actionTypes.HIDE_LOADING:
        newState.isLoading = false;
        break;
      case actionTypes.SHOW_LOADING:
        newState.isLoading = true;
        break;
      case actionTypes.CHANGE_LANG:
        newState.locale = action.payload;
        break;
      case actionTypes.FETCHING_PROFILE:
        newState.isLoading = true;
        break;
      case actionTypes.FETCHING_PROFILE_SUCCESS:
        newState.profile = action.payload;
        newState.isLoading = false;
        break;
      case actionTypes.FETCHING_PROFILE_ERROR:
        newState.isLoading = false;
        break;
      //product
      case actionTypes.FETCHING_PRODUCT:
        newState.isFetching = true;
        break;
      case actionTypes.FETCHING_PRODUCT_SUCCESS:
        newState.product = action.payload;
        newState.isFetching = false;
        break;
      case actionTypes.FETCHING_PRODUCT_ERROR:
        newState.isFetching = false;
        break;
      //cart
      case actionTypes.ADD_TO_CART:
        console.log("action", action);
        index = findProductInCart(newState, product);
        if (index !== -1) {
          newState[index].quantity += quantity;
        } else {
          newState.push({
            product,
            quantity,
          });
        }
        localStorage.setItem("CART", JSON.stringify(newState));
        newState = [...state];
        break;
      default:
        newState = state;
        break;
    }
  });

const findProductInCart = (cart, product) => {
  let index = -1;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};

export default system;
