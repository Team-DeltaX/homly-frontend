import React, { useState } from "react";
import {
  Container,
  Box,
  ThemeProvider,
  Typography,
  Stack,
  Button,
} from "@mui/material/";

import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import BadgeIcon from "@mui/icons-material/Badge";
import PasswordIcon from "@mui/icons-material/Password";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import InputTextWithIcon from "../Components/User/TextField/InputTextWithIcon";
import InputPasswordWithIcon from "../Components/User/TextField/InputPasswordWithIcon";
import ErrorSnackbar from "../Components/User/ErrorSnackbar";
import AdminChangePasswordPopup from "../Components/User/AdminChangePasswordPopup";
import theme from "../HomlyTheme";

import logo from "../Assets/images/logo.png";
import "./User/UserStyle.css";

export default function AdminLoginPage() {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");

  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });
  const Navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { adminId, password };
    axios
      .post(`${global.API_BASE_URL}/admin`, formData, { withCredentials: true })
      .then((res) => {
        if (res.data.success) {
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "success",
            message: res.data.message,
          });
          if (!res.data.verified) {
            setOpen(true);
          } else {
            if (res.data.role === "LocationAdmin") {
              Navigate("/Locationadmin/Dashboard");
            } else {
              Navigate("/Primaryadmin/Dashboard");
            }
            localStorage.setItem("userId", adminId);
            localStorage.setItem("token", res.data.token);
          }
          setPassword("");
        } else {
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "error",
            message: res.data.message,
          });
        }
      })
      .catch((err) => {
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "error",
          message: err.message,
        });
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "95vh",
          }}
        >
          <Stack
            direction="column"
            sx={{
              overflow: "hidden",
              bgcolor: "#FEF2F4",
              borderRadius: "10px",
              width: { xs: "95%", sm: "80%", md: "50%" },
              height: { xs: "auto", md: "60vh" },
              boxShadow:
                "6.3px 4.5px 7.1px rgba(0, 0, 0, 0.016), 17.5px 12.5px 19.7px rgba(0, 0, 0, 0.034), 42.2px 30.1px 47.3px rgba(0, 0, 0, 0.055),140px 100px 157px rgba(0, 0, 0, 0.08)",
            }}
          >
            <Stack
              direction="column"
              className="admin-login-page-grid-item-1"
              sx={{
                alignItems: "center",
                pading: "10px",
              }}
            >
              <Box component="img" src={logo} sx={{ width: "180px" }}></Box>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: "2rem",
                }}
              >
                Admin Login
              </Typography>
            </Stack>
            <Stack
              sx={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack
                direction="column"
                sx={{
                  width: { xs: "90%", sm: "70%" },
                  height: "90%",
                  padding: "20px",
                  justifyContent: "flex-end",
                }}
              >
                <form action="" onSubmit={handleSubmit}>
                  <Stack
                    direction="column"
                    sx={{
                      width: "100%",
                      alignItems: "center",
                      marginBottom: { xs: "2%", md: "10%" },
                    }}
                  >
                    <InputTextWithIcon
                      lable={"Admin ID"}
                      icon={<BadgeIcon />}
                      inputType={"text"}
                      error={false}
                      required={true}
                      inputValue={adminId}
                      setInputValue={setAdminId}
                    />
                    <InputPasswordWithIcon
                      lable={"Password"}
                      icon={<PasswordIcon sx={{ p: 0.25, ml: -0.5, mr: 1 }} />}
                      helperText={""}
                      error={false}
                      Password={password}
                      setPassword={setPassword}
                      ConfirmPassword={null}
                      checkConfirmPassword={null}
                      isCheck={false}
                    />
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{
                      width: "100%",
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
                        marginRight: { xs: 0, sm: "3%" },
                      }}
                      component={Link}
                      to="/"
                    >
                      <ArrowBackIosNewIcon
                        sx={{
                          fontSize: "1rem",
                          fontWeight: "bold",
                          marginRight: "10px",
                        }}
                      />{" "}
                      <Typography>User Login</Typography>
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
                      <Button type="submit" variant="contained" color="primary">
                        Login
                      </Button>
                    </Box>
                  </Stack>
                </form>
              </Stack>
            </Stack>
          </Stack>
          <AdminChangePasswordPopup
            open={open}
            setOpen={setOpen}
            adminId={adminId}
            errorStatus={errorStatus}
            setErrorStatus={setErrorStatus}
          />
          {/* error snack bar */}
          <ErrorSnackbar
            isOpen={errorStatus.isOpen}
            type={errorStatus.type}
            message={errorStatus.message}
            setIsOpen={(val) => setErrorStatus({ ...errorStatus, isOpen: val })}
          />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
