import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

function CustomDialog({
  children,
  className,
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
      className={className}
      open={dialogOpen}
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

CustomDialog.propTypes = {
  children: PropTypes.object.isRequired,
  className: PropTypes.object,
  dialogHeader: PropTypes.string,
  dialogOpen: PropTypes.bool.isRequired,
  dialogTitle: PropTypes.string,
  closeAction: PropTypes.func.isRequired,
  closeLabel: PropTypes.string,
  primaryBtnAction: PropTypes.func.isRequired,
  primaryBtnLabel: PropTypes.string,
};

export default withMobileDialog()(CustomDialog);
