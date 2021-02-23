import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  btnArrow: {
    zIndex: 100,
    position: "absolute",
    display: "flex !important",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "rgba(22, 22, 29, 0.1)",
    },
    "&:before": {
      fontSize: 35,
    },
    height: "100%",
    backgroundColor: "rgba(22, 22, 29, 0.1)",
    width: 75,
    [theme.breakpoints.down("md")]: {
      width: 60,
    },
    [theme.breakpoints.down("xs")]: {
      width: 40,
    },
  },
  btnNext: {
    right: 0,
  },
  btnPreview: {
    left: 0,
  },
  slickDot: {
    bottom: "35px !important",
    "& li": {
      "& button": {
        "&:before": {
          fontSize: 8,
        },
      },
    },
  },
  customerDot: {
    width: 10,
    height: 10,
    border: "solid 1px #2e8af1",
    backgroundColor: "#fdfdfd",
    borderRadius: 10,
  },
}));

function SampleNextArrow(props) {
  const { className, style, onClick, btnArrowStyle, btnNextStyle } = props;
  return (
    <div
      className={`${className} ${btnArrowStyle} ${btnNextStyle} ${
        useStyles().btnArrow
      } ${useStyles().btnNext}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick, btnPreviewStyle, btnArrowStyle } = props;
  return (
    <div
      className={`${className} ${btnArrowStyle} ${btnPreviewStyle} ${
        useStyles().btnArrow
      } ${useStyles().btnPreview}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SampleAppendDots(props) {
  const { className, style, dots, slickDotStyle } = props;
  return (
    <ul
      style={{ ...style, margin: "0px" }}
      className={`${className} ${slickDotStyle} ${useStyles().slickDot}`}
    >
      {" "}
      {dots}{" "}
    </ul>
  );
}

function SampleCustomPaging(props) {
  return (
    <div className={`${useStyles().customerDot}`} onClick={props.onClick}></div>
  );
}

const SlideShow = (props) => {
  const {
    children = null,
    settingProps = {},
    btnArrowStyle = null,
    btnNextStyle = null,
    btnPreviewStyle = null,
    slickDotStyle = null,
    ...other
  } = props;
  const settingsDefault = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow
        btnArrowStyle={btnArrowStyle}
        btnNextStyle={btnNextStyle}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        btnArrowStyle={btnArrowStyle}
        btnPreviewStyle={btnPreviewStyle}
      />
    ),
    appendDots: (dots) => (
      <SampleAppendDots dots={dots} slickDotStyle={slickDotStyle} />
    ),
    customPaging: () => <SampleCustomPaging />,
  };

  const settings = { ...settingsDefault, ...settingProps };
  return (
    <Slider {...other} {...settings}>
      {children}
    </Slider>
  );
};

SlideShow.propTypes = {
  children: PropTypes.node.isRequired,
  settingProps: PropTypes.object.isRequired,
  btnArrowStyle: PropTypes.any,
  btnNextStyle: PropTypes.any,
  btnPreviewStyle: PropTypes.any,
  slickDotStyle: PropTypes.any,
};

export default SlideShow;
