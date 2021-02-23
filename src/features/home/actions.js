import api from "../../utils/helpers/api";
import * as actionsType from "./actionTypes";
// api
const getProducts = (params) => {
  return api({
    method: "get",
    url: "/products",
    params,
  });
};
export const actionGetProducts = (params) => async (dispatch) => {
  try {
    dispatch({
      type: actionsType.FETCHING_PRODUCT,
    });
    const { data } = await getProducts(params);
    dispatch({
      type: actionsType.FETCHING_PRODUCT_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: actionsType.FETCHING_PRODUCT_ERROR,
    });
  }
};
