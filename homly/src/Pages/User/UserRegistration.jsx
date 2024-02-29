import React, { useEffect, useState } from "react";
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

const Img = styled("img")({
  display: "block",
  width: "40%",
  height: "40%%",
  padding: "5%",
  filter: "drop-shadow(17px 18px 90px  #872341)",
});

// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty("--vh", `${vh}px`);

const UserRegistration = () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneRegex = /^[0-9]{10}$/;

  const [ServiceNo, setServiceNo] = useState("");
  const [Email, setEmail] = useState("");
  const [ContactNo, setContactNo] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);

  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const [isDiabled, setIsDisabled] = useState(true);

  const checkEmail = (email) => {
    return email.length > 0 && !emailRegex.test(email);
  };

  const checkContactNo = (contactNo) => {
    return contactNo.length > 0 && !phoneRegex.test(contactNo);
  };

  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });

  useEffect(() => {
    if (
      !checkEmail(Email) &&
      !checkContactNo(ContactNo) &&
      !errorConfirmPassword &&
      passwordStrength > 0
    ) {
      setIsDisabled(false);}
    else {
      setIsDisabled(true);
    }

  }, [Email,ContactNo,errorConfirmPassword,passwordStrength]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !checkEmail(Email) &&
      !checkContactNo(ContactNo) &&
      !errorConfirmPassword &&
      passwordStrength > 0
    ) {
      console.log(ServiceNo, Email, ContactNo, Password);

      const formData = {
        ServiceNo,
        Password,
        Email: Email.toLowerCase(),
        ContactNo,
        image,
      };
      axios
        .post("http://localhost:3002/users", formData)
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
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" style={{ padding: 0, height: "95vh" }}>
          {/* error snack bar */}
          <ErrorSnackbar
            isOpen={errorStatus.isOpen}
            type={errorStatus.type}
            message={errorStatus.message}
            setIsOpen={(val) => setErrorStatus({ ...errorStatus, isOpen: val })}
          />

          <Container
            className="registration-box-container"
            sx={{ display: "flex", height: "100%", alignItems: "center" }}
          >
            <Grid
              container
              sx={{
                height: "auto",
                backgroundColor: "#FEF2F4",
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
                <Box paddingLeft={"10%"} marginBottom={"2%"}>
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
                          <Typography
                            sx={{
                              fontSize: { xs: "0.7rem" },
                              fontWeight: "bold",
                            }}
                          >
                            Upload Profile Picture
                          </Typography>
                        </Button>
                      </Box>
                    </Stack>

                    <InputTextWithIcon
                      lable={"Service Number"}
                      icon={<BadgeIcon />}
                      inputType={"text"}
                      error={false}
                      helperText={""}
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
                    <Stack direction="column">
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
                        <PasswordStrength
                          password={Password}
                          setPasswordStrength={setPasswordStrength}
                        />
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
                      <Button type="submit" variant="contained" color="primary" disabled={isDiabled}>
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
