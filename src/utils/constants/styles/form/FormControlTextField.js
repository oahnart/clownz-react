import clsx from "clsx";
import { memo } from "react";
import { FormControl, FormHelperText, InputLabel } from "@material-ui/core";
import PropTypes from "prop-types";

import { BootstrapInput, redMark, useStylesForm } from "./Form";
import { MIN_WIDTH_FORM } from "./utils";

const FormControlTextField = (props) => {
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
    helperTextStyle,
    isView,
    hideHelperText,
    ...rest
  } = props;

  return (
    <FormControl
      focused={focused}
      // className={classes.margin}
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
      <BootstrapInput
        id={id}
        value={value || ""}
        {...rest}
        error={focused ? false : !!errorMessage}
        classes={{ root: isView && classes.viewInput }}
        style={{ marginTop: label ? 20 : 0, ...inputStyle }}
      />
      {!hideHelperText && (
        <FormHelperText
          id={id}
          style={{
            minHeight: 20,
            color: !errorMessage ? "initial" : undefined,
            ...helperTextStyle,
          }}
        >
          {errorMessage || helpText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

FormControlTextField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.node,
  styleLabel: PropTypes.any,
  formControlStyle: PropTypes.any,
  inputStyle: PropTypes.any,
  helperTextStyle: PropTypes.any,
  errorMessage: PropTypes.string,
  optional: PropTypes.bool,
  focused: PropTypes.bool,
  helpText: PropTypes.string,
};

export default memo(FormControlTextField);
