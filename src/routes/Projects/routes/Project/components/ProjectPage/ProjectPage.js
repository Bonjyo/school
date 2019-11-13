import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LoadingSpinner from 'components/LoadingSpinner';
import React from 'react';
import { useSelector } from 'react-redux';
import { isLoaded, useFirebaseConnect } from 'react-redux-firebase';
import { useParams } from 'react-router-dom';

import styles from './ProjectPage.styles';

const useStyles = makeStyles(styles);

function ProjectPage() {
  const { projectId } = useParams();
  const classes = useStyles();

  // Create listener for projects
  useFirebaseConnect(() => [{ path: `projects/${projectId}` }]);

  // Get projects from redux state
  const project = useSelector(({ firebase: { data } }) => {
    return data.projects && data.projects[projectId];
  });

  // Show loading spinner while project is loading
  if (!isLoaded(project)) {
    return <LoadingSpinner />;
  }

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} component="h2">
            {project.name || 'Project'}
          </Typography>
          <Typography className={classes.subtitle}>{projectId}</Typography>
          <div style={{ marginTop: '10rem' }}>
            <pre>{JSON.stringify(project, null, 2)}</pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProjectPage;
