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
export default function ChangePasswordCom({
  handleClose,
  setSelectedComponent,
  errorStatus,
  setErrorStatus,
  value,
  setValue,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // setSelectedComponent(1);
    const formData = {serviceNo:value.serviceNo,email:value.email}
    axios.post("http://localhost:3002/users/forgetPassword/details", formData)
    .then((res) => {
        if(res.data.success){
            setErrorStatus({
                ...errorStatus,
                isOpen: true,
                type: "success",
                message: res.data.message,
            })
            setSelectedComponent(1)
        }else{
            setErrorStatus({
                ...errorStatus,
                isOpen: true,
                type: "error",
                message: res.data.message,
            })

        }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <DialogContent sx={{ height: { xs: "130px", sm: "110px" } }}>
          <DialogContentText>
            Enter the service number and email address to reset your password
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="serviceNo"
            label="Service Number"
            type="text"
            size="small"
            fullWidth
            variant="outlined"
            onChange={(e) => setValue({ ...value, serviceNo: e.target.value })}
            value={value.serviceNo}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            size="small"
            fullWidth
            variant="outlined"
            onChange={(e) => setValue({ ...value, email: e.target.value })}
            value={value.email}
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
