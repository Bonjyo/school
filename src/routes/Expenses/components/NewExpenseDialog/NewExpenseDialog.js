import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import TextField from 'components/FormTextField';
import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';
import { required } from 'utils/form';

import styles from './NewExpenseDialog.styles';

const useStyles = makeStyles(styles);

function NewExpenseDialog({ handleSubmit, open, onRequestClose }) {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onRequestClose}>
      <DialogTitle id="new-expense-dialog-title">New Expense</DialogTitle>
      <form onSubmit={handleSubmit} className={classes.inputs}>
        <DialogContent>
          <Field
            name="name"
            component={TextField}
            label="Expense Name"
            validate={[required]}
          />
        </DialogContent>
        <DialogContent>
          <Field
            name="amount"
            component={TextField}
            label="Amount"
            validate={[required]}
          />
        </DialogContent>
        <DialogContent>
          <Field
            name="date"
            component={TextField}
            label="Date"
            validate={[required]}
          />
        </DialogContent>
        <DialogContent>
          <Field
            name="category"
            component={TextField}
            label="Category"
            validate={[required]}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onRequestClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

NewExpenseDialog.propTypes = {
  handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
  open: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default NewExpenseDialog;
