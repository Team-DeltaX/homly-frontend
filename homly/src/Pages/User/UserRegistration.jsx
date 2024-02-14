import { React } from "react";
import { useEffect } from "react";
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
  Stack,
  Avatar,
} from "@mui/material";

// import { Visibility, VisibilityOff } from "@mui/icons-material";
import BadgeIcon from "@mui/icons-material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import PasswordIcon from "@mui/icons-material/Password";

import ProfilePicUploadPopup from "../../Components/User/ProfilePicUploadPopup";
import ErrorSnackbar from "../../Components/User/ErrorSnackbar";

import theme from "../../HomlyTheme";
import "./UserStyle.css";
import logo from "../../Assets/images/logo.png";
import wave from "../../Assets/images/wave.png";

import { Link } from "react-router-dom";
import InputPasswordWithIcon from "../../Components/User/TextField/InputPasswordWithIcon";
import InputTextWithIcon from "../../Components/User/TextField/InputTextWithIcon";
import PasswordStrength from "../../Components/User/PasswordStrength";

// import AvatarImage from "../Components/AvatarImage"

const Img = styled("img")({
  // margin: "auto",
  display: "block",
  width: "40%",
  height: "40%%",
  padding: "5%",
  filter: "drop-shadow(17px 18px 90px  #872341)",
  // filter: "drop-shadow(17px 18px 90px -8px rgba(0,0,0,0.64))",
});

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

const UserRegistration = () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneRegex = /^[0-9]{10}$/;

  const [ServiceNo, setServiceNo] = useState("");
  const [Email, setEmail] = useState("");
  const [ContactNo, setContactNo] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);

  const [errorServiceNumber, setErrorServiceNumber] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [dbServiceNo, setDbServiceNo] = useState(null);

  // const handleClickShowConfirmPassword = () =>
  //   setShowConfirmPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  // const countChar = (str) => {
  //   let withoutSpace = str.replace(/\s/g, "");
  //   let len = withoutSpace.length;
  //   return len;
  // };

  const checkEmail = (email) => {
    return email.length > 0 && !emailRegex.test(email);
  };

  const checkContactNo = (contactNo) => {
    return contactNo.length > 0 && !phoneRegex.test(contactNo);
  };

  const checkServiceNo = (sn) => {
    // setDbServiceNo("1000");
    let len = dbServiceNo === null ? 0 : dbServiceNo.length;
    if (sn.length > 0 && len !== 0) {
      for (let i = 0; i < len; i++) {
        if (dbServiceNo[i].serviceNumber === sn) {
          setErrorServiceNumber(false);
          console.log("1", errorServiceNumber);
          return false;
        } else {
          setErrorServiceNumber(true);
          console.log("1", errorServiceNumber);
        }
      }
      return true;
    }
  };

  useEffect(() => {
    fetch("https://65ac00f8fcd1c9dcffc76f52.mockapi.io/homly/api/employee")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDbServiceNo(data);
      });
  }, []);

  // console.log(dbServiceNo)

  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
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

    // console.log('2',ServiceNo,checkServiceNo(ServiceNo))
    const formData = { ServiceNo, Password, Email, ContactNo, image };

    if (
      !checkServiceNo(ServiceNo) &&
      !checkEmail(Email) &&
      !checkContactNo(ContactNo) &&
      !errorConfirmPassword && 
      passwordStrength > 0
    ) {
      console.log(ServiceNo, Email, ContactNo, Password);

      axios
        .post("http://localhost:3002/users/register", formData)
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            setErrorStatus({
              ...errorStatus,
              isOpen: true,
              type: "success",
              message: res.data.message,
            });
          } else {
            setErrorStatus({
              ...errorStatus,
              isOpen: true,
              type: "error",
              message: res.data.message,
            });
          }
          setServiceNo("");
          setEmail("");
          setContactNo("");
          setPassword("");
          setConfirmPassword("");
          setImage(null);
        })
        .catch((error) => {
          // alert("Error adding user:", error);
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "error",
            message: "Something went wrong",
          });
        });
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setServiceNo("");
    setEmail("");
    setContactNo("");
    setPassword("");
    setConfirmPassword("");
    setImage(null);
  };

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

          <Container className="registration-box-container">
            <Grid
              container
              sx={{
                // height: "85%",
                height: "auto",
                backgroundColor: "grey1",
                borderRadius: "10px",
                boxShadow: 1,
              }}
              className="registration-box"
            >
              <Grid
                item
                className="registration-box-left mytest"
                xs={12}
                sm={12}
                md={6}
              >
                <Box>
                  <Img src={logo} />
                  <Box
                    sx={{
                      display: { xs: "none", sm: "none", md: "flex" },
                      alignItems: "center",
                      height: "60%",
                      padding: "15% 4% 0 12%",
                    }}
                  >
                    <Typography
                      className="registration-box-left-text"
                      sx={{
                        fontSize: { md: "1.5rem" },
                        fontWeight: "medium",
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "right",
                      }}
                    >
                      <span>Enjoy your pleasure time</span>{" "}
                      <span>with your loved ones</span>{" "}
                      <span>safely with us</span>
                    </Typography>
                  </Box>
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
                    Have an account
                  </Typography>
                  <Button variant="outlined" component={Link} to="/">
                    Login
                  </Button>
                </Box>
                <Box
                  paddingLeft={"5%"}
                  marginBottom={"2%"}
                >
                  <form
                    action=""
                    autoComplete="off"
                    width="100%"
                    onSubmit={handleSubmit}
                    onReset={handleReset}
                  >
                    {/* <AvatarImage /> */}
                    <ProfilePicUploadPopup
                      open={open}
                      setOpen={setOpen}
                      setImage={setImage}
                    />
                    <Stack
                      direction="row"
                      sx={{
                        margin: "2% 0",
                        height: { xs: 80, sm: 100 },
                        width: "100%",
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={image}
                        sx={{
                          width: { xs: 80, sm: 100 },
                          height: { xs: 80, sm: 100 },
                        }}
                      />
                      <Box
                        sx={{
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          marginLeft: { xs: "8px" },
                        }}
                      >
                        <Button variant="outlined" onClick={handleClickOpen}>
                          Upload Profile Picture
                        </Button>
                      </Box>
                    </Stack>

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
                      inputValue={ServiceNo}
                      setInputValue={setServiceNo}
                    />
                    <InputTextWithIcon
                      lable={"Email"}
                      icon={<EmailIcon />}
                      inputType={"email"}
                      error={checkEmail(Email)}
                      helperText={
                        checkEmail(Email) ? "invalid email address" : ""
                      }
                      required={true}
                      inputValue={Email}
                      setInputValue={setEmail}
                    />
                    <InputTextWithIcon
                      lable={"Contact Number"}
                      icon={<CallIcon />}
                      inputType={"text"}
                      error={checkContactNo(ContactNo)}
                      helperText={
                        checkContactNo(ContactNo)
                          ? "invalid contact number"
                          : ""
                      }
                      required={true}
                      inputValue={ContactNo}
                      setInputValue={setContactNo}
                    />
                    <Stack
                      direction="column"
                    >
                      <InputPasswordWithIcon
                        lable={"Password"}
                        icon={
                          <PasswordIcon sx={{ p: 0.25, ml: -0.5, mr: 1 }} />
                        }
                        helperText={""}
                        error={false}
                        Password={Password}
                        setPassword={setPassword}
                        ConfirmPassword={ConfirmPassword}
                        isCheck={true}
                        setErrorConfirmPassword={setErrorConfirmPassword}
                        marginBottom={"0"}
                      />
                      <Box sx={{ width: "90%" }}>
                        <PasswordStrength password={Password} setPasswordStrength={setPasswordStrength}/>
                      </Box>
                    </Stack>
                    <InputPasswordWithIcon
                      lable={"Confirm Password"}
                      icon={<PasswordIcon sx={{ p: 0.25, ml: -0.5, mr: 1 }} />}
                      helperText={
                        errorConfirmPassword ? "Password not match" : ""
                      }
                      error={errorConfirmPassword}
                      Password={ConfirmPassword}
                      setPassword={setConfirmPassword}
                      ConfirmPassword={Password}
                      isCheck={true}
                      setErrorConfirmPassword={setErrorConfirmPassword}
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
                        shrink: focusedServiceNo || countChar(ServiceNo) !== 0,
                        style: {
                          marginLeft:
                            focusedServiceNo || countChar(ServiceNo) !== 0
                              ? 0
                              : 35,
                        },
                      }}
                      onFocus={() => setFocusedServiceNo(true)}
                      onBlur={() => setFocusedServiceNo(false)}
                      onChange={(e) => {
                        setServiceNo(e.target.value);
                      }}
                      value={ServiceNo}
                      size="small"
                      helperText={
                        errorServiceNumber
                          ? "Your are not an employee of Homly"
                          : ""
                      }
                      fullWidth
                    /> */}
                    {/* <TextField
                      sx={{ marginBottom: " 6%", width: "90%" }}
                      id="textfield-email"
                      label="Email"
                      required
                      error={checkEmail(Email)}
                      type="email"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                      InputLabelProps={{
                        shrink: focusedEmail || countChar(Email) !== 0,
                        style: {
                          marginLeft:
                            focusedEmail || countChar(Email) !== 0 ? 0 : 35,
                        },
                      }}
                      onFocus={() => setFocusedEmail(true)}
                      onBlur={() => setFocusedEmail(false)}
                      onChange={(e) => setEmail(e.target.value)}
                      value={Email}
                      size="small"
                      helperText={
                        checkEmail(Email) ? "invalid email address" : ""
                      }
                      fullWidth
                    /> */}

                    {/* <TextField
                      sx={{ marginBottom: " 6%", width: "90%" }}
                      id="textfield-contactNumber"
                      label="Contact Number"
                      required
                      error={checkContactNo(ContactNo)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CallIcon />
                          </InputAdornment>
                        ),
                      }}
                      InputLabelProps={{
                        shrink: focusedContactNo || countChar(ContactNo) !== 0,
                        style: {
                          marginLeft:
                            focusedContactNo || countChar(ContactNo) !== 0
                              ? 0
                              : 35,
                        },
                      }}
                      onFocus={() => setFocusedContactNo(true)}
                      onBlur={() => setFocusedContactNo(false)}
                      onChange={(e) => setContactNo(e.target.value)}
                      value={ContactNo}
                      size="small"
                      helperText={
                        checkContactNo(ContactNo)
                          ? "invalid contact number"
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
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        ),
                      }}
                      InputLabelProps={{
                        shrink: focusedPassword || countChar(Password) !== 0,
                        style: {
                          marginLeft:
                            focusedPassword || countChar(Password) !== 0
                              ? 0
                              : 35,
                        },
                      }}
                      onFocus={() => setFocusedPassword(true)}
                      onBlur={() => setFocusedPassword(false)}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        checkConfirmPassword(ConfirmPassword, e.target.value);
                      }}
                      value={Password}
                      size="small"
                      helperText={""}
                      fullWidth
                    /> */}

                    {/* <TextField
                      sx={{ marginBottom: " 6%", width: "90%" }}
                      id="textfield-confirmPassword"
                      label="Confirm Password"
                      required
                      error={errorConfirmPassword}
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
                        shrink:
                          focusedConfirmPassword ||
                          countChar(ConfirmPassword) !== 0,
                        style: {
                          marginLeft:
                            focusedConfirmPassword ||
                            countChar(ConfirmPassword) !== 0
                              ? 0
                              : 35,
                        },
                      }}
                      onFocus={() => setFocusedConfirmPassword(true)}
                      onBlur={() => setFocusedConfirmPassword(false)}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        checkConfirmPassword(e.target.value, Password);
                      }}
                      value={ConfirmPassword}
                      size="small"
                      helperText={
                        errorConfirmPassword ? "password not match" : ""
                      }
                      fullWidth
                    /> */}

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
                      <Button type="submit" variant="contained" color="primary">
                        Register
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

export default UserRegistration;
