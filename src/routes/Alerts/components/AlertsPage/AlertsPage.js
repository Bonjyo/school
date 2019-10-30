import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styles from './AlertsPage.styles';

const useStyles = makeStyles(styles);

function AlertsPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2">Alerts page</Typography>
      <p>Welcome.</p>
    </div>
  );
}

export default AlertsPage;