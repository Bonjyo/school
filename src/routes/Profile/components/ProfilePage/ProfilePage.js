import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styles from './ProfilePage.styles';

const useStyles = makeStyles(styles);

function ProfilePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2">Profile page</Typography>
      <p>Welcome.</p>
    </div>
  );
}

export default ProfilePage;
