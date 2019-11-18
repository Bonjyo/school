import DateFnsUtils from '@date-io/date-fns';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddBoxOutlined from '@material-ui/icons/AddBoxOutlined';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useNotifications } from 'modules/notification';
// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  isEmpty,
  isLoaded,
  useFirebase,
  useFirebaseConnect,
} from 'react-redux-firebase';

// import { required } from 'utils/form';
import styles from './NewExpenseForm.styles';

const useStyles = makeStyles(styles);

function NewExpenseForm() {
  const classes = useStyles();
  const [formVisible, setFormVisible] = useState(false);
  const [category, setCategory] = useState([]);
  const [transactionDate, setTransactionDate] = useState(new Date());
  const [postingDate, setPostingDate] = useState(new Date());
  const [cardUsed, setCardUsed] = useState([]);
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');

  const { showSuccess, showError } = useNotifications();
  const firebase = useFirebase();
  // Get auth from redux state
  const auth = useSelector(state => state.firebase.auth);

  // Attach expenses listener
  useFirebaseConnect(() => [
    {
      path: 'expenses',
      queryParams: ['limitToLast=10'],
      // queryParams: ['orderByChild=createdBy', `equalTo=${auth.uid}`]
    },
  ]);

  const onSubmit = () => {
    if (!auth.uid) {
      return showError('You must be logged in to create a project');
    }
    const newInstance = {
      category,
      transactionDate,
      postingDate,
      cardUsed,
      amount,
      description,
    };
    return firebase
      .push('expenses', {
        ...newInstance,
        createdBy: auth.uid,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      })
      .then(() => {
        setFormVisible(!formVisible);
        showSuccess('Expense added successfully');
      })
      .catch(err => {
        console.error('Error:', err); // eslint-disable-line no-console
        showError(err.message || 'Could not add expense');
        return Promise.reject(err);
      });
    console.log(newInstance);
  };
  const onRequestClose = () => setFormVisible(!formVisible);
  return (
    <>
      <Fab
        aria-label="like"
        className={classes.fab}
        onClick={() => setFormVisible(!formVisible)}
        variant="extended"
      >
        <AddBoxOutlined className={classes.extendedIcon} />
        New Expenses
      </Fab>
      <Dialog open={formVisible} onClose={onRequestClose}>
        <DialogTitle id="new-expense-dialog-title">New Expense</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  disableToolbar
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="transaction_date"
                  label="Transaction Date"
                  value={transactionDate}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                  onChange={setTransactionDate}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  disableToolbar
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="posting_date"
                  label="Posting Date"
                  helperText="Not mandatory"
                  value={postingDate}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                  onChange={setPostingDate}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="card_used">Card Used</InputLabel>
                <Select
                  autoWidth
                  multiple
                  native
                  value={cardUsed}
                  onChange={event => setCardUsed(event.target.value)}
                  inputProps={{
                    name: 'card_used',
                    id: 'card_used',
                  }}
                >
                  <option value="" />
                  <option value={'bofa'}>BofA</option>
                  <option value={'chess'}>Chess</option>
                  <option value={'amex'}>Amex Blue</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="category">Category</InputLabel>
                <Select
                  autoWidth
                  multiple
                  native
                  value={category}
                  onChange={event => setCategory(event.target.value)}
                  inputProps={{
                    name: 'category',
                    id: 'category',
                  }}
                >
                  <option value="" />
                  <option value={'shopping'}>Shopping</option>
                  <option value={'transportation'}>Transportation</option>
                  <option value={'eating_out'}>Eating out</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="amount"
                label="Amount"
                defaultValue={0}
                className={classes.textField}
                helperText="Some important text"
                margin="normal"
                fullWidth
                onChange={event => setAmount(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="description"
                label="Description"
                className={classes.textField}
                helperText="Some important text"
                margin="normal"
                fullWidth
                multiline
                rowsMax="4"
                onChange={event => setDescription(event.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onRequestClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={onSubmit} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

NewExpenseForm.propTypes = {
  // handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
  // open: PropTypes.bool.isRequired,
  // onRequestClose: PropTypes.func.isRequired,
};

export default NewExpenseForm;
