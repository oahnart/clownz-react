import { combineReducers } from "redux";

import systemReducer from "../../features/system/reducer";
import homeReducer from "../../features/home/reducers";
import cartReducer from "../../features/cart/reducers";

const rootReducer = combineReducers({
  systemReducer,
  homeReducer,
  cartReducer,
});

export default rootReducer;
