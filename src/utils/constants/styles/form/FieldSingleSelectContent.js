import { memo } from "react";
import { useField, useFormikContext } from "formik";

import SingleSelect from "@src/form/SingleSelect";

const FieldSelectContent = (props) => {
  const [field, meta] = useField(props);
  const { submitCount } = useFormikContext();
  return (
    <SingleSelect
      {...field}
      {...props}
      errorMessage={
        (meta.touched || submitCount > 0) && meta.error ? meta.error : undefined
      }
    />
  );
};
export default memo(FieldSelectContent);
