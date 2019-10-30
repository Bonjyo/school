import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { LIST_PATH } from 'constants/paths';
import SecureMenu from './SecureMenu';
import DrawerMenu from './DrawerMenu';
import LoginMenu from './LoginMenu';
import styles from './Navbar.styles';

const useStyles = makeStyles(styles);

function Navbar() {
  const classes = useStyles();

  // Get auth from redux state
  const auth = useSelector(state => state.firebase.auth);
  const authExists = isLoaded(auth) && !isEmpty(auth);

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          {authExists && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <DrawerMenu />
            </IconButton>
          )}
          <Typography
            color="inherit"
            variant="h6"
            component={Link}
            to={authExists ? LIST_PATH : '/'}
            className={classes.brand}
            data-test="brand"
          >
            material example
          </Typography>
          <div className={classes.flex} />
          {authExists ? <SecureMenu /> : <LoginMenu />}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
