import React, { useState } from "react";
import SideNavbar from "../../Components/PrimaryAdmin/SideNavbar";
import Box from "@mui/material/Box";
import AxiosClient from "../../services/AxiosClient";
import {
  Button,
  Container,
  Grid,
  InputLabel,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "../../HomlyTheme";
import Pagetop from "../../Components/PrimaryAdmin/PageTop";
import AutohideSnackbar from "../../Components/PrimaryAdmin/AutohideSnackbar";
import Snackbarp from "../../Components/PrimaryAdmin/snackbar/Snackbarp";
import { Validator } from "react";

const PrimaryAddAdmin = () => {
  const [adminno, setadminno] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [contactno, setContactno] = useState("");
  const [email, SetEmail] = useState("");
  const [worklocation, SetWorklocation] = useState("");
  const [substitute, SetSubstitute] = useState("");
  const [passworderror, setPassworderror] = useState(false);
  const [mobileerror, setMobileerror] = useState(false);
  const [emailerror, setEmailerror] = useState(false);
  const [adminerror, setadminerror] = useState(false);
  const [usernameerror, setUsernameerror] = useState(false);
  const [worklocationeerror, setWorklocationerror] = useState(false);
  const [snacktext, setnacktext] = useState("");
  const [showNav, setShowNav] = useState("nav_grid_deactive");
  const [open, setOpen] = React.useState(false);

  const validatemobile = (number) => {
    const pattern = /^(?:\+94|0)?(?:7\d{8}|[1-9]\d{8})$/;
    return pattern.test(number);
  };
  const validateemail = (email) => {
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (pattern.test(email)) {
      setEmailerror(false);
    } else {
      setEmailerror(true);
    }
  };
  const validateadmin = (adminno) => {
    if (adminno.length < 2) {
      setadminerror(true);
    } else {
      setadminerror(false);
    }
  };

  const validusername = (username) => {
    const isAllNumbers = /^\d+$/.test(username);
    if ((username.length < 2 ) || (username.trim().length === 0)||isAllNumbers) {
      setUsernameerror(true);
    } else {
      setUsernameerror(false);
    }
  };
  const validlocation = (location) => {
    const isAllNumbers = /^\d+$/.test(location);
    if ((location.length < 2)||(location.trim().length === 0)||isAllNumbers) {
      setWorklocationerror(true);
    } else {
      setWorklocationerror(false);
    }
  };

  const handlesubmit = () => {
    if (substitute.length < 1) {
      SetSubstitute("Null");
    }

    const data = {
      AdminNo: adminno,
      UserName: username,
      Password: password,
      ContactNo: contactno,
      Email: email,
      WorkLocation: worklocation,
      Disabled: false,
      Sub: substitute,
    };
    AxiosClient.post(`/admin/auth/locationadmin/add`, data)
      .then((res) => {
        setnacktext("Admin Added Sucessfully!");
        handleClick();
      })
      .catch((error) => {
        setnacktext(
          "Somthing Went Wrong,May be admin no duplicaion,Please Try Again!"
        );
        handleClick();
      });

    setadminno("");
    setUsername("");
    setContactno("");
    SetEmail("");
    SetWorklocation("");
    setPassword("");
    SetSubstitute("");
  };

  const ValidateContact = (contactno) => {
    if (!validatemobile(contactno)) {
      setMobileerror(true);
    } else {
      setMobileerror(false);
    }
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="main_continer"
        sx={{
          width: "100%",
          backgroundColor: "primary.main",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (
              !(
                mobileerror ||
                passworderror ||
                emailerror ||
                usernameerror ||
                adminerror ||
                worklocationeerror
              )
            ) {
              handlesubmit();
            } else {
              console.log("error");
            }
          }}
        >
          <Container maxWidth="xl" style={{ padding: "0px" }}>
            <Grid container sx={{ position: "relative" }}>
              <Grid
                className={showNav}
                xs={3}
                sx={{ backgroundColor: "primary.main", height: "100vh" }}
              >
                <SideNavbar setShowNav={setShowNav}></SideNavbar>
              </Grid>
              <Grid
                className="container_grid"
                xs={9}
                sx={{
                  backgroundColor: "white",
                  borderTopLeftRadius: "20px",
                  padding: "0 20px",
                }}
              >
                <Pagetop setShowNav={setShowNav} heading={"Add Admin"} />
           
                   <Snackbarp
                  isOpen={open}
                  setIsOpen={handleClick}
                  type="success"
                  message={"Admin Added Sucessfully"}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "10%",
                  }}
                >
                  <Grid
                    container
                    sx={{
                      background: "#E9E9E9",
                      width: { md: "50%", xs: "100%" },
                      height: "50%",
                      borderRadius: "20px",
                    }}
                  >
                    <Grid item sm={12}>
                      <Grid
                        container
                        width={"60%"}
                        sx={{
                          marginLeft: "15%",
                          alignItems: "center",
                          padding: "10px",
                        }}
                      >
                        <Grid item md={6} sm={12} xs={12}>
                          <InputLabel>User Name</InputLabel>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                          <TextField
                            value={username}
                            required={true}
                            onChange={(e) => {
                              setUsername(e.target.value);
                              validusername(e.target.value);
                            }}
                            alignItems="center"
                            error={usernameerror}
                            type="text"
                            size="small"
                            sx={{
                              background: "white",
                              marginLeft: "3%",
                              borderRadius: "15px",
                              "& fieldset": {
                                borderRadius: "10px",
                                borderWidth: "2px",
                                fontFamily: "roboto",
                              },
                              width: "100%",
                            }}
                          ></TextField>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item sm={12}>
                      <Grid
                        container
                        width={"60%"}
                        sx={{
                          marginLeft: "15%",
                          alignItems: "center",
                          padding: "10px",
                        }}
                      >
                        <Grid item md={6} sm={12} xs={12}>
                          <InputLabel>Contact Number</InputLabel>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                          <TextField
                            value={contactno}
                            required={true}
                            onChange={(e) => {
                              setContactno(e.target.value);
                              ValidateContact(e.target.value);
                            }}
                            type="text"
                            alignItems="center"
                            error={mobileerror}
                            size="small"
                            sx={{
                              background: "white",
                              marginLeft: "3%",
                              borderRadius: "15px",
                              "& fieldset": {
                                borderRadius: "10px",
                                borderWidth: "2px",
                                fontFamily: "roboto",
                              },
                              width: "100%",
                            }}
                          ></TextField>
                          {mobileerror && (
                            <Typography sx={{ fontSize: "10px", color: "red" }}>
                              enter valid contact number
                            </Typography>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item sm={12}>
                      <Grid
                        container
                        width={"60%"}
                        sx={{
                          marginLeft: "15%",
                          alignItems: "center",
                          padding: "10px",
                        }}
                      >
                        <Grid item md={6} sm={12} xs={12}>
                          <InputLabel>Email</InputLabel>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                          <TextField
                            value={email}
                            type="email"
                            required={true}
                            onChange={(e) => {
                              SetEmail(e.target.value);
                              validateemail(e.target.value);
                            }}
                            alignItems="center"
                            error={emailerror}
                            size="small"
                            sx={{
                              background: "white",
                              marginLeft: "3%",
                              borderRadius: "15px",
                              "& fieldset": {
                                borderRadius: "10px",
                                borderWidth: "2px",
                                fontFamily: "roboto",
                              },
                              width: "100%",
                            }}
                          ></TextField>
                          {emailerror && (
                            <Typography sx={{ fontSize: "10px", color: "red" }}>
                              Enter Valid Email
                            </Typography>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item sm={12}>
                      <Grid
                        container
                        width={"60%"}
                        sx={{
                          marginLeft: "15%",
                          alignItems: "center",
                          padding: "10px",
                        }}
                      >
                        <Grid item md={6} sm={12} xs={12}>
                          <InputLabel>Work Location</InputLabel>
                        </Grid>

                        <Grid item md={6} sm={12} xs={12}>
                          <TextField
                            value={worklocation}
                            type="text"
                            required={true}
                            onChange={(e) => {
                              SetWorklocation(e.target.value);
                              validlocation(e.target.value);
                            }}
                            alignItems="center"
                            error={worklocationeerror}
                            size="small"
                            sx={{
                              background: "white",
                              marginLeft: "3%",
                              borderRadius: "15px",
                              "& fieldset": {
                                borderRadius: "10px",
                                borderWidth: "2px",
                                fontFamily: "roboto",
                              },
                              width: "100%",
                            }}
                          ></TextField>
                        </Grid>
                      </Grid>
                      <Grid item sm={12}>
                        <Grid
                          container
                          width={"60%"}
                          sx={{
                            marginLeft: "15%",
                            alignItems: "center",
                            padding: "10px",
                          }}
                        >
                          <Grid item md={6} sm={12} xs={12}>
                            <InputLabel>
                              Replace Admin No<br></br>(if substitute)
                            </InputLabel>
                          </Grid>

                          <Grid item md={6} sm={12} xs={12}>
                            <TextField
                              value={substitute}
                              type="text"
                              onChange={(e) => {
                                SetSubstitute(e.target.value);
                              }}
                              alignItems="center"
                              size="small"
                              sx={{
                                background: "white",
                                marginLeft: "3%",
                                borderRadius: "15px",
                                "& fieldset": {
                                  borderRadius: "10px",
                                  borderWidth: "2px",
                                  fontFamily: "roboto",
                                },
                                width: "100%",
                              }}
                            ></TextField>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      sm={12}
                      sx={{
                        marginLeft: { md: "60%", xs: "20%" },
                        marginBottom: "2%",
                      }}
                    >
                      <Button type="submit" variant="contained">
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </form>
      </Box>
    </ThemeProvider>
  );
};
export default PrimaryAddAdmin;
