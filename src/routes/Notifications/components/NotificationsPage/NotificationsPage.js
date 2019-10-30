import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styles from './NotificationsPage.styles';

const useStyles = makeStyles(styles);

function NotificationsPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2">Notifications page</Typography>
      <p>Welcome.</p>
    </div>
  );
}

export default NotificationsPage;
