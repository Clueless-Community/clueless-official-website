import React, { useMemo, useCallback } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type CloseReason = 'backdropClick' | 'escapeKeyDown' | 'agree' | 'disAgree';
interface DialogData {
  title: string;
  subTitle: string;
}

const useConfirmationDialog = (
  { title, subTitle }: DialogData,
  onAgree: () => any,
  onDisAgree?: (reason?: string) => any
) => {
  const [open, setOpen] = React.useState(false);

  const openDialog = useCallback(() => setOpen(true), []);
  const handleClose = useCallback((_: any, reason?: CloseReason) => {
    setOpen(false);
    reason === 'agree' ? onAgree() : onDisAgree?.(reason);
  }, []);

  const dialog = useMemo(
    () => (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {subTitle}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            type="button"
            className="btn-muted text-xs sm:text-lg "
            onClick={(ev) => handleClose(ev, 'disAgree')}
            autoFocus
          >
            Cancel
          </button>
          <button
            onClick={(ev) => handleClose(ev, 'agree')}
            type="button"
            className="btn-blue text-xs sm:text-lg "
          >
            Ok
          </button>
        </DialogActions>
      </Dialog>
    ),
    [open]
  );

  return { dialog, openDialog };
};

export default useConfirmationDialog;
