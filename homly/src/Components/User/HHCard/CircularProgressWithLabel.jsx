import React, { useState, useEffect } from "react";
import {
  CircularProgress,
  Typography,
  Box,
  Stack,
  ThemeProvider,
} from "@mui/material";
import theme from "../../../HomlyTheme";

const CircularProgressWithLabel = ({ label, value }) => {
  const [facility, setFacility] = useState();

  const changeFacilityName = (facility) => {
    switch (facility) {
      case "food_rating":
        return "food";
      case "value_for_money_rating":
        return "value for money";
      case "staff_rating":
        return "staff";
      case "location_rating":
        return "location";
      case "wifi_rating":
        return "wifi";
      case "furniture_rating":
        return "furniture";
      default:
        return facility;
    }
  };

  useEffect(() => {
    setFacility(changeFacilityName(label));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        sx={{ justifyContent: "center", alignItems: "center", width: "80px" }}
      >
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress variant="determinate" value={value} />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >
              {`${Math.round(value)}%`}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: { sm: "0.8rem" },
              fontWeight: "medium",
              textAlign: "center",
              height: "39px",
            }}
          >
            {facility}
          </Typography>
        </Box>
      </Stack>
    </ThemeProvider>
  );
};

export default CircularProgressWithLabel;
