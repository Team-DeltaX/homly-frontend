import React from "react";
import { Snackbar, Typography } from "@mui/material";

const NotificationSnackBar = ({ open, setOpen, message }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      message={message}
    >
     
    </Snackbar>
  );
};

export default NotificationSnackBar;
