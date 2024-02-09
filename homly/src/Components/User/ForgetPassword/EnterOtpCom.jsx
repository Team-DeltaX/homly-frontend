import React, { useState } from "react";
import axios from "axios";
import {
  ThemeProvider,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
} from "@mui/material";
import theme from "../../../HomlyTheme";
import OtpInput from "react-otp-input";

export default function EnterDetailCom({
  handleClose,
  setSelectedComponent,
  errorStatus,
  setErrorStatus,
}) {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // axios.post("http://localhost:3002/users/forgetPassword/details", value)
    // .then((res) => {
    //     if(res.data.success){
    //         setErrorStatus({
    //             ...errorStatus,
    //             isOpen: true,
    //             type: "success",
    //             message: res.data.message,
    //         })
    //         // setSelectedComponent(1)
    //     }else{
    //         setErrorStatus({
    //             ...errorStatus,
    //             isOpen: true,
    //             type: "error",
    //             message: res.data.message,
    //         })

    //     }
    // });
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <DialogContent sx={{  height:{xs:'130px',sm:'110px' }}}>
          <DialogContentText>Check your email for the OTP</DialogContentText>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Next</Button>
        </DialogActions>
      </form>
    </ThemeProvider>
  );
}
