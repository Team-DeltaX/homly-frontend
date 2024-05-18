import React, { useState, useContext } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  ThemeProvider,
  styled,
  Stack,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import BadgeIcon from "@mui/icons-material/Badge";
import PasswordIcon from "@mui/icons-material/Password";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import theme from "../../HomlyTheme";
import "./UserStyle.css";
import logo from "../../Assets/images/logo.png";
import wave from "../../Assets/images/wave.png";
import ForgetPasswordPopup from "../../Components/User/ForgetPassword/ForgetPasswordPopup";
import ErrorSnackbar from "../../Components/User/ErrorSnackbar";
import InputTextWithIcon from "../../Components/User/TextField/InputTextWithIcon";
import InputPasswordWithIcon from "../../Components/User/TextField/InputPasswordWithIcon";
import { AuthContext } from "../../Contexts/AuthContext";
import AxiosClient from "../../services/AxiosClient";

const Img = styled("img")({
  display: "block",
  width: "40%",
  height: "40%%",
  padding: "5%",
  filter: "drop-shadow(17px 18px 90px  #872341)",
});

const UserLogin = () => {
  const { setIsLogged, setAuthServiceNumber } =
    useContext(AuthContext);
  const [serviceNo, setServiceNo] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const Navigate = useNavigate();
  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { serviceNo, password };
    AxiosClient.post("/user/login", formData)
      .then((res) => {
        if (res.data.success) {
          setServiceNo("");
          setPassword("");
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "success",
            message: res.data.message,
          });
          setIsLogged(true);
          setAuthServiceNumber(serviceNo);
          sessionStorage.setItem("role", "User");
          sessionStorage.setItem("userId", serviceNo);
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("isLogged", true);
          sessionStorage.removeItem("selectedTab");
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
      .catch(() => {
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "error",
          message: `Something went wrong, Please try again later.`,
        });
      });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setServiceNo("");
    setPassword("");
  };

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
        <Container maxWidth="xl" style={{ padding: 0 }}>
          <ErrorSnackbar
            isOpen={errorStatus.isOpen}
            type={errorStatus.type}
            message={errorStatus.message}
            setIsOpen={(val) => setErrorStatus({ ...errorStatus, isOpen: val })}
          />
          <ForgetPasswordPopup open={open} setOpen={setOpen} />
          <Container className="registration-box-container">
            <Grid
              container
              sx={{
                backgroundColor: "#FEF2F4",
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
                    marginBottom: { xs: "20px", sm: 0 },
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
                        error={false}
                        helperText={""}
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
                      <Stack
                        direction="row"
                        sx={{
                          width: "90%",
                          justifyContent: "space-between",
                          marginTop: "20px",
                          flexWrap: "wrap-reverse",
                        }}
                      >
                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{
                            width: { xs: "100%", sm: "auto" },
                            marginTop: { xs: "10px", sm: 0 },
                          }}
                          component={Link}
                          to="/Admin/Login"
                        >
                          <Typography>Admin Login</Typography>
                          <ArrowForwardIosIcon
                            sx={{
                              fontSize: "1rem",
                              fontWeight: "bold",
                              marginLeft: "10px",
                            }}
                          />
                        </Button>
                        <Box
                          sx={{
                            width: { xs: "100%", sm: "auto" },
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
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
                      </Stack>
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
