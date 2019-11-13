import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

function FormSelectField({
  label,
  input,
  meta: { touched, error },
  children,
  ...custom
}) {
  return (
    <FormControl error={touched && error}>
      <InputLabel htmlFor="card_used">{label}</InputLabel>
      <Select
        native
        {...input}
        {...custom}
        inputProps={{
          name: 'card_used',
          id: 'card_used',
        }}
      >
        {children}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  );
}

FormSelectField.propTypes = {
  formTextField: PropTypes.object,
};

export default FormSelectField;
