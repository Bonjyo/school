import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { ACCOUNT_PATH } from 'constants/paths';
import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  buttonRoot: {
    color: 'white',
  },
}));

function AccountMenu() {
  const classes = useStyles();
  const [anchorEl, setMenu] = useState(null);
  const history = useHistory();
  const firebase = useFirebase();

  function closeAccountMenu(e) {
    setMenu(null);
  }
  function handleMenu(e) {
    setMenu(e.target);
  }
  function handleLogout() {
    return firebase.logout().then(() => {
      closeAccountMenu();
      history.push('/');
    });
  }
  function goToAccount() {
    closeAccountMenu();
    history.push(ACCOUNT_PATH);
  }

  return (
    <Fragment>
      <IconButton
        aria-owns={anchorEl ? 'menu-appbar' : null}
        aria-haspopup="true"
        onClick={handleMenu}
        classes={{ root: classes.buttonRoot }}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorEl)}
        onClose={closeAccountMenu}
      >
        <MenuItem onClick={goToAccount}>Account</MenuItem>
        <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
      </Menu>
    </Fragment>
  );
}

AccountMenu.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired, // from enhancer (withRouter)
  }),
  firebase: PropTypes.shape({
    logout: PropTypes.func.isRequired, // from enhancer (withFirebase)
  }),
};

export default AccountMenu;
