import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Field } from 'redux-form';
import TextField from 'components/FormTextField';
import SelectField from 'components/FormSelectField';
import { required } from 'utils/form';
import DateUtil from 'utils/DateUtil';
import styles from './NewExpenseDialog.styles';

const useStyles = makeStyles(styles);

function NewExpenseDialog({
  handleSubmit,
  pristine,
  reset,
  submitting,
  open,
  onRequestClose,
}) {
  const classes = useStyles();
  const today = new DateUtil(new Date());
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth={true}
      maxWidth="sm"
      open={open}
      onClose={onRequestClose}
    >
      <DialogTitle id="new-expense-dialog-title">New Expense</DialogTitle>
      <form onSubmit={handleSubmit} className={classes.inputs}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Field
                name="transaction_date"
                type="date"
                component={TextField}
                label="Transaction Date"
                validate={[required]}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                name="posting_date"
                type="date"
                defaultValue={new Date()}
                component={TextField}
                label="Posting Date"
                validate={[required]}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                classes={classes}
                name="card_used"
                component={SelectField}
                label="Card Used"
                validate={[required]}
                autoWidth
                multiple
                input={<Input />}
                renderValue={selected => selected.join(', ')}
              >
                <option value="" />
                <option value={'bofa'}>BofA</option>
                <option value={'chess'}>Chess</option>
                <option value={'amex'}>Amex Blue</option>
              </Field>
            </Grid>
            <Grid item xs={6}>
              <Field
                classes={classes}
                name="category"
                component={SelectField}
                label="Category of expense"
                validate={[required]}
                autoWidth
                style={{ width: '95%' }}
              >
                <option value="" />
                <option value={'bofa'}>Shopping</option>
                <option value={'chess'}>Transportation</option>
                <option value={'amex'}>Eating out</option>
              </Field>
            </Grid>
            <Grid item xs={6}>
              <Field
                name="amount"
                component={TextField}
                label="Amount"
                validate={[required]}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="description"
                component={TextField}
                label="Description"
                validate={[required]}
                multiline
                rowsMax="4"
                fullWidth
                margin="normal"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onRequestClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Ok
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
