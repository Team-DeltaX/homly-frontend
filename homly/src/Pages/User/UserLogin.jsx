import { React } from "react";
import { useState } from "react";
import axios from "axios";
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

import { Link, useNavigate } from "react-router-dom";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import BadgeIcon from "@mui/icons-material/Badge";
import PasswordIcon from "@mui/icons-material/Password";

import theme from "../../HomlyTheme";
import "./UserStyle.css";
import logo from "../../Assets/images/logo.png";
import wave from "../../Assets/images/wave.png";
import ForgetPasswordPopup from "../../Components/User/ForgetPassword/ForgetPasswordPopup";
import ErrorSnackbar from "../../Components/User/ErrorSnackbar";
import InputTextWithIcon from "../../Components/User/TextField/InputTextWithIcon";
import InputPasswordWithIcon from "../../Components/User/TextField/InputPasswordWithIcon";

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

  const [errorServiceNumber, setErrorServiceNumber] = useState(false);

  // navigate to home
  const Navigate = useNavigate();

  const [errorStatus, setErrorStatus] = useState({
    type: "",
    message: "",
  });

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErrorStatus({ ...errorStatus, isOpen: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorServiceNumber(false);
    const formData = { serviceNo, password };
    axios
      .post("http://localhost:3002/users/login", formData)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          setServiceNo("");
          setPassword("");
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "success",
            message: res.data.message,
          });
          Navigate("/Home");
        } else {
          setServiceNo("");
          setPassword("");
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "error",
            message: res.data.message,
          });
        }
      })
      .catch((error) => {
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "error",
          message: "Something went wrong",
        });
      });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setServiceNo("");
    setPassword("");
  };

  // popup
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        // className="main_container"
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" style={{ padding: 0 }}>
          {/* error snack bar */}
          <ErrorSnackbar
            isOpen={errorStatus.isOpen}
            type={errorStatus.type}
            message={errorStatus.message}
            handleAlertClose={handleAlertClose}
          />

          {/* forget password popup */}
          <ForgetPasswordPopup open={open} setOpen={setOpen} />
          <Container className="registration-box-container">
            <Grid
              container
              sx={{
                backgroundColor: "grey1",
                borderRadius: "10px",
                boxShadow: 1,
                height: { xs: "auto", md: "60vh" },
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
                <Box
                  sx={{
                    display: { xs: "none", sm: "none", md: "flex" },
                  }}
                >
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
                <Box
                  sx={{
                    height: "70%",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <Box paddingLeft={"5%"} marginBottom={"5%"} width="100%">
                    <form
                      action=""
                      autoComplete="off"
                      width="100%"
                      onSubmit={handleSubmit}
                      onReset={handleReset}
                    >
                      <InputTextWithIcon
                        lable={"Service Number"}
                        icon={<BadgeIcon />}
                        inputType={"text"}
                        error={errorServiceNumber}
                        helperText={
                          errorServiceNumber
                            ? "Your are not an employee of Homly"
                            : ""
                        }
                        required={true}
                        inputValue={serviceNo}
                        setInputValue={setServiceNo}
                      />
                      <InputPasswordWithIcon
                        lable={"Password"}
                        icon={
                          <PasswordIcon sx={{ p: 0.25, ml: -0.5, mr: 1 }} />
                        }
                        helperText={""}
                        error={false}
                        Password={password}
                        setPassword={setPassword}
                        ConfirmPassword={null}
                        checkConfirmPassword={null}
                        isCheck={false}
                      />
                      {/* <TextField
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
                          shrink:
                            focusedServiceNo || countChar(serviceNo) !== 0,
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
                      /> */}
                      {/* <TextField
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
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
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
                      /> */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          width: "90%",
                        }}
                      >
                        <Button variant="text" onClick={handleClickOpen}>
                          Forget Password
                        </Button>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          width: "90%",
                        }}
                      >
                        <Button
                          type="reset"
                          variant="outlined"
                          color="primary"
                          sx={{ marginRight: "2%" }}
                        >
                          Reset
                        </Button>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                        >
                          Login
                        </Button>
                      </Box>
                    </form>
                  </Box>
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
