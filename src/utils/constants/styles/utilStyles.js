import { makeStyles } from "@material-ui/styles";
const utilStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1431,
    margin: "0 auto",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      margin: 0,
      padding: "0 25px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: 0,
      padding: "0 25px",
      // fontSize: 13,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: 0,
      padding: "0 25px",
    },
  },
  mgT5: {
    marginTop: 5,
  },
}));

export default utilStyles;
