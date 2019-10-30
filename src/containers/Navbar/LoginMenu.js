import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { LOGIN_PATH, SIGNUP_PATH } from 'constants/paths';
import { makeStyles } from '@material-ui/core/styles';

import styles from './Navbar.styles';

const useStyles = makeStyles(styles);

function LoginMenu() {
  const classes = useStyles();
  return (
    <div>
      <Button
        className={classes.signIn}
        component={Link}
        to={LOGIN_PATH}
        data-test="sign-in"
      >
        Login
      </Button>
      <Button
        className={classes.signIn}
        component={Link}
        to={SIGNUP_PATH}
        data-test="sign-up"
      >
        Sign Up
      </Button>
    </div>
  );
}

export default LoginMenu;
