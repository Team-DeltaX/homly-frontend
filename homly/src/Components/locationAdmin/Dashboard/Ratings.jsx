import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AxiosClient from "../../../services/AxiosClient";
import CircularProgress from "@mui/material/CircularProgress";
import CircularRating from "./CircularRating";

const Ratings = ({ ratingCatogeries }) => {
  console.log("rating catogeries", ratingCatogeries);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        columnGap: "20px",
        margin: "3px",
        boxShadow: "0px 0px 2px 0px #555555",
        borderRadius: "10px",
        padding: "10px",
        margintop: "10px",
      }}
    >
      <Box>
        <Typography variant="h6">Ratings</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          marginTop: "1em",
          height: "140px",
          flexDirection: "column",
          backgroundColor: "#f5f5f5",
          padding: "10px 20px",
          borderRadius: "8px",
          gap: "1em",
          boxShadow:
            "rgba(50, 50, 93, 0.15) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.2) 0px 18px 36px -18px inset",
        }}
      >
        {ratingCatogeries.length === 0 ? (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Select A Holiday Home</Typography>
          </Box>
        ) : (
          <>
            <Box
              sx={{
                display: "flex",
                gap: "2em",
                justifyContent: "space-evenly",
              }}
            >
              {Object.entries(ratingCatogeries)
                .slice(0, 3)
                .map(([key, value]) => {
                  return <CircularRating title={key} value={value} />;
                })}
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "2em",
                justifyContent: "space-evenly",
              }}
            >
              {Object.entries(ratingCatogeries)
                .slice(3, 6)
                .map(([key, value]) => {
                  return <CircularRating title={key} value={value} />;
                })}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
export default Ratings;
