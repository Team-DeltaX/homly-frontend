import React from "react";
import { ThemeProvider, Snackbar, Alert } from "@mui/material";
import theme from "../../HomlyTheme";

export default function ErrorSnackbar({ isOpen, type, message, setIsOpen }) {
  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsOpen(false);
  };
  const vertical = "top";
  const horizontal = "center";
  return (
    <ThemeProvider theme={theme}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={isOpen}
        autoHideDuration={5000}
        onClose={handleAlertClose}
      >
        <Alert severity={type} variant="filled" onClose={handleAlertClose}>
          {message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
