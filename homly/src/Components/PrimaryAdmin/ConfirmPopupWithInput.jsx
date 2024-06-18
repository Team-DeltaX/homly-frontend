import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, TextField, Typography } from "@mui/material";

export default function ConfirmPopupWithInput({
  open,
  setOpen,
  title,
  text,
  controlfunction,
  rejectreason,
  setRejectreason,
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
        <DialogContentText>
          <Box>
            <Box sx={{ margin: "10px" }}>{text}</Box>
            <TextField
              id="outlined-basic"
              label="Please Add Rejecting Reason before confirm"
              fullWidth
              onChange={(e)=>{
                setRejectreason(e.target.value)

              }}    
            />
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ textTransform: "capitalize" }} >
          <Typography>Decline</Typography>
        </Button>
        <Button
        
          onClick={() => {
            controlfunction();
          }}
          sx={{ textTransform: "capitalize" }}
          //reason should greater than 5 characters
          disabled={(rejectreason.length<5)||(rejectreason.trim().length===0)}
          
        >
            
          <Typography>Confirm</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
