import clsx from "clsx";
import { memo } from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import { useRef, useState } from "react";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  imageWrapper: {
    position: "relative",
  },
  placeholder: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    animation: `$loadingAnimation 1s infinite`,
  },
  imgContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    objectFit: "cover",
  },
  "@keyframes loadingAnimation": {
    "0%": {
      backgroundColor: "#fff",
    },
    "50%": {
      backgroundColor: "#ccc",
    },
    "100%": {
      backgroundColor: "#fff",
    },
  },
}));

const ImageComponent = (props) => {
  const { className, ...other } = props;
  const refPlaceholder = useRef();
  const [srcImage, setSrcImage] = useState(props.srcImage || "");
  const classes = useStyles();
  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };
  const showErrorImage = () => {
    refPlaceholder.current.remove();
    setSrcImage(
      "https://test.mytourcdn.com/120x90,q90/themes/images/pc-listing-default.png"
    );
  };
  return (
    <div className={clsx(classes.imageWrapper, className)}>
      <div className={classes.placeholder} ref={refPlaceholder} />
      <LazyLoad>
        <img
          src={srcImage}
          className={clsx(classes.imgContainer, className)}
          onLoad={removePlaceholder}
          onError={showErrorImage}
          {...other}
        />
      </LazyLoad>
    </div>
  );
};

ImageComponent.propTypes = {
  srcImage: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default memo(ImageComponent);
