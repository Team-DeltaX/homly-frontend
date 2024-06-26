import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField, Typography } from "@mui/material";

export default function ConfirmPopup({
  open,
  setOpen,
  title,
  text,
  controlfunction,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
          handleClose();
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}
        
        
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ textTransform: 'capitalize' }}>
          <Typography>Decline</Typography>
        </Button>
        <Button
          onClick={() => {
            
            controlfunction();
          }}
          sx={{ textTransform: 'capitalize' }}
        >
          <Typography>Confirm</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
