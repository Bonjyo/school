// import { AppsIcon, ListIcon } from '@material-ui/icons';
import {
  Container,
  CssBaseline,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppsIcon from '@material-ui/icons/Apps';
import ListIcon from '@material-ui/icons/List';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import LoadingSpinner from 'components/LoadingSpinner';
import { useNotifications } from 'modules/notification';
import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  isEmpty,
  isLoaded,
  useFirebase,
  useFirebaseConnect,
} from 'react-redux-firebase';
import { Route, Switch } from 'react-router-dom';
import ProjectRoute from 'routes/Projects/routes/Project';
import { renderChildren } from 'utils/router';

// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import ExpenseTile from '../ExpenseTile';
import NewExpenseDialog from '../NewExpenseDialog';
import NewExpenseTile from '../NewExpenseTile';
import styles from './FinancePage.styles';

const useStyles = makeStyles(styles);

function useProjects() {
  const { showSuccess, showError } = useNotifications();
  const firebase = useFirebase();
  // Get auth from redux state
  const auth = useSelector(state => state.firebase.auth);

  // Attach todos listener
  useFirebaseConnect(() => [
    {
      path: 'projects',
      queryParams: ['limitToLast=10'],
      // queryParams: ['orderByChild=createdBy', `equalTo=${auth.uid}`]
    },
  ]);

  // Get projects from redux state
  const projects = useSelector(state => state.firebase.ordered.projects);

  // New dialog
  const [newDialogOpen, changeDialogState] = useState(false);
  const toggleDialog = () => changeDialogState(!newDialogOpen);

  function addProject(newInstance) {
    if (!auth.uid) {
      return showError('You must be logged in to create a project');
    }
    return firebase
      .push('projects', {
        ...newInstance,
        createdBy: auth.uid,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      })
      .then(() => {
        toggleDialog();
        showSuccess('Project added successfully');
      })
      .catch(err => {
        console.error('Error:', err); // eslint-disable-line no-console
        showError(err.message || 'Could not add project');
        return Promise.reject(err);
      });
  }

  return { auth, projects, addProject, newDialogOpen, toggleDialog };
}

function ExpensePage({ match }) {
  const classes = useStyles();
  const {
    auth,
    projects,
    addProject,
    newDialogOpen,
    toggleDialog,
  } = useProjects();

  const [selectedTab, setSelectedTab] = React.useState(0);
  const [viewBy, setViewBy] = React.useState('left');

  const handleTabChange = (event, newTab) => {
    setSelectedTab(newTab);
  };

  const handleViewBy = (event, viewBy) => {
    setViewBy(viewBy);
  };

  // Show spinner while projects are loading
  if (!isLoaded(projects)) {
    return <LoadingSpinner />;
  }

  const tabs = (
    <Paper className={classes.root}>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="By year" />
        <Tab label="Expense list" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );

  const toggleSwitch = (
    <ToggleButtonGroup
      value={viewBy}
      exclusive
      onChange={handleViewBy}
      aria-label="View By"
    >
      <ToggleButton value="left" aria-label="Grid View">
        <AppsIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="List View">
        <ListIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );

  const asd = (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
        />
      </Container>
    </Fragment>
  );

  return (
    <Switch>
      {/* Child routes */}
      {renderChildren([ProjectRoute], match, { auth })}
      {/* Main Route */}
      <Route
        exact
        path={match.path}
        render={() => (
          <div className={classes.root}>
            {toggleSwitch}
            <NewExpenseDialog
              onSubmit={addProject}
              open={newDialogOpen}
              onRequestClose={toggleDialog}
            />
            <div className={classes.tiles}>
              <NewExpenseTile onClick={toggleDialog} />
              {!isEmpty(projects) &&
                projects.map((project, ind) => {
                  return (
                    <ExpenseTile
                      key={`Project-${project.key}-${ind}`}
                      name={project.value.name}
                      projectId={project.key}
                    />
                  );
                })}
            </div>
          </div>
        )}
      />
    </Switch>
  );
}

ExpensePage.propTypes = {
  match: PropTypes.object.isRequired, // from enhancer (withRouter)
};

export default ExpensePage;
