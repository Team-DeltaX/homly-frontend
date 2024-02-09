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
import InputPassword from "../TextField/InputPassword";
export default function ChangePasswordCom({
  handleClose,
  setSelectedComponent,
  errorStatus,
  setErrorStatus,
  value,
  setValue,
}) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // setSelectedComponent(1);
    // const formData = {serviceNo:value.serviceNo,email:value.email}
    // axios.post("http://localhost:3002/users/forgetPassword/details", formData)
    // .then((res) => {
    //     if(res.data.success){
    //         setErrorStatus({
    //             ...errorStatus,
    //             isOpen: true,
    //             type: "success",
    //             message: res.data.message,
    //         })
    //         setSelectedComponent(1)
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
        <DialogContent sx={{ height: { xs: "130px", sm: "160px" } , overflowY:'unset' }}>
          <DialogContentText sx={{marginBottom:'10px'}}>
            Enter new password
          </DialogContentText>
          <InputPassword
            lable={"Password"}
            helperText={""}
            error={false}
            password={value.password}
            setPassword={(newValue) => setValue({ ...value, password: newValue })}
            confirmPassword={value.confirmPassword}
            isCheck={true}
            setErrorConfirmPassword={setErrorConfirmPassword}
          />
          <InputPassword
            lable={"Confirm Password"}
            helperText={errorConfirmPassword?"Password not match":""}
            error={errorConfirmPassword}
            password={value.confirmPassword}
            setPassword={(newValue) => setValue({ ...value, confirmPassword: newValue })}
            confirmPassword={value.password}
            isCheck={true}
            setErrorConfirmPassword={setErrorConfirmPassword}
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
