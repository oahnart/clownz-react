import PropTypes from "prop-types";
import { Slider, Tooltip } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/styles";

const SliderCustomer = withStyles({
  root: {
    color: "#2e8af1",
    height: 6,
    margin: "0 0 0 22px",
    width: "calc(100% - 22px)",
  },
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: "#0066da",
    marginTop: -6,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 6,
    borderRadius: 3,
  },
  rail: {
    height: 6,
    borderRadius: 3,
    color: "#eeeeee",
    boxShadow: "inset 0 0 2px 0 rgba(0, 0, 0, 0.15)",
  },
})(Slider);

const TooltipCustomer = withStyles({
  tooltip: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 41,
    height: 24,
    borderRadius: 4,
    backgroundColor: "#0066da",
    color: "#fdfdfd",
    fontSize: 12,
    "&:before": {
      top: "74%",
      left: "50%",
      border: "solid transparent",
      content: "''",
      height: 0,
      width: 0,
      position: "absolute",
      borderColor: "rgba(136, 183, 213, 0)",
      borderTopColor: "#0066da",
      borderWidth: 8,
      marginLeft: -8,
    },
  },
})(Tooltip);

function ValueLabelComponentDefault(props) {
  const { children, open, value } = props;
  return (
    <TooltipCustomer
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={`${value} đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    >
      {children}
    </TooltipCustomer>
  );
}

const RangeSlider = ({
  valueLabelDisplay = "auto",
  min = 0,
  max = 3000000,
  step = 500000,
  valueRange = [0, 2500000],
  handleChangeRange = () => {},
  ValueLabelComponent = ValueLabelComponentDefault,
  ariaLabelledby = "pretto slider",
}) => {
  return (
    <SliderCustomer
      valueLabelDisplay={valueLabelDisplay}
      min={min}
      max={max}
      step={step}
      value={valueRange}
      ValueLabelComponent={ValueLabelComponent}
      onChange={handleChangeRange}
      aria-labelledby={ariaLabelledby}
    />
  );
};

RangeSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  valueLabelDisplay: PropTypes.string,
  ariaLabelledby: PropTypes.string,
  ValueLabelComponent: PropTypes.any,
  valueRange: PropTypes.array,
  handleChangeRange: PropTypes.func,
};

export default RangeSlider;
