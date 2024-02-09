import React, { useState} from "react";
import {
  ThemeProvider,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import theme from "../../../HomlyTheme";

export default function InputPasswordWithIcon({
  lable,
  icon,
  helperText,
  error,
  Password,
  setPassword,
  ConfirmPassword,
  isCheck,
  setErrorConfirmPassword,
}) {
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const countChar = (str) => {
    let withoutSpace = str.replace(/\s/g, "");
    let len = withoutSpace.length;
    return len;
  };

  const checkConfirmPassword = (cpw, pw) => {
    setErrorConfirmPassword(cpw.length > 0 && cpw !== pw);
  };

  return (
    <ThemeProvider theme={theme}>
      <TextField
        autoComplete="new-password"
        sx={{ marginBottom: "6%", width: "90%" }}
        id={lable}
        label={lable}
        required
        error={error}
        type={showPassword ? "text" : "password"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),

          endAdornment: (
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
        InputLabelProps={{
          shrink: focusedPassword || countChar(Password) !== 0,
          style: {
            marginLeft: focusedPassword || countChar(Password) !== 0 ? 0 : 35,
          },
        }}
        onFocus={() => setFocusedPassword(true)}
        onBlur={() => setFocusedPassword(false)}
        onChange={(e) => {
          setPassword(e.target.value);
          if (isCheck) {
            checkConfirmPassword(ConfirmPassword, e.target.value);
          }
        }}
        value={Password}
        size="small"
        helperText={helperText}
        fullWidth
      />
    </ThemeProvider>
  );
}
