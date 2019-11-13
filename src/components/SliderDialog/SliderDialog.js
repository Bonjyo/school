import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  withMobileDialog,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SliderDialog({
  children,
  dialogHeader,
  dialogOpen,
  dialogTitle,
  closeAction,
  closeLabel,
  primaryBtnAction,
  primaryBtnLabel,
}) {
  return (
    <Dialog
      open={dialogOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={closeAction}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      {dialogTitle && (
        <DialogTitle id="alert-dialog-slide-title">{dialogTitle}</DialogTitle>
      )}
      <DialogContent>
        {dialogHeader && (
          <DialogContentText id="alert-dialog-slide-description">
            {dialogHeader}
          </DialogContentText>
        )}
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={closeAction} color="secondary">
          {closeLabel || 'Cancel'}
        </Button>
        <Button onClick={primaryBtnAction} color="primary">
          {primaryBtnLabel || 'Ok'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

SliderDialog.propTypes = {
  children: PropTypes.object.isRequired,
  dialogHeader: PropTypes.string,
  dialogOpen: PropTypes.bool.isRequired,
  dialogTitle: PropTypes.string,
  closeAction: PropTypes.func.isRequired,
  closeLabel: PropTypes.string,
  primaryBtnAction: PropTypes.func.isRequired,
  primaryBtnLabel: PropTypes.string,
};

export default withMobileDialog()(SliderDialog);
