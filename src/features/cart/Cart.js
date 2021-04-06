import React from "react";
import { connect } from "react-redux";
import { actAddToCart } from "./actions";

const Cart = () => {
  return <div>cart</div>;
};

export default connect(
  (state) => ({
    product: state.homeReducer.product,
  }),
  { actAddToCart }
)(Cart);
