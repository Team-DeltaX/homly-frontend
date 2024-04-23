import React from "react";
import axios from "axios";
import {
  ThemeProvider,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";
import theme from "../../../HomlyTheme";
import InputText from "../TextField/InputText";
export default function EnterDetailCom({
  handleClose,
  setSelectedComponent,
  errorStatus,
  setErrorStatus,
  value,
  setValue,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      serviceNo: value.serviceNo,
      email: value.email.toLowerCase(),
    };
    axios
      .post("http://localhost:8080/users/forgetPassword/", formData)
      .then((res) => {
        if (res.data.success) {
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "success",
            message: res.data.message,
          });
          setSelectedComponent(1);
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
            Enter the service number and email address to reset your password
          </DialogContentText>
          <InputText
            lable={"Service Number"}
            inputType={"text"}
            error={false}
            helperText={""}
            required={true}
            inputValue={value.serviceNo}
            setInputValue={(val) => setValue({ ...value, serviceNo: val })}
          />
          <InputText
            lable={"Email Address"}
            inputType={"email"}
            error={false}
            helperText={""}
            required={true}
            inputValue={value.email}
            setInputValue={(val) => setValue({ ...value, email: val })}
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
