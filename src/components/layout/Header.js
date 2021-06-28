import React, { useEffect, useRef, useState } from "react";
// import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SlideShow from "../../components/layout/SlideShow";
// import { actionGetProfile } from "../../features/system/actions";
// import { routes } from "../../utils/constants/constant";
import utilStyles from "../../utils/constants/styles/utilStyles";
import * as image from "../../assets/index";
import { useTheme } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  makeStyles,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  FormControl,
  useMediaQuery,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import DrawerMenu from "./DrawerMenu";
import { listMenu } from "./ListMenu";

const useStyles = makeStyles((theme) => ({
  rootForm: {
    "& .MuiFormControl-root": {
      [theme.breakpoints.down("lg")]: {
        width: 250,
      },
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
  contentNavbar: {
    padding: "10px 150px",
    display: "flex",
    margin: "0 auto",
    width: "100%",
    // height: 80,
    background: "linear-gradient(rgb(33, 33, 33) 0%, rgba(33, 33, 33, 0) 100%)",
    [theme.breakpoints.down("md")]: {
      padding: "10px 50px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "10px 20px",
    },
  },
  sticky: {
    width: "100%",
    zIndex: 1000,
    top: 0,
    left: 0,
    position: "fixed",
    transition: "all 0.4s ease-in-out",
  },
  stickyMenu: {
    width: "100%",
    zIndex: 1000,
    top: 0,
    left: 0,
    position: "fixed",
    background: "#fff !important",
    transition: "all 0.4s ease-in-out",
    color: "#000",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  },
  contentNavbarNotHome: {
    background: "#fff !important",
    color: "#000 !important",
  },
  logoClownz: {
    width: 150,
    height: 60,
    color: "red",
    // [theme.breakpoints.down("md")]: {
    //   width: 50,
    //   height: 40,
    // },
  },
  itemMenu: {
    textAlign: "center",
  },
  shoppingCart: {
    padding: 10,
    [theme.breakpoints.down("md")]: {
      padding: "12px 2px",
      fontSize: 12,
    },
  },
  textField: {
    width: 350,
  },
  outlinedInputMenu: {
    height: 46,
    fontSize: 13,
    "& ::placeholder": {
      color: "rgba(0, 0, 0, 0.54) !important",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(0, 0, 0, 0.54) !important",
    },
  },
  outlinedInput: {
    height: 46,
    fontSize: 13,
    "& ::placeholder": {
      color: "#fdfdfd",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fdfdfd",
    },
  },
  btnCart: {
    textAlign: "right",
  },
  imageContent: {
    height: 850,
    [theme.breakpoints.down("lg")]: {
      height: 700,
    },
    [theme.breakpoints.down("md")]: {
      height: 500,
    },
    [theme.breakpoints.down("sm")]: {
      height: 340,
    },
    [theme.breakpoints.down("xs")]: {
      height: 220,
    },
  },
  imageSlick: {
    width: "100%",
    height: 850,
    [theme.breakpoints.down("lg")]: {
      height: 700,
      minHeight: 700,
    },
    [theme.breakpoints.down("md")]: {
      height: 500,
      minHeight: 500,
    },
    [theme.breakpoints.down("sm")]: {
      height: 340,
      minHeight: 340,
    },
    [theme.breakpoints.down("xs")]: {
      height: 220,
      minHeight: 220,
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const classesUtils = utilStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const ref = useRef(null);
  const [sticky, setSticky] = useState("");
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const isHome = props.location.pathname === "/home";
  const topMenu = isHome ? -400 : -80;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    if (ref.current) {
      if (ref.current.getBoundingClientRect().top <= topMenu) {
        setSticky("menu");
      } else if (ref.current.getBoundingClientRect().top <= -80) {
        setSticky("banner");
      } else {
        setSticky("");
      }
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setVisibleDrawer(open);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Box position="relative" height={isHome ? "auto" : 80} ref={ref}>
        <Box
          position="absolute"
          top={0}
          zIndex={100}
          className={clsx(
            sticky === "banner"
              ? classes.sticky
              : sticky === "menu"
              ? classes.stickyMenu
              : "",
            classes.contentNavbar,
            !isHome && classes.contentNavbarNotHome
          )}
        >
          <Grid
            container
            className={classesUtils.container}
            alignItems="center"
          >
            <Grid item xl={4} lg={2} md={10} sm={10} xs={8}>
              <Link to="/home">
                <img
                  className={classes.logoClownz}
                  src={image.logo_clownz}
                  alt="error images"
                />
              </Link>
            </Grid>
            <Grid item xl={3} lg={3} className={classes.rootForm}>
              <FormControl className={classes.textField}>
                <OutlinedInput
                  className={clsx(
                    classes.outlinedInput,
                    sticky === "menu" && classes.outlinedInputMenu
                  )}
                  placeholder="Tìm kiếm theo sản phẩm, thương hiệu..."
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle visibility"
                        style={{
                          color:
                            sticky === "menu" || !isHome
                              ? "rgba(0, 0, 0, 0.54)"
                              : "#fdfdfd",
                        }}
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            {!isMobile && (
              <Grid item xl={4} lg={6}>
                <Grid
                  style={{
                    color: sticky === "menu" || !isHome ? "#000" : "#fdfdfd",
                  }}
                  container
                  className={classes.itemMenu}
                >
                  {listMenu.map((el) => (
                    <Grid item xl={2} lg={2} md={2} sm={2} key={el.name}>
                      <Link to={el.link}>{el.name}</Link>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            )}
            {isMobile && (
              <Grid item md={1} sm={1} xs={2}>
                <Grid
                  style={{
                    color: sticky === "menu" || !isHome ? "#000" : "#fdfdfd",
                  }}
                  container
                  className={classes.itemMenu}
                >
                  <Grid item xs={12}>
                    <Link to="home" onClick={toggleDrawer(true)}>
                      <MenuIcon />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            )}
            {!isMobile && (
              <Grid item xl={1} lg={1} className={classes.btnCart}>
                <Link to="cart">
                  <Button
                    style={{
                      color: sticky === "menu" || !isHome ? "#000" : "#fdfdfd",
                      border:
                        sticky === "menu" || !isHome
                          ? "1px solid #000"
                          : "1px solid #fdfdfd",
                    }}
                    className={classes.shoppingCart}
                    variant="outlined"
                    size="medium"
                    startIcon={<ShoppingCartIcon />}
                  >
                    Cart {props.cart.length > 0 ? `(${props.cart.length})` : ""}
                  </Button>
                </Link>
              </Grid>
            )}
            {isMobile && (
              <Grid item md={1} sm={1} xs={2}>
                <Grid
                  style={{
                    color: sticky === "menu" || !isHome ? "#000" : "#fdfdfd",
                  }}
                  container
                  className={classes.itemMenu}
                >
                  <Grid item xs={12}>
                    <Link to="/cart">
                      <ShoppingCartIcon />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Box>
        <DrawerMenu
          visibleDrawer={visibleDrawer}
          toggleDrawer={toggleDrawer}
          listMenuItem={listMenu}
        />
      </Box>
      <SlideShow settingProps={settings} className={classes.imageContent}>
        <Box>
          <img
            src={image.slider_clownz1}
            alt="error image5"
            className={classes.imageSlick}
          />
        </Box>
        <Box>
          <img
            src={image.slider_clownz2}
            alt="error image1"
            className={classes.imageSlick}
          />
        </Box>
        <Box>
          <img
            src={image.slider_clownz3}
            alt="error image2"
            className={classes.imageSlick}
          />
        </Box>
      </SlideShow>
    </>
  );
};

export default connect(
  (state) => ({
    cart: state.systemReducer.cart,
  }),
  {}
)(withRouter(Header));
