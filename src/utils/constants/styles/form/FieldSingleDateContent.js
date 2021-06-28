import { memo } from "react";
import { useField, useFormikContext } from "formik";
import FormControlDateSinglePickerField from "@src/form/FormControlDateSinglePickerField";

const FieldSingleDateContent = (props) => {
  const [field, meta] = useField(props);
  const { submitCount } = useFormikContext();
  return (
    <FormControlDateSinglePickerField
      {...field}
      {...props}
      errorMessage={
        (meta.touched || submitCount > 0) && meta.error ? meta.error : undefined
      }
    />
  );
};

export default memo(FieldSingleDateContent);
