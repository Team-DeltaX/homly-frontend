import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

export default function UserInterestedPopup({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} keepMounted onClose={handleClose}>
      <DialogTitle>Choose Your Interest</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Hello there! Let's customize your experience. Pick your top 3
          interests in order
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>close</Button>
        <Button onClick={handleClose}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
}
