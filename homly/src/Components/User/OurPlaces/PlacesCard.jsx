import { Box, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import theme from "../../../HomlyTheme";

export default function PlacesCard(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          height: "175px",
          bgcolor: "primary.main",
          borderRadius: "10px",
          position: "relative",
          overflow: "hidden",
          boxShadow:10,
        }}
      >
        <Box
          component="img"
          src={props.img}
          alt=""
          sx={{ width: "100%", objectFit: "cover"}}
        />
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
            padding: "1rem",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(355deg, rgba(0,0,0,0.36074940229998254) 52%, rgba(0,0,0,1) 92%)",
          }}
        >
          <Typography>{props.name}</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
