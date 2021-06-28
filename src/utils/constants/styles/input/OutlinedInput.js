import MuiOutlinedInput from "@material-ui/core/OutlinedInput";
import { withStyles } from "@material-ui/core/styles";

const OutlinedInput = withStyles((theme) => ({
  root: {
    height: 48,
    width: "100%",
    margin: "6px 0",
    "&:hover": {
      borderColor: theme.palette.blue.blueLight6,
    },
  },
  notchedOutline: {
    "&:hover": {
      borderColor: "#bfddfe !important",
    },
    "&:focus": {
      borderColor: "#bfddfe !important",
    },
  },
  focused: {
    borderColor: "#bfddfe !important",
  },
}))(MuiOutlinedInput);

export default OutlinedInput;
