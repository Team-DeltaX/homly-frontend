import React from "react";
import { ThemeProvider, Box, Typography } from "@mui/material";
import theme from "../../../HomlyTheme";
import ReviewCard from "./ReviewCard";

const Review = (hhid) => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant="h4"
          sx={{
            fontWeight: { xs: '350', sm: '400', md: '450' },
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.5rem' },  // Adjust the font sizes as needed
          }}
          gutterBottom
        >
          Review
        </Typography>
        <ReviewCard HolidayHomeId={hhid}/>
    </ThemeProvider>
  );
};

export default Review;
