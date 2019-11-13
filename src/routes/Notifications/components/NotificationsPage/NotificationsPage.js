import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styles from './NotificationsPage.styles';
import SimpleTable from './SimpleTable';
import DenseTable from './DenseTable';
import SortedTable from './SortedTable';
import CustomizedTables from './CustomizedTable';
import StickyHeadTable from './StickyHeadTable';
import MuiVirtualizedTable from './MuiVirtualizedTable';

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
