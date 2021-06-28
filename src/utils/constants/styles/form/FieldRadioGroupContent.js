import { Field } from "formik";
import PropTypes from "prop-types";
import {
  Box,
  Radio,
  Typography,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  labelRadio: {
    fontSize: 14,
    fontWeight: "normal",
    lineHeight: "normal",
    color: theme.palette.gray.grayDark1,
  },
}));

const FieldRadioGroupContent = ({
  titleField = "",
  listRadio = [],
  nameFiled = "radioGroup",
  styles = "undefined",
}) => {
  const classes = useStyles();
  return (
    <Field
      name={nameFiled}
      as={(propsField) => (
        <Box>
          {titleField && (
            <Typography
              gutterBottom
              variant="body2"
              component="span"
              className="header-text"
            >
              {titleField}
            </Typography>
          )}
          <RadioGroup {...propsField} className={`radio-group ${styles}`}>
            {listRadio.map((el) => (
              <FormControlLabel
                key={el.id}
                value={el.value}
                control={<Radio size="small" />}
                label={el.label}
                classes={{ label: classes.labelRadio }}
              />
            ))}
          </RadioGroup>
        </Box>
      )}
    />
  );
};

FieldRadioGroupContent.propTypes = {
  titleField: PropTypes.string,
  listRadio: PropTypes.array.isRequired,
  nameFiled: PropTypes.string.isRequired,
  styles: PropTypes.any,
};

export default FieldRadioGroupContent;
