import { makeStyles } from '@material-ui/core/styles';
import Navbar from 'containers/Navbar';
import { Notifications } from 'modules/notification';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './CoreLayout.styles';

const useStyles = makeStyles(styles);

function CoreLayout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.children}>{children}</div>
      <Notifications />
    </div>
  );
}

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CoreLayout;
