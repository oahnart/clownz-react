import produce from "immer";

import * as actionTypes from "./actionTypes";
import { data } from "../../utils/constants/fakeData";

// const initialState = {
//   product: [],
//   isFetching: false,
// };

const initialState = {
  product: data,
  isFetching: false,
};

const home = (state = initialState, action) =>
  produce(state, (newState) => {
    switch (action.type) {
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
      default:
        newState = state;
        break;
    }
  });

export default home;
