import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';

function FormTextField({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) {
  return (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );
}

FormTextField.propTypes = {
  formTextField: PropTypes.object,
};

export default FormTextField;
