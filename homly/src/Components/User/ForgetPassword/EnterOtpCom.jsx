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
  Typography,
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
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [time, setTime] = useState(29);

  useEffect(() => {
    if (btnDisabled) {
      setTimeout(() => {
        setBtnDisabled(false);
      }, 30000);
    }
  }, [btnDisabled]);

  useEffect(() => {
    if (btnDisabled) {
      if (!time) return;
      const intervalId = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [time, btnDisabled]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      const formData = { serviceNo: value.serviceNo, otp: otp };
      axios
        .post(`${global.API_BASE_URL}/users/forgetPassword/otp`, formData, {
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
            setSelectedComponent(2);
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
      .post(`${global.API_BASE_URL}/users/forgetPassword`, formData, {
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
        } else {
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "error",
            message: res.data.message,
          });
        }
      });
    setBtnDisabled(true);
    setTime(29);
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <DialogContent sx={{ height: "160px", overflowY: "unset" }}>
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
              ml: "27px",
            }}
          >
            <Stack
              direction="row"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Button onClick={handleNewOTP} disabled={btnDisabled}>
                Try Again
              </Button>
              <Typography
                sx={{
                  marginLeft: 2,
                  fontWeight: "bold",
                  opacity: time === 0 ? 0 : 1,
                  color: time < 6 ? "red" : "black",
                }}
              >
                {time < 10 ? "0" + time : time}s
              </Typography>
            </Stack>
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
