import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import CustomizedTables from './CustomizedTable';
import DenseTable from './DenseTable';
import MuiVirtualizedTable from './MuiVirtualizedTable';
import styles from './NotificationsPage.styles';
import SimpleTable from './SimpleTable';
import SortedTable from './SortedTable';
import StickyHeadTable from './StickyHeadTable';

const useStyles = makeStyles(styles);

function NotificationsPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2">Notifications page</Typography>
      <p>Welcome.</p>
      <SimpleTable />
      <DenseTable />
      <SortedTable />
      <CustomizedTables />
      <StickyHeadTable />
      <MuiVirtualizedTable />
    </div>
  );
}

export default NotificationsPage;
