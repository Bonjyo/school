import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

function FloatingLabelInput({
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

FloatingLabelInput.propTypes = {
  formTextField: PropTypes.object,
};

export default FloatingLabelInput;
