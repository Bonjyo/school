import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Badge from '@material-ui/core/Badge';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import { makeStyles } from '@material-ui/core/styles';
import {
  ACCOUNT_PATH,
  ALERTS_PATH,
  NOTIFICATIONS_PATH,
  PROFILE_PATH,
  FINANCE_PATH,
} from 'constants/paths';

const useStyles = makeStyles(() => ({
  buttonRoot: {
    color: 'white',
  },
}));

function SecureMenu() {
  const classes = useStyles();
  const history = useHistory();
  const firebase = useFirebase();

  function handleLogout() {
    return firebase.logout().then(() => {
      handleMenuClose();
      history.push('/');
    });
  }

  function goToAccount() {
    handleMenuClose();
    history.push(ACCOUNT_PATH);
  }

  function goToAlerts() {
    handleMenuClose();
    history.push(ALERTS_PATH);
  }

  function goToNotifications() {
    handleMenuClose();
    history.push(NOTIFICATIONS_PATH);
  }

  function goToProile() {
    handleMenuClose();
    history.push(PROFILE_PATH);
  }

  function goToFinance() {
    handleMenuClose();
    history.push(FINANCE_PATH);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={goToAccount}>Account</MenuItem>
      <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={goToFinance}>
        <IconButton aria-label="Manage your finances" color="inherit">
          <MonetizationOnIcon />
        </IconButton>
        <p>Finance</p>
      </MenuItem>
      <MenuItem onClick={goToAlerts}>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem onClick={goToNotifications}>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={goToProile}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <IconButton
          aria-label="logout"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <LockIcon />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Fragment>
      <div className={classes.grow} />
      <div className={classes.sectionDesktop}>
        <IconButton
          onClick={goToFinance}
          aria-label="Manage your finances"
          color="inherit"
        >
          <MonetizationOnIcon />
        </IconButton>
        <IconButton
          onClick={goToAlerts}
          aria-label="show 4 new mails"
          color="inherit"
        >
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          onClick={goToNotifications}
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={goToProile}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="lgout"
          aria-haspopup="true"
          onClick={handleLogout}
          color="inherit"
        >
          <LockIcon />
        </IconButton>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </div>
      {renderMenu}
      {renderMobileMenu}
    </Fragment>
  );
}

SecureMenu.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired, // from enhancer (withRouter)
  }),
  firebase: PropTypes.shape({
    logout: PropTypes.func.isRequired, // from enhancer (withFirebase)
  }),
};

export default SecureMenu;
