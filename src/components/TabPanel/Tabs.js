// import { AppsIcon, ListIcon } from '@material-ui/icons';
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TabPanel from 'components/TabPanel';
import PropTypes from 'prop-types';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import NewExpenseDialog from '../NewExpenseDialog';
import styles from './ExpensesPage.styles';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(styles);

const ExpensePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newTab) => {
    setSelectedTab(newTab);
  };

  const handleChangeTabIndex = index => {
    setSelectedTab(index);
  };

  // Show spinner while projects are loading
  //   if (!isLoaded(projects)) {
  //     return <LoadingSpinner />;
  //   }

  //   const tabs = (
  //       <Paper square>
  //         <Tabs
  //             value={selectedTab}
  //             indicatorColor="primary"
  //             textColor="primary"
  //             onChange={handleTabChange}
  //             aria-label="disabled tabs example"
  //         >
  //             <Tab label="List">
  //             </Tab>
  //             <Tab label="Graph">
  //             </Tab>
  //         </Tabs>
  //       </Paper>
  //   );

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="List" {...a11yProps(0)} />
          <Tab label="Grid" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={selectedTab}
        onChangeIndex={handleChangeTabIndex}
      >
        <TabPanel value={selectedTab} index={0} dir={theme.direction}>
          List
        </TabPanel>
        <TabPanel value={selectedTab} index={1} dir={theme.direction}>
          Grid
        </TabPanel>
      </SwipeableViews>
      {/* <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
        />
        <Paper className={classes.root}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="List">
            </Tab>
            <Tab label="Graph">
            </Tab>
          </Tabs>
        </Paper>
      </Container>
    </Fragment> */}
    </div>
  );
};

export default ExpensePage;
