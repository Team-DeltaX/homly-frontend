import React from "react";
import { useState } from "react";
import {
  ThemeProvider,
  Grid,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import theme from "../../../HomlyTheme";

const PasswordComGrid = ({
  lable,
  placeholder,
  helperText,
  error,
  password,
  setPassword,
  confirmPassword,
  isCheck,
  setErrorConfirmPassword,
}) => {
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
      {/* <Grid container sx={{ width: "100%" }} key={id}> */}
      <Grid item xs={12} sm={6} md={6}>
        <Typography
          variant="h6"
          fontWeight={"bold"}
          padding={"4 0"}
          component="div"
        >
          {lable}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
      <TextField
        autoComplete="new-password"
        sx={{ marginBottom: "6%", width: "90%" }}
        id={lable}
        placeholder={placeholder}
        required
        error={error}
        type={showPassword ? "text" : "password"}
        InputProps={{
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
          shrink: focusedPassword || countChar(password) !== 0,
        }}
        onFocus={() => setFocusedPassword(true)}
        onBlur={() => setFocusedPassword(false)}
        onChange={(e) => {
          setPassword(e.target.value);
          if (isCheck) {
            checkConfirmPassword(confirmPassword, e.target.value);
          }
        }}
        value={password}
        size="small"
        helperText={helperText}
        fullWidth
      />
      </Grid>
      {/* </Grid> */}
    </ThemeProvider>
  );
};

export default PasswordComGrid;
