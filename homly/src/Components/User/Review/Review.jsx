import React from "react";
import { ThemeProvider, Box, Typography } from "@mui/material";
import theme from "../../../HomlyTheme";
import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography>Review</Typography>
      <ReviewCard />
    </ThemeProvider>
  );
};

export default Review;
