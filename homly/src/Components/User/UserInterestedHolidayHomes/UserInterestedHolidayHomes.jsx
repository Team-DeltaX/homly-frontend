import React, { useState, useEffect } from "react";
import { ThemeProvider, Stack, Box, Divider, Typography } from "@mui/material";
import axios from "axios";

import theme from "../../../HomlyTheme";

import "react-multi-carousel/lib/styles.css";
import HHCarouselforInterest from "../Carousel/HHCarouselforInterest";

const UserInterestedHolidayHomes = ({ setIsDisplayInterest }) => {
  const [interestedHH, setInterestedHH] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3002/users/holidayhomes/sort", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.interested) {
          console.log(res.data.interested_hh);
          setInterestedHH(res.data.interested_hh);
          setIsDisplayInterest(true);
        } else {
          setIsDisplayInterest(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ margin: "3% 0" }}>
        <Stack direction="column" sx={{ margin: "3% 0" }}>
          <Typography
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.8rem" },
              fontWeight: "bold",
            }}
          >
            Top Rated Holiday Homes
          </Typography>

          <Divider
            sx={{
              width: "80%",
              borderBottomWidth: "2px",
              bgcolor: "#2c2c2c6e",
              ml: "10px",
            }}
          />
        </Stack>
        <Box>
          {interestedHH && (
            <HHCarouselforInterest interestedHH={interestedHH} />
          )}
        </Box>
      </Stack>
    </ThemeProvider>
  );
};

export default UserInterestedHolidayHomes;
