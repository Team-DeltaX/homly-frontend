import React from "react";
import { ThemeProvider, Snackbar, Alert } from "@mui/material";
import theme from "../../HomlyTheme";

export default function ErrorSnackbar({
  isOpen,
  type,
  message,
  setIsOpen
}) {
  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleAlertClose}
      >
        <Alert severity={type} onClose={handleAlertClose}>
          {message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
