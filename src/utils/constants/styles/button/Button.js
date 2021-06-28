import clsx from "clsx";
import { memo } from "react";
import PropTypes from "prop-types";
import makeStyles from "@material-ui/styles/makeStyles";
import { Box, Button, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  customerButton: ({
    typeButton,
    backgroundColor,
    borderRadius,
    color,
    height,
    width,
    fontSize,
    fontWeight,
    borderColor,
  }) => ({
    margin: 0,
    backgroundColor:
      typeButton === "text"
        ? "initial"
        : backgroundColor || theme.palette.primary.main,
    color: color || theme.palette.white.white1,
    height: height,
    width: width,
    fontSize: fontSize,
    fontWeight: fontWeight,
    textTransform: "none",
    borderRadius: borderRadius,
    border: typeButton === "outlined" ? `solid 1px ${borderColor}` : "none",
    "&:hover": {
      backgroundColor:
        typeButton === "text"
          ? "initial"
          : backgroundColor || theme.palette.primary.main,
    },
    // "&:disabled": {
    //   color: theme.palette.gray.grayDark5,
    //   opacity: 0.5,
    // },
  }),
}));

const ButtonComponent = ({
  children = null,
  className = "",
  color = "",
  backgroundColor = "",
  borderRadius = 4,
  height = 40,
  fontSize = 14,
  fontWeight = "normal",
  width = "100%",
  handleClick = () => {},
  typeButton = "contained",
  borderColor = "#cccccc",
  loading = false,
  disableRipple = false,
  loadingColor = "#fff",
  isShowCircularProgress = true,
  ...other
}) => {
  const propsStyle = {
    backgroundColor,
    borderRadius,
    color,
    height,
    width,
    fontSize,
    fontWeight,
    typeButton,
    borderColor,
  };
  const classes = useStyles(propsStyle);

  return (
    <Button
      className={clsx(classes.customerButton, className)}
      {...other}
      onClick={!loading ? handleClick : undefined}
      disabled={loading}
      disableRipple={loading ? true : disableRipple}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Box display="flex" alignItems="center" opacity={loading ? 0.5 : 1}>
          {children || "OK"}
        </Box>
        {loading && isShowCircularProgress && (
          <CircularProgress
            size={24}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px",
              color: loadingColor,
            }}
          />
        )}
      </Box>
    </Button>
  );
};

ButtonComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  loading: PropTypes.bool,
  disableRipple: PropTypes.bool,
  isShowCircularProgress: PropTypes.bool,
};

export default memo(ButtonComponent);
