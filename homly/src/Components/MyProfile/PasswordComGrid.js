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
import theme from "../../HomlyTheme";

const PasswordComGrid = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePassword = (data, id) => {
    props.setPassword({ ...props.password, [id]: data });
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <Grid container sx={{ width: "100%" }} key={props.id}> */}
      <Grid item xs={12} sm={6} md={6}>
        <Typography
          variant="h6"
          fontWeight={"bold"}
          padding={"4 0"}
          component="div"
        >
          {props.lable}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <TextField
          className="password-textfield"
          sx={{ marginBottom: " 6%", width: "90%" 
        }}
          id={props.id}
          placeholder={props.placeholder}
          required
          error={props.error[props.id]}
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
          // onFocus={() => setFocusedConfirmPassword(true)}
          // onBlur={() => setFocusedConfirmPassword(false)}
          onChange={(e) => {
            handlePassword(e.target.value, props.id);

            if (props.id === "newPass")
              props.checkConfirmPassword(
                props.password.confirmPass,
                e.target.value
              );
            else if (props.id === "confirmPass")
              props.checkConfirmPassword(
                e.target.value,
                props.password.newPass
              );

            // {props.id === "confirmPass" && props.checkConfirmPassword(e.target.value, props.password.newPass)}
          }}
          value={props.password[props.id]}
          size="small"
          helperText={
            props.id === "confirmPass" && props.error[props.id]
              ? "password not match"
              : ""
          }
          fullWidth
        />
      </Grid>
      {/* </Grid> */}
    </ThemeProvider>
  );
};

export default PasswordComGrid;
