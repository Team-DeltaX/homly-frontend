import React, { useEffect, useState } from "react";
import {
  Box,
  ThemeProvider,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

import theme from "../../../HomlyTheme";
import AxiosClient from "../../../services/AxiosClient";
import FavoritesHHCard from "../HHCard/FavoritesHHCard";
import FavoritesHHCardSkeleton from "../Skeleton/FavoritesHHCardSkeleton";

const FavoritesHH = () => {
  const [favoritesHH, setFavoritesHH] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    AxiosClient.get("/user/auth/wishlist")
      .then((res) => {
        setFavoritesHH(res.data);
        setIsChanged(false);
        setShowSkeleton(false);
      })
      .catch(() => {
        setFavoritesHH([]);
        setShowSkeleton(false);
      });
  }, [isChanged]);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography sx={{ fontSize: { xs: "29px", sm: "34px" } }}>
          Favorites Holiday Homes
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: { xs: "3% 0 20% 0", sm: "3% 0 0 0" },
          }}
        >
          <Card
            sx={{
              width: { xs: "100%", sm: "90%" },
              height: { md: "480px" },
              minHeight: { xs: "300px", sm: "500px", md: "auto" },
              overflowY: "scroll",
              justifyContent: "center",
            }}
          >
            <CardContent
              sx={{ display: "flex", flexDirection: "column", padding: 0 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                {showSkeleton ? (
                  [1, 2, 3, 4].map((index) => {
                    return <FavoritesHHCardSkeleton key={index} />;
                  })
                ) : favoritesHH.length > 0 ? (
                  favoritesHH.map((hh) => (
                    <FavoritesHHCard
                      key={hh.HolidayHomeId}
                      HHID={hh.HolidayHomeId}
                      HHImage={hh.HHImage}
                      HHName={hh.Name}
                      HHLocation={hh.Address}
                      HHPrice={hh.TotalRental}
                      isWishListed={hh.isWishListed}
                      HHRating={hh.overall_rating}
                      setIsChanged={setIsChanged}
                    />
                  ))
                ) : (
                  <Box
                    sx={{
                      height: "100%",
                      width: "100%",
                      minHeight: { xs: "258px", sm: "458px", md: "450px" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "grey.500" }}>
                      No Favorites Holiday Homes
                    </Typography>{" "}
                  </Box>
                )}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default FavoritesHH;
