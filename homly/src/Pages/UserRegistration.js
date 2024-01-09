import { React, useEffect } from "react";
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

// import AvatarImage from "../Components/AvatarImage"

const Img = styled("img")({
  margin: "auto",
  display: "block",
  width: "40%",
  height: "40%%",
});

const UserRegistration = () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneRegex = /^[0-9]{10}$/;

  const [focusedServiceNo, setFocusedServiceNo] = useState(false);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedContactNo, setFocusedContactNo] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [focusedConfirmPassword, setFocusedConfirmPassword] = useState(false);

  const [ServiceNo, setServiceNo] = useState("");
  const [Email, setEmail] = useState("");
  const [ContactNo, setContactNo] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const [errorServiceNumber, setErrorServiceNumber] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [dbServiceNo, setDbServiceNo] = useState(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const countChar = (str) => {
    let withoutSpace = str.replace(/\s/g, "");
    let len = withoutSpace.length;
    return len;
  };

  const checkEmail = (email) => {
    return email.length > 0 && !emailRegex.test(email);
  };

  const checkContactNo = (contactNo) => {
    // console.log(dbServiceNo === null? "not" : dbServiceNo[0].serviceNumber);
    return contactNo.length > 0 && !phoneRegex.test(contactNo);
  };

  const checkConfirmPassword = (cpw, pw) => {
    setErrorConfirmPassword(cpw.length > 0 && cpw !== pw);
  };

  const checkServiceNo = (sn) => {
    let len = dbServiceNo === null? 0 : dbServiceNo.length;
    if (sn.length > 0 && len !== 0) {
      for (let i = 0; i < len; i++) {
        if(dbServiceNo[i].SN === sn){
          setErrorServiceNumber(false);
          break;
        }
        setErrorServiceNumber(true);
      }
    }
    
  };

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDbServiceNo(data);
      });
  }, []);



  const handleSubmit = (e) => {
    e.preventDefault();
    checkServiceNo(ServiceNo)

    const formData = { ServiceNo, Email, ContactNo, Password, ConfirmPassword };
    const product = JSON.stringify(formData);
    if(!errorServiceNumber && !checkEmail(Email) && !checkContactNo(ContactNo) && !errorConfirmPassword){
        console.log(ServiceNo, Email, ContactNo, Password, ConfirmPassword);

        fetch("http://localhost:8000/homlyDb", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: product,
        }).then(() => {
          console.log("new product added");
        });

        setServiceNo("");
        setEmail("");
        setContactNo("");
        setPassword("");
        setConfirmPassword("");
        
    }
  }

  const handleReset = (e) => {
    e.preventDefault();
    setServiceNo("");
    setEmail("");
    setContactNo("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <ThemeProvider theme={theme}>
      <Container className="registration-box-container">
        <Grid
          container
          sx={{
            height: "85%",
            backgroundColor: "grey1",
            borderRadius: "5%",
            boxShadow: 2,
          }}
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
            <Box paddingLeft={"5%"} marginBottom={"5%"}>
              <form action="" autoComplete="off" onSubmit={handleSubmit} onReset={handleReset}>
                {/* <AvatarImage /> */}
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
                    shrink: focusedServiceNo || countChar(ServiceNo) !== 0,
                    style: {
                      marginLeft:
                        focusedServiceNo || countChar(ServiceNo) !== 0 ? 0 : 35,
                    },
                  }}
                  onFocus={() => setFocusedServiceNo(true)}
                  onBlur={() => setFocusedServiceNo(false)}
                  onChange={(e) => {setServiceNo(e.target.value);}}
                  value={ServiceNo}
                  size="small"
                  helperText={errorServiceNumber?"Your are not an employee of Homly":""}
                  fullWidth
                />
                <TextField
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
                  helperText={checkEmail(Email) ? "invalid email address" : ""}
                  fullWidth
                />

                <TextField
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
                        focusedContactNo || countChar(ContactNo) !== 0 ? 0 : 35,
                    },
                  }}
                  onFocus={() => setFocusedContactNo(true)}
                  onBlur={() => setFocusedContactNo(false)}
                  onChange={(e) => setContactNo(e.target.value)}
                  value={ContactNo}
                  size="small"
                  helperText={
                    checkContactNo(ContactNo) ? "invalid contact number" : ""
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
                    shrink: focusedPassword || countChar(Password) !== 0,
                    style: {
                      marginLeft:
                        focusedPassword || countChar(Password) !== 0 ? 0 : 35,
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
                />
                <TextField
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
                  helperText={errorConfirmPassword ? "password not match" : ""}
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
