import { SIGNUP_FORM_NAME } from 'constants/formNames';
import PropTypes from 'prop-types';
import { compose, setPropTypes } from 'recompose';
import { reduxForm } from 'redux-form';

export default compose(
  // Set prop-types used in HOCs
  setPropTypes({
    onSubmit: PropTypes.func.isRequired, // called by handleSubmit
  }),
  // Add form capabilities (handleSubmit, pristine, submitting)
  reduxForm({
    form: SIGNUP_FORM_NAME,
  })
);
