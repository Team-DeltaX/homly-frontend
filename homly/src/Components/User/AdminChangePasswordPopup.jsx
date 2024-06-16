import React, { useEffect, useState } from "react";
import {
  ThemeProvider,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  Dialog,
  Box,
  Stack,
} from "@mui/material";
import theme from "../../HomlyTheme";
import InputPassword from "./TextField/InputPassword";
import PasswordStrength from "./PasswordStrength";
import AxiosClient from "../../services/AxiosClient";

export default function AdminChangePasswordPopup({
  open,
  setOpen,
  adminId,
  errorStatus,
  setErrorStatus,
}) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (
      !errorConfirmPassword &&
      passwordStrength > 1 &&
      confirmPassword.length > 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [errorConfirmPassword, passwordStrength, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorConfirmPassword && passwordStrength > 1) {
      const formData = { adminId: adminId, password: password };
      AxiosClient.put("/admin", formData).then((res) => {
        if (res.data.success) {
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "success",
            message: res.data.message,
          });
          setOpen(false);
        } else {
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "error",
            message: res.data.message,
          });
        }
      });
      setOpen(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Change Password</DialogTitle>
          <DialogContent sx={{ height: "160px", overflowY: "unset" }}>
            <DialogContentText sx={{ marginBottom: "10px" }}>
              For your account's security, it is mandatory to change your
              password. Please add new password
            </DialogContentText>
            <Stack direction="column">
              <InputPassword
                lable={"Password"}
                helperText={""}
                error={false}
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                isCheck={true}
                setErrorConfirmPassword={setErrorConfirmPassword}
                mbottom={"2%"}
              />
              <Box sx={{ width: "90%" }}>
                <PasswordStrength
                  password={password}
                  setPasswordStrength={setPasswordStrength}
                />
              </Box>
            </Stack>
            <InputPassword
              lable={"Confirm Password"}
              helperText={errorConfirmPassword ? "Password not match" : ""}
              error={errorConfirmPassword}
              password={confirmPassword}
              setPassword={setConfirmPassword}
              confirmPassword={password}
              isCheck={true}
              setErrorConfirmPassword={setErrorConfirmPassword}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" disabled={disabled}>
              Confirm
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </ThemeProvider>
  );
}
