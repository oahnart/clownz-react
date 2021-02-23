import React from "react";
import utilStyles from "../../utils/constants/styles/utilStyles";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  alignIcon: {
    verticalAlign: "middle",
  },
  container: {
    padding: "40px 0",
    [theme.breakpoints.down("lg")]: {
      paddingLeft: 20,
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: 20,
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 20,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20,
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const classesUtils = utilStyles();
  return (
    <Box bgcolor="white.main1">
      <Grid
        container
        className={clsx(classesUtils.container, classes.container)}
      >
        <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
          <Box fontWeight="bold">VỀ CHÚNG TÔI</Box>
          <Box>
            <Link to="/#">Câu chuyện thương hiệu</Link>
          </Box>
          <Box>
            <Link to="/#">Hệ thống cửa hàng</Link>
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
          <Box fontWeight="bold">TIN TỨC</Box>
          <Box>
            <Link to="/#">Tuyển dụng</Link>
          </Box>
          <Box>
            <Link to="/#">News</Link>
          </Box>
          <Box>
            <Link to="/#">Blogs</Link>
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
          <Box fontWeight="bold">KỂT NỐI VỚI CHÚNG TÔI</Box>
          <Box>
            <Link to="/#">
              <FacebookIcon className={classes.alignIcon} />
              Facebook
            </Link>
          </Box>
          <Box>
            <Link to="/#">
              <InstagramIcon className={classes.alignIcon} />
              Instagram
            </Link>
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
          <Box fontWeight="bold">TRỢ GIÚP</Box>
          <Box>
            <Link to="/#">CLOWNZ card</Link>
          </Box>
          <Box>
            <Link to="/#">Hướng dẫn đặt hàng</Link>
          </Box>
          <Box>
            <Link to="/#">Cách thức vận chuyển và đổi hàng</Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
