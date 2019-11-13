import { Button, makeStyles, Typography } from '@material-ui/core';
import CustomDialog from 'components/CustomDialog';
import Media from 'components/Media';
import SliderDialog from 'components/SliderDialog';
import React from 'react';

import ProfileForm from './ProfileForm';
import styles from './ProfilePage.styles';

const useStyles = makeStyles(styles);

function ProfilePage() {
  const classes = useStyles();
  const [sliderDialogOpen, setSliderDialogOpen] = React.useState(false);
  const [formDialogOpen, setFormDialogOpen] = React.useState(false);

  const handleSliderDialogOpen = () => {
    setSliderDialogOpen(true);
  };

  const handleSliderDialogClose = () => {
    setSliderDialogOpen(false);
  };

  const handleFormDialogOpen = () => {
    setFormDialogOpen(true);
  };

  const handleFormDialogClose = () => {
    setFormDialogOpen(false);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2">Profile page</Typography>
      <p>Welcome.</p>
      <Button color="primary" onClick={handleFormDialogOpen}>
        Open custom dialog
      </Button>
      <CustomDialog
        className={classes.formDialog}
        dialogHeader="Some form"
        dialogOpen={formDialogOpen}
        dialogTitle="Login"
        closeAction={handleFormDialogClose}
        closeLabel="Close"
        primaryBtnAction={() => console.log('Logged in!')}
        primaryBtnLabel="Login"
      >
        <ProfileForm />
      </CustomDialog>

      <Button color="primary" onClick={handleSliderDialogOpen}>
        Open slider dialog
      </Button>
      <SliderDialog
        dialogHeader="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
        dialogOpen={sliderDialogOpen}
        dialogTitle="Header Label"
        closeAction={handleSliderDialogClose}
        closeLabel="Close"
        primaryBtnAction={() => console.log('Clicked ok')}
        primaryBtnLabel="Ok"
      >
        This is a slider dialog
      </SliderDialog>
      <div>
        <Media loading />
        <Media />
      </div>
    </div>
  );
}

export default ProfilePage;
