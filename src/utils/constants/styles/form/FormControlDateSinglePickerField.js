import clsx from "clsx";
import { memo } from "react";
import { FormControl, FormHelperText, InputLabel } from "@material-ui/core";
import PropTypes from "prop-types";

import SinglePicker from "@components/common/RangePicker/SinglePicker";
import { redMark, useStylesForm } from "./Form";
import { MIN_WIDTH_FORM } from "./utils";

const FormControlDateSinglePickerField = (props) => {
  const classes = useStylesForm();
  const {
    id,
    label,
    formControlStyle,
    styleLabel,
    inputStyle,
    errorMessage,
    optional,
    focused,
    value,
    fullWidth,
    helpText,
    date,
    _handleChangeDate,
    datePlaceholderText,
    styleRangePickerWrapper,
    ...rest
  } = props;

  return (
    <FormControl
      focused={focused}
      style={{ minWidth: MIN_WIDTH_FORM, ...formControlStyle }}
      error={focused ? false : !!errorMessage}
      fullWidth
    >
      {label && (
        <InputLabel
          shrink
          htmlFor={id}
          className={clsx(classes.label, styleLabel)}
        >
          {label}
          {!optional && <>&nbsp;{redMark}</>}
        </InputLabel>
      )}
      <SinglePicker
        date={date}
        onChange={_handleChangeDate}
        displayFormat="DD-MM-YYYY"
        styleRangePickerWrapper={styleRangePickerWrapper}
        placeholder={datePlaceholderText}
      />
      <FormHelperText
        id={id}
        style={{ minHeight: 20, color: !errorMessage ? "initial" : undefined }}
      >
        {errorMessage || helpText}
      </FormHelperText>
    </FormControl>
  );
};

FormControlDateSinglePickerField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.node,
  styleLabel: PropTypes.any,
  formControlStyle: PropTypes.any,
  inputStyle: PropTypes.any,
  errorMessage: PropTypes.string,
  optional: PropTypes.bool,
  focused: PropTypes.bool,
  helpText: PropTypes.string,
};

export default memo(FormControlDateSinglePickerField);
