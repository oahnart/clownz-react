import React from "react";
import { Grid, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: 450,
    margin: "0 15px",
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
}));

const ItemProduct = ({ dataProduct, dataMenu }) => {
  const classes = useStyles();

  return (
    <>
      {dataMenu === "TOP"
        ? dataProduct?.top?.map((el, index) => (
            <Grid key={index} item xs={6}>
              <Box className={classes.container}>
                <Box className={classes.borderImage}>
                  <img
                    className={classes.imageContent}
                    src={el?.product_image}
                    alt="error images"
                  />
                </Box>
              </Box>
            </Grid>
          ))
        : dataMenu === "BOTTOM"
        ? dataProduct?.bottom?.map((el, index) => (
            <Grid key={index} item xs={6}>
              <Box className={classes.container}>
                <img
                  className={classes.imageContent}
                  src={el?.product_image}
                  alt="error images"
                />
              </Box>
            </Grid>
          ))
        : dataMenu === "HAT"
        ? dataProduct?.hat?.map((el, index) => (
            <Grid key={index} item xs={6}>
              <Box className={classes.container}>
                <img
                  className={classes.imageContent}
                  src={el?.product_image}
                  alt="error images"
                />
              </Box>
            </Grid>
          ))
        : dataMenu === "BAG"
        ? dataProduct?.bag?.map((el, index) => (
            <Grid key={index} item xs={6}>
              <Box className={classes.container}>
                <img
                  className={classes.imageContent}
                  src={el?.product_image}
                  alt="error images"
                />
              </Box>
            </Grid>
          ))
        : dataMenu === "ACCESSORY"
        ? dataProduct?.accessory?.map((el, index) => (
            <Grid key={index} item xs={6}>
              <Box className={classes.container}>
                <img
                  className={classes.imageContent}
                  src={el?.product_image}
                  alt="error images"
                />
              </Box>
            </Grid>
          ))
        : dataMenu === "SHOES"
        ? dataProduct?.shoes?.map((el, index) => (
            <Grid key={index} item xs={6}>
              <Box className={classes.container}>
                <img
                  className={classes.imageContent}
                  src={el?.product_image}
                  alt="error images"
                />
              </Box>
            </Grid>
          ))
        : ""}
    </>
  );
};

export default ItemProduct;
