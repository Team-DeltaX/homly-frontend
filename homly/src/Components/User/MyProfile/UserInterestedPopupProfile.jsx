import React, { useState, useEffect } from "react";
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
import ErrorSnackbar from "../ErrorSnackbar";
import theme from "../../../HomlyTheme";

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

export default function UserInterestedPopupProfile({
  open,
  setOpen,
  interests,
  setInterests,
  oldInterests,
}) {
  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });

  const [addInterest, setAddInterest] = useState([]);

  useEffect(() => {
    if (interests.length > 0) {
      setAddInterest(interests);
    }
  }, [interests]);

  const handleClose = () => {
    setOpen(false);
    setInterests(oldInterests);
  };

  const handleFormat = (event, newInterest) => {
    if (newInterest.length <= 3) {
      setInterests(newInterest);
    } else if (newInterest.length > 3) {
      setErrorStatus({
        ...errorStatus,
        isOpen: true,
        type: "warning",
        message: "You can select maximum 3 interests",
      });
    }
  };

  const handleSubmit = () => {
    if (addInterest.length < 3 && addInterest.length > 0) {
      setErrorStatus({
        ...errorStatus,
        isOpen: true,
        type: "warning",
        message: "Please select 3 interests",
      });
    } else if (addInterest.length === 3 || addInterest.length === 0) {
      setInterests(addInterest);
      setOpen(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} keepMounted onClose={handleClose}>
        <DialogTitle>
          Update Your Preferences: Edit Your Top 3 Preferred Facilities
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Need to make changes? No problem! Update your{" "}
            <span style={{ fontWeight: "bold" }}>
              top 3 favorite facilities
            </span>{" "}
            from the options below to ensure we continue to provide the best
            experience tailored to your needs.
          </DialogContentText>
          <Stack direction="column">
            <Box>
              <ToggleButtonGroup sx={{ flexWrap: "wrap", pt: 1 }}>
                {interests.map((interest, index) => (
                  <Stack direction="row" key={index}>
                    <Typography
                      sx={{ fontWeight: "bold", ml: 1, color: "#872341" }}
                    >
                      {index + 1}.
                    </Typography>
                    <ToggleButton
                      value={interest}
                      aria-label={interest}
                      style={styleSelected}
                      disabled
                    >
                      {interest}
                    </ToggleButton>
                  </Stack>
                ))}
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
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
          <Button onClick={handleSubmit}>Confirm</Button>
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
