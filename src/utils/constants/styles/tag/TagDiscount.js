import PropTypes from "prop-types";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  saleHoHotel: (props) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 16,
    width: props.widthTag,
    height: props.heightTag,
    backgroundColor: props.backgroundColorTag,
    color: "#fdfdfd",
    fontWeight: 500,
    fontSize: props.fontSizeText,
    position: "relative",
    "&:before": {
      left: "100%",
      top: "50%",
      border: "solid transparent",
      content: "''",
      height: 0,
      width: 0,
      position: "absolute",
      pointerEvents: "none",
      borderColor: "rgba(194, 225, 245, 0)",
      borderLeftColor: props.backgroundColorTag,
      borderWidth: props.heightTag / 2,
      marginTop: -(props.heightTag / 2),
    },
  }),
  dot: (props) => ({
    width: props.sizeDot,
    height: props.sizeDot,
    right: 0,
    borderRadius: props.sizeDot,
    position: "absolute",
    backgroundColor: "#fff",
  }),
}));
const TagDiscount = ({
  percentDiscount = 0,
  widthTag = 80,
  heightTag = 32,
  sizeDot = 5,
  fontSizeText = 18,
  backgroundColorTag = "#d70f0f",
}) => {
  const propsStyle = {
    widthTag,
    heightTag,
    sizeDot,
    fontSizeText,
    backgroundColorTag,
  };
  const classes = useStyles(propsStyle);
  return (
    <div className={classes.saleHoHotel}>
      <span>{`-${percentDiscount}%`}</span>
      <span className={classes.dot}></span>
    </div>
  );
};

TagDiscount.propTypes = {
  percentDiscount: PropTypes.number,
  widthTag: PropTypes.number,
  heightTag: PropTypes.number,
  sizeDot: PropTypes.number,
  fontSizeText: PropTypes.number,
  backgroundColorTag: PropTypes.string,
};

export default TagDiscount;
