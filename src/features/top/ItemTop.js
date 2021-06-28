import React from "react";
import { Grid, makeStyles, Box } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
  container: {
    height: 450,
    margin: "0 15px",
    position: "relative",
  },
  imageContent: {
    height: 210,
    width: "100%",
    objectFit: "contain",
  },
  borderImage: {
    border: "thin solid rgba(221,221,221,6)",
    padding: "35px 0",
  },
  addToCart: {
    cursor: "pointer",
    position: "absolute",
    top: 10,
    right: 10,
  },
}));

const ItemTop = ({ dataProduct, dataMenu }) => {
  const classes = useStyles();

  const addToCart = (data) => {
    console.log("itemproduct", data);
  };

  return (
    <>
      {dataMenu === "TOP"
        ? dataProduct?.top?.map((el, index) => (
            <Grid key={index} item xl={3} lg={3} md={4} sm={6} xs={6}>
              <Box className={classes.container}>
                <Box className={classes.borderImage}>
                  <img
                    className={classes.imageContent}
                    src={el?.product_image}
                    alt="error images"
                  />
                </Box>
                <Box>{el?.product_name}</Box>
                <Box fontSize="14px" color="#999999">
                  {el?.product_code}
                </Box>
                <Box fontWeight="200">{el?.price}</Box>
                <Box
                  onClick={() => addToCart(el)}
                  className={classes.addToCart}
                >
                  <AddShoppingCartIcon color="secondary" />
                </Box>
              </Box>
            </Grid>
          ))
        : ""}
    </>
  );
};

export default ItemTop;
