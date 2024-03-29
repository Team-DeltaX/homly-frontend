import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  ThemeProvider,
  Box,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import ErrorSnackbar from "./ErrorSnackbar";
import theme from "../../HomlyTheme";

// change toggle button style
const style = {
  margin: "2px",
  border: "1px solid #872341",
  borderRadius: "50px",
  padding: "5px 30px",
};

const styleSelected = {
  margin: "2px",
  border: "1px solid #872341",
  borderRadius: "50px",
  padding: "5px 30px",
  backgroundColor: "#f8abc3",
};

export default function UserInterestedPopup({
  open,
  setOpen,
  setInterestsIsSubmited,
}) {
  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });

  const [interests, setInterests] = useState([]);
  const [error, setError] = useState("");

  const Navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormat = (event, newInterest) => {
    // select maximum 3 interests
    if (newInterest.length <= 3) {
      setInterests(newInterest);
    }
  };

  const handleSubmit = () => {
    let formData = {};

    if (interests.length < 3 && interests.length > 0) {
      setError("Select 3 interests to continue.");
    } else {
      if (interests.length === 3) {
        console.log("submitted", interests);
        formData = {
          fac1: interests[0],
          fac2: interests[1],
          fac3: interests[2],
        };
      } else {
        console.log("skipped");
        formData = {};
      }
      axios
        .post(`${global.API_BASE_URL}/users/auth/interested`, formData, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            setOpen(false);
            setInterestsIsSubmited(true);
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
          console.log(err);
          if (err.response.data.autherized === false) {
            Navigate("/");
          } else {
            setErrorStatus({
              ...errorStatus,
              isOpen: true,
              type: "error",
              message: "Server Error",
            });
          }
        });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} keepMounted onClose={handleClose}>
        <DialogTitle>Choose Your Interest</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Hello there! Let's customize your experience. Pick your top 3
            interests in order
          </DialogContentText>
          <Stack direction="column">
            <Box>
              <ToggleButtonGroup sx={{ flexWrap: "wrap" }}>
                {interests.map((interest, index) => {
                  return (
                    <ToggleButton
                      value={interest}
                      aria-label={interest}
                      style={styleSelected}
                      disabled
                    >
                      {interest}
                    </ToggleButton>
                  );
                })}
              </ToggleButtonGroup>
              <Divider
                sx={{
                  display: interests.length > 0 ? "block" : "none",
                  marginTop: "3px",
                }}
              />
            </Box>
            <Box sx={{ margin: "7px 0" }}>
              <ToggleButtonGroup
                value={interests}
                onChange={handleFormat}
                aria-label="interests facilities"
                sx={{
                  flexWrap: "wrap",

                  ".css-q9gk48-MuiButtonBase-root-MuiToggleButton-root.Mui-selected, .css-q9gk48-MuiButtonBase-root-MuiToggleButton-root.Mui-selected:hover":
                    {
                      backgroundColor: "#f8abc3",
                    },
                }}
              >
                <ToggleButton value="food" aria-label="food" style={style}>
                  Food
                </ToggleButton>
                <ToggleButton
                  value="location"
                  aria-label="location"
                  style={style}
                >
                  Location
                </ToggleButton>
                <ToggleButton value="wifi" aria-label="wifi" style={style}>
                  wifi
                </ToggleButton>
                <ToggleButton value="staff" aria-label="staff" style={style}>
                  Staff
                </ToggleButton>
                <ToggleButton
                  value="value for money"
                  aria-label="money"
                  style={style}
                >
                  Value For money
                </ToggleButton>
                <ToggleButton
                  value="furniture"
                  aria-label="furniture"
                  style={style}
                >
                  furniture
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
            <Typography color="error">{error}</Typography>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
          <Button onClick={handleSubmit}>
            {interests.length > 0 ? "Confirm" : "Skip"}
          </Button>
        </DialogActions>
      </Dialog>
      {/* error snack bar */}
      <ErrorSnackbar
        isOpen={errorStatus.isOpen}
        type={errorStatus.type}
        message={errorStatus.message}
        setIsOpen={(value) => setErrorStatus({ ...errorStatus, isOpen: value })}
      />
    </ThemeProvider>
  );
}
