import React from "react";
import { ThemeProvider, Card, Stack, Box, Typography } from "@mui/material";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import StarIcon from "@mui/icons-material/Star";
import theme from "../../../HomlyTheme";
import "./HolidayHomeCard.css";

export default function HolidayHomeCard({
  HHImage,
  HHName,
  HHLocation,
  HHPrice,
  HHRating,
  showInterest,
  interst1_lable,
  interst1_value,
  interst2_lable,
  interst2_value,
  interst3_lable,
  interst3_value,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          width: "257px",
          height: showInterest ?"340px":"309px",
          position: "relative",
          margin: "0 20px",
          borderRadius: "20px",
          boxShadow: "12px 1px 30px -18px rgba(0,0,0,0.75)",
        }}
      >
        <Box
          component="img"
          src={HHImage}
          alt="Holiday Home Image"
          sx={{
            height: "219px",
            width: "100%",
          }}
        />
        <Box sx={{ width: "100%", height: "90px", padding: "0 4%" }}>
          <Stack direction="column">
            <Stack
              direction="row"
              sx={{ justifyContent: "space-between", alignItem: "center" }}
            >
              <Typography
                sx={{ fontSize: { sm: "1.2rem" }, fontWeight: "medium" }}
              >
                {HHName}
              </Typography>
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <StarIcon sx={{ color: "primary.main" }} />
                <Typography sx={{ fontWeight: "medium" }}>
                  {HHRating}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              sx={{ display: showInterest ? "flex" : "none", padding:"8.5px" }}
            >
              <CircularProgressWithLabel  label={interst1_lable} value={interst1_value} />
              <CircularProgressWithLabel  label={interst2_lable} value={interst2_value} />
              <CircularProgressWithLabel  label={interst3_lable} value={interst3_value} />
     
            </Stack>
            <Typography sx={{display: !showInterest ? "flex" : "none"}}>{HHLocation}</Typography>
            <Stack direction="row" sx={{ display: !showInterest ? "flex" : "none",alignItems: "baseline" }}>
              <Typography
                sx={{
                  fontWeight: "medium",
                  color: "primary.main",
                  fontSize: { sm: "1rem" },
                  marginRight: "5px",
                }}
              >
                LKR
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "primary.main",
                  fontSize: { sm: "1.2rem" },
                }}
              >
                {HHPrice}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Card>
    </ThemeProvider>
  );
}
