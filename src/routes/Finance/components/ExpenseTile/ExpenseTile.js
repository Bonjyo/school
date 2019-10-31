import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { useFirebase } from 'react-redux-firebase';
import { LIST_PATH } from 'constants/paths';
import styles from './ExpenseTile.styles';
import useNotifications from 'modules/notification/components/useNotifications';

const useStyles = makeStyles(styles);

function ExpenseTile({ name, expenseId, showDelete }) {
  const classes = useStyles();
  const history = useHistory();
  const firebase = useFirebase();
  const { showError, showSuccess } = useNotifications();

  function goToExpense() {
    return history.push(`${LIST_PATH}/${expenseId}`);
  }

  function deleteExpense() {
    return firebase
      .remove(`expenses/${expenseId}`)
      .then(() => showSuccess('Expense deleted successfully'))
      .catch(err => {
        console.error('Error:', err); // eslint-disable-line no-console
        showError(err.message || 'Could not delete expense');
        return Promise.reject(err);
      });
  }

  return (
    <Paper className={classes.root}>
      <div className={classes.top}>
        <span className={classes.name} onClick={goToExpense}>
          {name || 'No Name'}
        </span>
        {showDelete ? (
          <Tooltip title="delete">
            <IconButton onClick={deleteExpense}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : null}
      </div>
    </Paper>
  );
}

ExpenseTile.propTypes = {
  name: PropTypes.string,
};

ExpenseTile.defaultProps = {
  showDelete: true,
};

export default ExpenseTile;
