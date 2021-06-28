import PropTypes from "prop-types";
import Switch from "@material-ui/core/Switch";
import withStyles from "@material-ui/core/styles/withStyles";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 40,
    height: 18,
    padding: 0,
    display: "flex",
    backgroundColor: "#fdfdfd",
  },
  switchBase: {
    padding: 2,
    color: "#fff",
    "&$checked": {
      transform: "translateX(22px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: "#00adef",
        borderColor: "#00adef",
      },
    },
  },
  thumb: {
    width: 15,
    height: 15,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 18 / 2,
    opacity: 1,
    backgroundColor: theme.palette.gray.grayLight15,
  },
  checked: {},
}))(Switch);

const AntSwitchComponent = ({
  checkedC = false,
  handleChange = () => {},
  ...rest
}) => {
  return (
    <AntSwitch
      checked={checkedC}
      onChange={handleChange}
      name="checkedC"
      {...rest}
    />
  );
};

AntSwitchComponent.propTypes = {
  checkedC: PropTypes.bool,
  handleChange: PropTypes.func,
};

export default AntSwitchComponent;
