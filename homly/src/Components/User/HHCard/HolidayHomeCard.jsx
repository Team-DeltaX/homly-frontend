import React, { useEffect, useState } from "react";
import { ThemeProvider, Card, Stack, Box, Typography } from "@mui/material";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import theme from "../../../HomlyTheme";
import AxiosClient from "../../../services/AxiosClient";
import ConfirmationBox from "../../Common/ConfirmationBox";

export default function HolidayHomeCard({
  HHID,
  HHImage,
  HHName,
  HHLocation,
  HHPrice,
  HHRating,
  showInterest,
  isWishListed,
  interst1_lable,
  interst1_value,
  interst2_lable,
  interst2_value,
  interst3_lable,
  interst3_value,
}) {
  const [isFavorite, setIsFavorite] = useState(isWishListed);
  const [open, setOpen] = useState(false);
  const [isOK, setIsOK] = useState(false);

  useEffect(() => {
    if (isOK && isFavorite) {
      setIsFavorite(!isFavorite);
      AxiosClient.delete("/user/auth/wishlist", {
        data: { holidayHomeId: HHID },
      })
        .then(() => {
          setIsFavorite(false);
        })
        .catch(() => {
          setIsFavorite(true);
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOK]);
  const handleFavorite = (e) => {
    e.preventDefault();
    if (isFavorite) {
      setOpen(true);
    } else {
      AxiosClient.post("/user/auth/wishlist", { holidayHomeId: HHID })
        .then(() => {
          setIsFavorite(true);
        })
        .catch(() => {
          setIsFavorite(false);
        });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        component={Link}
        to={`/HolidayHomeDetails/${HHID}`}
        sx={{ textDecoration: "none" }}
      >
        <Card
          sx={{
            width: "257px",
            height: showInterest ? "340px" : "309px",
            position: "relative",
            margin: "0 20px",
            borderRadius: "20px",
            boxShadow: "12px 1px 30px -18px rgba(0,0,0,0.75)",
            textDecoration: "none !important",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                top: "5px",
                right: "5px",
                backgroundColor: "#ffffff",
                color: "#fc6c85",
                padding: "10px",
                borderRadius: "50%",
                zIndex: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {isFavorite ? (
                <FavoriteIcon
                  onClick={(e) => {
                    handleFavorite(e);
                  }}
                  sx={{ cursor: "pointer !important" }}
                />
              ) : (
                <FavoriteBorderIcon
                  onClick={(e) => {
                    handleFavorite(e);
                  }}
                  sx={{ cursor: "pointer !important" }}
                />
              )}
            </Box>
            <Box
              component="img"
              src={HHImage}
              alt="Holiday Home Image"
              sx={{
                height: "219px",
                width: "100%",
              }}
            />
          </Box>
          <Box sx={{ width: "100%", height: "90px", padding: "0 4%" }}>
            <Stack direction="column">
              <Stack
                direction="row"
                sx={{ justifyContent: "space-between", alignItem: "center" }}
              >
                <Typography
                  sx={{ fontSize: { sm: "1.2rem" }, fontWeight: "medium" }}
                >
                  {HHName.toUpperCase()}
                </Typography>
                <Stack direction="row" sx={{ alignItems: "center" }}>
                  <StarIcon sx={{ color: "primary.main" }} />
                  <Typography
                    sx={{ fontWeight: "medium", margin: "3px 0 0 5px" }}
                  >
                    {HHRating.toFixed(1)}
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                sx={{
                  display: showInterest ? "flex" : "none",
                  padding: "8.5px",
                }}
              >
                <CircularProgressWithLabel
                  label={interst1_lable}
                  value={interst1_value}
                />
                <CircularProgressWithLabel
                  label={interst2_lable}
                  value={interst2_value}
                />
                <CircularProgressWithLabel
                  label={interst3_lable}
                  value={interst3_value}
                />
              </Stack>
              <Typography sx={{ display: !showInterest ? "flex" : "none" }}>
                {HHLocation}
              </Typography>
              <Stack
                direction="row"
                sx={{
                  display: !showInterest ? "flex" : "none",
                  alignItems: "baseline",
                }}
              >
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
      </Box>
      <ConfirmationBox
        open={open}
        setOpen={setOpen}
        title="Are you sure?"
        content="Are you sure you want to remove this from your wishlist?"
        setIsOK={setIsOK}
      />
    </ThemeProvider>
  );
}
