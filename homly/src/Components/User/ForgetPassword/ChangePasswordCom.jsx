import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ThemeProvider,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  Box,
  Stack,
} from "@mui/material";
import theme from "../../../HomlyTheme";
import InputPassword from "../TextField/InputPassword";
import PasswordStrength from "../PasswordStrength";
import AxiosClient from "../../../services/AxiosClient";

export default function ChangePasswordCom({
  handleClose,
  setSelectedComponent,
  errorStatus,
  setErrorStatus,
  value,
  setValue,
  setOpen,
}) {
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (
      !errorConfirmPassword &&
      passwordStrength > 1 &&
      value.confirmPassword.length > 0
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorConfirmPassword, passwordStrength, value.confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { serviceNo: value.serviceNo, password: value.password };
    AxiosClient.put("/user/forgetPassword/reset", formData)
      .then((res) => {
        if (res.data.success) {
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "success",
            message: res.data.message,
          });
          setSelectedComponent(0);
          setOpen(false);
        } else {
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "error",
            message: res.data.message,
          });
        }
      })
      .catch((err) => {
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "error",
          message: "Somthing went wrong",
        });
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <DialogContent
          sx={{ height: { xs: "130px", sm: "160px" }, overflowY: "unset" }}
        >
          <DialogContentText sx={{ marginBottom: "10px" }}>
            Enter new password
          </DialogContentText>
          <Stack direction="column">
            <InputPassword
              lable={"Password"}
              helperText={""}
              error={false}
              password={value.password}
              setPassword={(newValue) =>
                setValue({ ...value, password: newValue })
              }
              confirmPassword={value.confirmPassword}
              isCheck={true}
              setErrorConfirmPassword={setErrorConfirmPassword}
            />
            <Box sx={{ width: "90%" }}>
              <PasswordStrength
                password={value.password}
                setPasswordStrength={setPasswordStrength}
              />
            </Box>
          </Stack>
          <InputPassword
            lable={"Confirm Password"}
            helperText={errorConfirmPassword ? "Password not match" : ""}
            error={errorConfirmPassword}
            password={value.confirmPassword}
            setPassword={(newValue) =>
              setValue({ ...value, confirmPassword: newValue })
            }
            confirmPassword={value.password}
            isCheck={true}
            setErrorConfirmPassword={setErrorConfirmPassword}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" disabled={isDisabled}>
            Confirm
          </Button>
        </DialogActions>
      </form>
    </ThemeProvider>
  );
}
