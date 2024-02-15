import React, { useEffect } from "react";
import { useState } from "react";
import {
  Box,
  ThemeProvider,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Stack,
  Snackbar,
  Alert,
  CardActions,
} from "@mui/material";

import PasswordComGrid from "./PasswordComGrid";
import theme from "../../../HomlyTheme";

const gridData = [
  {
    id: "currentPass",
    lable: "Current Password",
    placeholder: "Enter Current Password",
  },
  { id: "newPass", lable: "New Password", placeholder: "Enter New Password" },
  {
    id: "confirmPass",
    lable: "Confirm New Password",
    placeholder: "Confirm New Password",
  },
];

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
  const [isUpdate, setIsUpdate] = useState(false);

  const [isEnable, setIsEnable] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsUpdate(false);
  };

  const handleUpdateData = () => {
    // handleUpdate();
    console.log("update");
    setIsUpdate(true);
  };

  const handleCancel = () => {
    setPassword({ currentPass: "", newPass: "", confirmPass: "" });
    setError({ currentPass: false, newPass: false, confirmPass: false });
  };


  useEffect(() => {
    setIsEnable(
      password.currentPass.length > 0 &&
        password.newPass.length > 0 &&
        password.confirmPass.length > 0 &&
        !error.confirmPass &&
        !error.password
    );
  }, [password, error]);

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
                <Grid container sx={{ width: "100%" }} key={gridData[0].id}>
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
                  {/* <PasswordComGrid
                      lable={gridData[1].lable}
                      placeholder={gridData[1].placeholder}
                      password={password}
                      setPassword={setPassword}
                      error={error}
                      setError={setError}
                      checkConfirmPassword={checkConfirmPassword}
                    />
                    <PasswordComGrid
                      lable={gridData[2].lable}
                      placeholder={gridData[2].placeholder}
                      password={password}
                      setPassword={setPassword}
                      error={error}
                      setError={setError}
                      checkConfirmPassword={checkConfirmPassword}
                    /> */}
                </Grid>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Stack direction={"row"} sx={{ justifyContent: "flex-end" }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ backgroundColor: "primary.main", width: "70px" }}
                    onClick={handleCancel}
                    disabled={!isEnable}
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
                  <Snackbar
                    autoHideDuration={3000}
                    onClose={handleClose}
                    open={isUpdate}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="error"
                      variant="filled"
                      sx={{
                        width: "100%",
                        backgroundColor: "success.light",
                      }}
                    >
                      "Successfully Updated!"
                    </Alert>
                  </Snackbar>
                </Stack>
              </CardActions>
            </form>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Security;
