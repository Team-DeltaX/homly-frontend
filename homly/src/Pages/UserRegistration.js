import { React } from "react";
import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  ThemeProvider,
  styled,
  Button,
  InputAdornment,
  IconButton,
  TextField,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import BadgeIcon from "@mui/icons-material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import PasswordIcon from "@mui/icons-material/Password";

import theme from "../HomlyTheme";
import "./UserRegistration.css";
import logo from "../resources/images/logo.png";
import wave from "../resources/images/wave.png";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  width: "40%",
  height: "40%%",
});

const UserRegistration = () => {
  const [focusedServiceNo, setFocusedServiceNo] = useState(false);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedContactNo, setFocusedContactNo] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [focusedConfirmPassword, setFocusedConfirmPassword] = useState(false);

  const [valueServiceNo, setValueServiceNo] = useState(false);
  const [valueEmail, setValueEmail] = useState(false);
  const [valueContactNo, setValueContactNo] = useState(false);
  const [valuePassword, setValuePassword] = useState(false);
  const [valueConfirmPassword, setValueConfirmPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="registration-box-container">
        <Grid
          container
          sx={{ height: "85%", backgroundColor: "grey1", borderRadius:"5%",boxShadow: 2 }}
          className="registration-box"
        >
          <Grid item className="registration-box-left" xs={12} sm={12} md={6}>
            <Box>
              <Img src={logo} />
            </Box>
            <Box>
              <img src={wave} className="registration-box-wave" alt="wave" />
            </Box>
          </Grid>
          <Grid item className="registration-box-right" xs={12} sm={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "baseline",
                padding: "5%",
              }}
            >
              <Typography sx={{ paddingRight: "2%", fontWeight: "bold" }}>
                Have an account
              </Typography>
              <Button variant="outlined">Login</Button>
            </Box>
            <Box>
              <form action="" autoComplete="off">
                <TextField
                  sx={{ marginBottom: "4%", width: "90%" }}
                  id="textfield-serviceNumber"
                  label="Service Number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BadgeIcon />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: focusedServiceNo || valueServiceNo,
                    style: {
                      marginLeft: focusedServiceNo || valueServiceNo ? 0 : 35,
                    },
                  }}
                  onFocus={() => setFocusedServiceNo(true)}
                  onBlur={() => setFocusedServiceNo(false)}
                  onChange={(e) =>
                    setValueServiceNo(e.target.value.length !== 0)
                  }
                  size="small"
                  fullWidth
                />
                <TextField
                  sx={{ marginBottom: "4%", width: "90%" }}
                  id="textfield-email"
                  label="Email"
                  type="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: focusedEmail || valueEmail,
                    style: { marginLeft: focusedEmail || valueEmail ? 0 : 35 },
                  }}
                  onFocus={() => setFocusedEmail(true)}
                  onBlur={() => setFocusedEmail(false)}
                  onChange={(e) => setValueEmail(e.target.value.length !== 0)}
                  size="small"
                  fullWidth
                />

                <TextField
                  sx={{ marginBottom: "4%", width: "90%" }}
                  id="textfield-contactNumber"
                  label="Contact Number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CallIcon />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: focusedContactNo || valueContactNo,
                    style: {
                      marginLeft: focusedContactNo || valueContactNo ? 0 : 35,
                    },
                  }}
                  onFocus={() => setFocusedContactNo(true)}
                  onBlur={() => setFocusedContactNo(false)}
                  onChange={(e) =>
                    setValueContactNo(e.target.value.length !== 0)
                  }
                  size="small"
                  fullWidth
                />
                <TextField
                  sx={{ marginBottom: "4%", width: "90%" }}
                  id="textfield-password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PasswordIcon sx={{ p: 0.25, ml: -0.5, mr: 1 }} />
                      </InputAdornment>
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
                    shrink: focusedPassword || valuePassword,
                    style: {
                      marginLeft: focusedPassword || valuePassword ? 0 : 35,
                    },
                  }}
                  onFocus={() => setFocusedPassword(true)}
                  onBlur={() => setFocusedPassword(false)}
                  onChange={(e) =>
                    setValuePassword(e.target.value.length !== 0)
                  }
                  size="small"
                  fullWidth
                />
                <TextField
                  sx={{ marginBottom: "4%", width: "90%" }}
                  id="textfield-confirmPassword"
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PasswordIcon sx={{ p: 0.25, ml: -0.5, mr: 1 }} />
                      </InputAdornment>
                    ),

                    endAdornment: (
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: focusedConfirmPassword || valueConfirmPassword,
                    style: {
                      marginLeft:
                        focusedConfirmPassword || valueConfirmPassword ? 0 : 35,
                    },
                  }}
                  onFocus={() => setFocusedConfirmPassword(true)}
                  onBlur={() => setFocusedConfirmPassword(false)}
                  onChange={(e) =>
                    setValueConfirmPassword(e.target.value.length !== 0)
                  }
                  size="small"
                  fullWidth
                />
                <Box className="form-button">
                  <Button
                    type="reset"
                    variant="outlined"
                    color="primary"
                    sx={{ marginRight: "2%" }}
                  >
                    Reset
                  </Button>
                  <Button type="submit" variant="contained" color="primary">
                    Register
                  </Button>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default UserRegistration;
