import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider, Card, Stack, Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AxiosClient from "../../../services/AxiosClient";
import theme from "../../../HomlyTheme";
import ConfirmPopup from "../../PrimaryAdmin/ConfirmPopup";
const FavoritesHHCard = ({
  HHID,
  HHImage,
  HHName,
  HHLocation,
  HHPrice,
  isWishListed,
  HHRating,
  setIsChanged,
}) => {
  const [isFavorites, setIsFavorites] = useState(isWishListed);
  const [open, setOpen] = useState(false);
  const handleFavorites = (e) => {
    e.preventDefault();
    if (isFavorites) {
      setOpen(true);
    } else {
      AxiosClient.post("/user/auth/wishlist", { holidayHomeId: HHID })
        .then(() => {
          setIsFavorites(true);
        })
        .catch(() => {
          setIsFavorites(false);
        });
    }
  };

  const handleRemoveFavorites = () => {
    if (isFavorites) {
      setIsFavorites(!isFavorites);
      AxiosClient.delete("/user/auth/wishlist", {
        data: { holidayHomeId: HHID },
      })
        .then(() => {
          setIsFavorites(false);
          setIsChanged(true);
        })
        .catch(() => {
          setIsFavorites(true);
        });
    }
    setOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        component={Link}
        to={`/HolidayHomeDetails/${HHID}`}
        sx={{ textDecoration: "none", marginBottom: "20px" }}
      >
        <Card
          sx={{
            width: { xs: "300px", sm: "400px", md: "500px" },
            height: "209px",
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
                zIndex: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {isFavorites ? (
                <FavoriteIcon
                  onClick={(e) => {
                    handleFavorites(e);
                  }}
                  sx={{ cursor: "pointer !important" }}
                />
              ) : (
                <FavoriteBorderIcon
                  onClick={(e) => {
                    handleFavorites(e);
                  }}
                  sx={{ cursor: "pointer !important" }}
                />
              )}
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "0",
                right: "0",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(124deg, rgba(2,0,36,0) 0%, rgba(0,0,5,0.40948879551820727) 5%, rgba(0,0,0,0.7344187675070029) 52%, rgba(0,0,0,0.7876400560224089) 65%)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                padding: "10px",
                color: "white",
                zIndex: 1,
                display: "flex",
                height: "95%",
                width: "100%",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "space-between",
              }}
            >
              <Stack>
                <Typography sx={{ fontWeight: "medium", fontSize: "1.5rem" }}>
                  {HHName.toUpperCase()}
                </Typography>
                <Typography variant="body1">{HHLocation}</Typography>
              </Stack>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Stack direction="row" sx={{ alignItems: "center" }}>
                  <StarIcon />
                  <Typography
                    sx={{ fontWeight: "medium", margin: "3px 0 0 5px" }}
                  >
                    {HHRating.toFixed(1)}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  sx={{
                    alignItems: "baseline",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "medium",
                      fontSize: { sm: "1rem" },
                      marginRight: "5px",
                    }}
                  >
                    LKR
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { sm: "1.2rem" },
                    }}
                  >
                    {HHPrice}
                  </Typography>
                </Stack>
              </Stack>
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
        </Card>
      </Box>
      <ConfirmPopup
        open={open}
        setOpen={setOpen}
        title="Are you sure?"
        text="Are you sure you want to remove this from your favoritess list?"
        controlfunction={handleRemoveFavorites}
      />
    </ThemeProvider>
  );
};

export default FavoritesHHCard;
