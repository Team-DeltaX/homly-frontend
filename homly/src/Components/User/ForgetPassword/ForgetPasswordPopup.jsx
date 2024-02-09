import React, { useState } from "react";
import { ThemeProvider, Dialog, DialogTitle, Box } from "@mui/material";
import theme from "../../../HomlyTheme";

import EnterDetailCom from "./EnterDetailCom";
import EnterOtpCom from "./EnterOtpCom";
import ChangePasswordCom from "./ChangePasswordCom";
import ErrorSnackbar from "../ErrorSnackbar";

export default function ForgetPasswordPopup({ open, setOpen }) {
  const [selectedComponent, setSelectedComponent] = useState(0);

  const [value, setValue] = useState({
    serviceNo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErrorStatus({ ...errorStatus, isOpen: false });
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedComponent(0);
    setValue({
      serviceNo: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  const middleComponent = [
    <EnterDetailCom
      handleClose={handleClose}
      setSelectedComponent={setSelectedComponent}
      errorStatus={errorStatus}
      setErrorStatus={setErrorStatus}
      value={value}
      setValue={setValue}
    />,
    <EnterOtpCom
      handleClose={handleClose}
      setSelectedComponent={setSelectedComponent}
      errorStatus={errorStatus}
      setErrorStatus={setErrorStatus}
      value={value}
    />,
    <ChangePasswordCom
      handleClose={handleClose}
      setSelectedComponent={setSelectedComponent}
      errorStatus={errorStatus}
      setErrorStatus={setErrorStatus}
      value={value}
      setValue={setValue}
      setOpen={setOpen}
    />,
  ];

  return (
    <ThemeProvider theme={theme}>
      <ErrorSnackbar
        isOpen={errorStatus.isOpen}
        type={errorStatus.type}
        message={errorStatus.message}
        handleAlertClose={handleAlertClose}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reset Password</DialogTitle>
        <Box sx={{ width: { xs: "300px", sm: "500px" } }}>
          {middleComponent[selectedComponent]}
        </Box>
      </Dialog>
    </ThemeProvider>
  );
}
