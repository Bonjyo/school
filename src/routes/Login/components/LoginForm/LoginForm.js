import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import { Field } from 'redux-form';
import TextField from 'components/FormTextField';
import Button from '@material-ui/core/Button';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from '@material-ui/core';

import { required, validateEmail } from 'utils/form';
// import styles from './LoginForm.styles';

// const useStyles = makeStyles(styles);

function LoginForm({
  pristine,
  submitting,
  handleSubmit,
  toggleLogin,
  fullScreen,
}) {
  // const classes = useStyles();

  return (
    <Dialog open onRequestClose={toggleLogin} fullScreen={fullScreen}>
      <DialogTitle>Subscribe</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occationally.
          </DialogContentText>
          <Field
            autoComplete="email"
            autoFocus
            component={TextField}
            fullWidth
            label="Email"
            margin="dense"
            name="email"
            type="email"
            validate={[required, validateEmail]}
          />
          <Field
            autoComplete="current-password"
            component={TextField}
            margin="dense"
            name="password"
            fullWidth
            label="Password"
            type="password"
            validate={required}
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            type="submit"
            variant="contained"
            disabled={pristine || submitting}
          >
            {submitting ? 'Loading' : 'Login'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

LoginForm.propTypes = {
  pristine: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  submitting: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm - calls onSubmit)
};

// export default LoginForm;
export default withMobileDialog()(LoginForm);
