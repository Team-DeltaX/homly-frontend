import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function ViewComplaintPopup( props ) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        View Complain
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            // Handle form submission if needed
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          View Complaint
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <TextField
            autoFocus
            disabled
            value={props.complain.ComplaintID}
            required
            margin="dense"
            id="complainID"
            name="complainID"
            label="Complain ID"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            disabled
            value={props.complain.ReservationNo}
            required
            margin="dense"
            id="reservationno"
            name="reservationno"
            label="Reservation No"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            disabled
            value={props.complain.ReservationNo}
            required
            margin="dense"
            id="serviceNo"
            name="serviceNo"
            label="Employee Service No"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Reason"
            disabled
            required
            multiline
            fullWidth
            value={props.complain.Reason}
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Complain Status"
            disabled
            required
            multiline
            fullWidth
            value={props.complain.Reason}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
