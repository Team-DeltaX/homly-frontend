import React, { useState } from "react";
import axios from "axios";
import {
  ThemeProvider,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  Box,
} from "@mui/material";
import theme from "../../../HomlyTheme";
import "./forgetPassword.css";
import OtpInput from "react-otp-input";

export default function EnterDetailCom({
  handleClose,
  setSelectedComponent,
  errorStatus,
  setErrorStatus,
  value,
}) {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      const formData = { serviceNo: value.serviceNo, otp: otp };
      axios
        .post("http://localhost:3002/users/forgetPassword/otp", formData)
        .then((res) => {
          if (res.data.success) {
            setErrorStatus({
              ...errorStatus,
              isOpen: true,
              type: "success",
              message: res.data.message,
            });
            setSelectedComponent(2);
          } else {
            setErrorStatus({
              ...errorStatus,
              isOpen: true,
              type: "error",
              message: res.data.message,
            });
          }
        });
    } else {
      setErrorStatus({
        ...errorStatus,
        isOpen: true,
        type: "error",
        message: "Enter Valid OTP",
      });
    }
  };

  const handleNewOTP = () => {
    const formData = { serviceNo: value.serviceNo, email: value.email };
    axios
      .post("http://localhost:3002/users/forgetPassword/details", formData)
      .then((res) => {
        if (res.data.success) {
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "success",
            message: res.data.message,
          });
        } else {
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "error",
            message: res.data.message,
          });
        }
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <DialogContent
          sx={{ height: { xs: "130px", sm: "160px" }, overflowY: "unset" }}
        >
          <DialogContentText sx={{ marginBottom: "10px" }}>
            Check your email for the OTP
          </DialogContentText>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>&nbsp;</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={"otp-inputs"}
            containerStyle={"otp-inputs-container"}
          />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button onClick={handleNewOTP}>Try Again</Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Next</Button>
        </DialogActions>
      </form>
    </ThemeProvider>
  );
}
