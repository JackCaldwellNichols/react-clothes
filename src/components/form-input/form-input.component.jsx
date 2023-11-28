/* eslint-disable react/prop-types */

import { FormInputLabel, Group, Input } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
      <Input {...otherProps} className="form-input" />
    </Group>
  );
};

export default FormInput;
