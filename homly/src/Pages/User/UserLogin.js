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

import { Link } from "react-router-dom";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import BadgeIcon from "@mui/icons-material/Badge";
import PasswordIcon from "@mui/icons-material/Password";

import theme from "../../HomlyTheme";
import "./UserStyle.css";
import logo from "../../Assets/images/logo.png";
import wave from "../../Assets/images/wave.png";

const Img = styled("img")({
  display: "block",
  width: "40%",
  height: "40%%",
  padding: "5%",
  filter: "drop-shadow(17px 18px 90px  #872341)",
});

const UserLogin = () => {
  const [serviceNo, setServiceNo] = useState("");
  const [password, setPassword] = useState("");

  const [focusedServiceNo, setFocusedServiceNo] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);

  const [errorServiceNumber, setErrorServiceNumber] = useState(false);
  //   const [errorPassword, setErrorPassword] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorServiceNumber(false);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setServiceNo("");
    setPassword("");
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="main_container"
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" style={{ padding: 0 }}>
          <Container className="registration-box-container">
            <Grid
              container
              sx={{
                // height: "85%",
                backgroundColor: "grey1",
                borderRadius: "10px",
                boxShadow: 1,
              }}
              className="registration-box"
            >
              <Grid
                item
                className="registration-box-left"
                xs={12}
                sm={12}
                md={6}
              >
                <Box>
                  <Img src={logo} />
                </Box>
                <Box>
                  <img
                    src={wave}
                    className="registration-box-wave "
                    alt="wave"
                  />
                </Box>
              </Grid>
              <Grid
                item
                className="registration-box-right"
                xs={12}
                sm={12}
                md={6}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "baseline",
                    padding: "5%",
                  }}
                >
                  <Typography sx={{ paddingRight: "2%", fontWeight: "bold" }}>
                    Don't have an account
                  </Typography>
                  <Button
                    variant="outlined"
                    component={Link}
                    to="/Registration"
                  >
                    Sign up
                  </Button>
                </Box>
                <Box paddingLeft={"5%"} marginBottom={"5%"}>
                  <form
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    onReset={handleReset}
                  >
                    <TextField
                      sx={{ marginBottom: " 6%", width: "90%" }}
                      id="textfield-serviceNumber"
                      label="Service Number"
                      required
                      error={errorServiceNumber}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <BadgeIcon />
                          </InputAdornment>
                        ),
                      }}
                      InputLabelProps={{
                        shrink: focusedServiceNo || countChar(serviceNo) !== 0,
                        style: {
                          marginLeft:
                            focusedServiceNo || countChar(serviceNo) !== 0
                              ? 0
                              : 35,
                        },
                      }}
                      onFocus={() => setFocusedServiceNo(true)}
                      onBlur={() => setFocusedServiceNo(false)}
                      onChange={(e) => {
                        setServiceNo(e.target.value);
                      }}
                      value={serviceNo}
                      size="small"
                      helperText={
                        errorServiceNumber
                          ? "Your are not an employee of Homly"
                          : ""
                      }
                      fullWidth
                    />
                    <TextField
                      sx={{ marginBottom: "6%", width: "90%" }}
                      id="textfield-password"
                      label="Password"
                      required
                      error={false}
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
                        shrink: focusedPassword || countChar(password) !== 0,
                        style: {
                          marginLeft:
                            focusedPassword || countChar(password) !== 0
                              ? 0
                              : 35,
                        },
                      }}
                      onFocus={() => setFocusedPassword(true)}
                      onBlur={() => setFocusedPassword(false)}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                      size="small"
                      helperText={""}
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
                        Login
                      </Button>
                    </Box>
                  </form>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default UserLogin;
