import PropTypes from "prop-types";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIconComponent = (props) => {
  const { children, ...other } = props;

  return <SvgIcon {...other}>{children}</SvgIcon>;
};

SvgIconComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SvgIconComponent;
