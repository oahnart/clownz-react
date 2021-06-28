import React, { useEffect } from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
// import utilStyles from "../../utils/constants/styles/utilStyles";
// import clsx from "clsx";
import { connect } from "react-redux";
import { actionGetProducts } from "../system/actions";
import ItemTop from "./ItemTop";
import { listMenu } from "../../components/layout/ListMenu";

const params = {
  // page: 0,
  // size: 10,
  // isMyself: false,
};

const useStyles = makeStyles((theme) => ({
  centerGrid: {
    textAlign: "center",
  },
  container: {
    maxWidth: 1531,
    margin: "100px auto",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      margin: 0,
      // padding: "0 25px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: 0,
      // padding: "0 25px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: 0,
      // padding: "0 25px",
    },
  },
  productName: {
    paddingLeft: 15,
    paddingBottom: 15,
  },
}));

const Top = (props) => {
  const classes = useStyles();
  // const classesUtils = utilStyles();

  useEffect(() => {
    _getData(params);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _getData = (params) => {
    props.actionGetProducts(params);
  };
  return (
    <>
      {listMenu.map((el, index) => (
        <Box key={index} className={classes.container}>
          <Grid container className={classes.centerGrid}>
            {props.product.map((data, indexs) => (
              <ItemTop key={indexs} dataProduct={data} dataMenu={el.name} />
            ))}
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default connect(
  (state) => ({
    product: state.systemReducer.product,
    isFetching: state.systemReducer.isFetching,
  }),
  { actionGetProducts }
)(Top);
