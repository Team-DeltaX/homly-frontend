import React from "react";
import { Box, Rating, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#872341",
  },
  "& .MuiRating-iconHover": {
    color: "#872341",
  },
});

export const RatingComponent = ({ label, setValue, value }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: {md:"center"},
        mt: "5px",
      }}
    >
      <Typography component="legend">{label}</Typography>
      <StyledRating
        name="simple-controlled"
        value={value}
        precision={0.5}
        max={10}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
};

export default RatingComponent;
