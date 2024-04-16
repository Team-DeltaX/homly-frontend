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
import FavouriteHHCard from "../HHCard/FavouriteHHCard";

const FavouriteHH = () => {
  const [favouriteHH, setFavouriteHH] = useState([]);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    AxiosClient.get("/user/auth/wishlist")
      .then((res) => {
        setFavouriteHH(res.data);
        setIsChanged(false);
      })
      .catch(() => {
        setFavouriteHH([]);
      });
  }, [isChanged]);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography sx={{ fontSize: { xs: "29px", sm: "34px" } }}>
          Favourite Holiday Homes
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
                  justifyContent: "center",
                }}
              >
                {favouriteHH.length > 0 ? (
                  favouriteHH.map((hh) => (
                    <FavouriteHHCard
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
                  <Typography variant="h6">
                    No Favourite Holiday Homes
                  </Typography>
                )}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default FavouriteHH;
