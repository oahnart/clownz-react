import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actAddToCart } from "../system/actions";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// const params = {};
// const TAX_RATE = 0.07;

const useStyles = makeStyles({
  containerCart: {
    maxWidth: 1400,
    margin: "150px auto",
  },
  table: {
    minWidth: 700,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(image, desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price, image };
}

function Total(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

// const invoiceTaxes = TAX_RATE * invoiceTotal;
// const invoiceTotal = invoiceTaxes + invoiceTotal;

const Cart = (props) => {
  const classes = useStyles();
  // useEffect(() => {
  //   _getData(params);
  //   //eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  console.log("cart", props);
  const rows = props.cart.map((carts) =>
    createRow(
      carts.product.product_image,
      carts.product.product_name,
      carts.quantity,
      carts.product.price
    )
  );
  const invoiceTotal = Total(rows);

  // const _getData = (params) => {
  //   props.actAddToCart(params);
  // };
  return (
    <Box className={classes.containerCart}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={4}>
                Details
              </TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Desc</TableCell>
              <TableCell>Qty.</TableCell>
              <TableCell>Unit</TableCell>
              <TableCell align="right">Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.desc}>
                <TableCell>{row.image}</TableCell>
                <TableCell>{row.desc}</TableCell>
                <TableCell>{row.qty}</TableCell>
                <TableCell>{row.unit}</TableCell>
                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default connect(
  (state) => ({
    cart: state.systemReducer.cart,
  }),
  { actAddToCart }
)(Cart);
