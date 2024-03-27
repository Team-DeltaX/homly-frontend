import React, { useState } from "react";
import axios from "axios";
import {
  ThemeProvider,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  Dialog,
} from "@mui/material";
import theme from "../../HomlyTheme";
import InputPassword from "./TextField/InputPassword";

export default function AdminChangePasswordPopup({
  open,
  setOpen,
  adminId,
  errorStatus,
  setErrorStatus,
}) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorConfirmPassword) {
      const formData = { adminId: adminId, password: password };
      axios
        .put(`${global.API_BASE_URL}/admin/`, formData, {
          withCredentials: true,
        })
        .then((res) => {
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
            <InputPassword
              lable={"Password"}
              helperText={""}
              error={false}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              isCheck={true}
              setErrorConfirmPassword={setErrorConfirmPassword}
            />
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
            <Button type="submit">Confirm</Button>
          </DialogActions>
        </form>
      </Dialog>
    </ThemeProvider>
  );
}
