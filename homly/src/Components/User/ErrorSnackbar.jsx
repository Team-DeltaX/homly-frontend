import React from "react";
import { ThemeProvider, Snackbar, Alert } from "@mui/material";
import theme from "../../HomlyTheme";

export default function ErrorSnackbar({
  isOpen,
  type,
  message,
  handleAlertClose,
}) {
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
