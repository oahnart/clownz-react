import { memo } from "react";
import { useField } from "formik";
import { Checkbox, FormControlLabel } from "@material-ui/core";

const FieldCheckboxContent = (props) => {
  const { control } = props;
  const [field] = useField(props);
  return (
    <FormControlLabel
      {...field}
      {...props}
      control={control || <Checkbox color="primary" checked={field.value} />}
    />
  );
};

export default memo(FieldCheckboxContent);
