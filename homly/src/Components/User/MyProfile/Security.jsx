import React, { useState, useEffect } from "react";
import {
  Box,
  ThemeProvider,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  CardActions,
} from "@mui/material";
import ErrorSnackbar from "../ErrorSnackbar";
import PasswordComGrid from "./PasswordComGrid";
import theme from "../../../HomlyTheme";
import AxiosClient from "../../../services/AxiosClient";

const Security = () => {
  const [password, setPassword] = useState({
    currentPass: "",
    newPass: "",
    confirmPass: "",
  });
  const [error, setError] = useState({
    currentPass: false,
    newPass: false,
    confirmPass: false,
  });

  const [isEnable, setIsEnable] = useState(false);
  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleCancel = () => {
    setPassword({ currentPass: "", newPass: "", confirmPass: "" });
    setError({ currentPass: false, newPass: false, confirmPass: false });
  };

  const handleUpdateData = () => {
    if (passwordStrength > 1) {
      const formData = {
        oldPassword: password.currentPass,
        newPassword: password.newPass,
      };
      AxiosClient.put("/user/auth/password", formData)
        .then((res) => {
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
        })
        .catch((err) => {
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "error",
            message: err.message,
          });
        });
      setPassword({ currentPass: "", newPass: "", confirmPass: "" });
    }
  };

  useEffect(() => {
    setIsEnable(
      password.currentPass.length > 0 &&
        password.newPass.length > 0 &&
        password.confirmPass.length > 0 &&
        !error.confirmPass &&
        !error.password &&
        passwordStrength > 1
    );
  }, [password, error, passwordStrength]);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography variant="h4">Security</Typography>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: { xs: "3% 0 20% 0", sm: "3% 0 0 0" },
          }}
        >
          <Card sx={{ width: { xs: "100%", sm: "90%" } }}>
            <form action="">
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Stack direction="column" sx={{ width: "100%" }}>
                  <PasswordComGrid
                    lable={"Current Password"}
                    placeholder={"Current Password"}
                    helperText={""}
                    error={error.currentPass}
                    password={password.currentPass}
                    setPassword={(e) =>
                      setPassword({ ...password, currentPass: e })
                    }
                    isCheck={false}
                  />
                  <PasswordComGrid
                    lable={"New Password"}
                    placeholder={"New Password"}
                    helperText={""}
                    error={error.newPass}
                    password={password.newPass}
                    setPassword={(e) =>
                      setPassword({ ...password, newPass: e })
                    }
                    confirmPassword={password.confirmPass}
                    isCheck={true}
                    setErrorConfirmPassword={(e) =>
                      setError({ ...error, confirmPass: e })
                    }
                    setPasswordStrength={setPasswordStrength}
                  />

                  <PasswordComGrid
                    lable={"Confirm Password"}
                    placeholder={"Confirm New Password"}
                    helperText={
                      error.confirmPass ? "Password does not match" : ""
                    }
                    error={error.confirmPass}
                    password={password.confirmPass}
                    setPassword={(e) =>
                      setPassword({ ...password, confirmPass: e })
                    }
                    confirmPassword={password.newPass}
                    isCheck={true}
                    setErrorConfirmPassword={(e) =>
                      setError({ ...error, confirmPass: e })
                    }
                  />
                </Stack>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Stack direction={"row"} sx={{ justifyContent: "flex-end" }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "primary.main",
                      width: "70px",
                      marginRight: "10px",
                    }}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ backgroundColor: "primary.main", width: "70px" }}
                    onClick={handleUpdateData}
                    disabled={!isEnable}
                  >
                    Update
                  </Button>
                </Stack>
              </CardActions>
            </form>
          </Card>
        </Box>
        <ErrorSnackbar
          isOpen={errorStatus.isOpen}
          type={errorStatus.type}
          message={errorStatus.message}
          setIsOpen={(value) =>
            setErrorStatus({ ...errorStatus, isOpen: value })
          }
        />
      </Box>
    </ThemeProvider>
  );
};

export default Security;
