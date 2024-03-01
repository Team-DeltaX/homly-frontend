import React from "react";
import { ThemeProvider, Stack, Box, Divider, Typography } from "@mui/material";


import theme from "../../../HomlyTheme";

import "react-multi-carousel/lib/styles.css";
import HHCarouselforInterest from "../Carousel/HHCarouselforInterest";

const UserInterestedHolidayHomes = ({  interestedHH }) => {

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
            Your Perfect Stay Awaits: Discover Holiday Homes Aligned with Your Interests!
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
