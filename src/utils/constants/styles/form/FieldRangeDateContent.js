import { memo } from "react";
import { useField, useFormikContext } from "formik";
import FormControlDateRangePickerField from "@src/form/FormControlDateRangePickerField";

const FieldRangeDateContent = (props) => {
  const [field, meta] = useField(props);
  const { submitCount } = useFormikContext();
  return (
    <FormControlDateRangePickerField
      {...field}
      {...props}
      errorMessage={
        (meta.touched || submitCount > 0) && meta.error ? meta.error : undefined
      }
    />
  );
};

export default memo(FieldRangeDateContent);
