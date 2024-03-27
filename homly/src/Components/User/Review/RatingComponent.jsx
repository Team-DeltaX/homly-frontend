import React from "react";
import { Box, Rating, Typography, } from "@mui/material";
import {  styled } from "@mui/material/styles";

const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#872341",
    },
    "& .MuiRating-iconHover": {
      color: "#872341",
    },
  });

export const RatingComponent = ({
    lable,setValue,value
}) => {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">{lable}</Typography>
      <StyledRating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
};

export default RatingComponent;
