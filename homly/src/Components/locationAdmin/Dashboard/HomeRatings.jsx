import { Avatar, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AxiosClient from "../../../services/AxiosClient";
import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Ratings from "./Ratings";

const HomeRating = (props) => {
  const [data, setData] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [count, setCount] = useState(1);
  const [ratingCatogeries, setRatingCatogeries] = useState([]);

  useEffect(() => {
    const getHolidayHomeRating = () => {
      AxiosClient.get(`admin/auth/locationadmin/holidayhomeratings`)
        .then((res) => {
          setData(res.data.ratings);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getHolidayHomeRating();
  }, []);

  useEffect(() => {
    const ordered = [...data].sort((a, b) => {
      return b[0].overall_rating - a[0].overall_rating;
    });
    setRatings(ordered);
  }, [data]);

  const handleOrder = () => {
    if (count % 2 === 0) {
      const ordered = [...ratings].sort((a, b) => {
        return b[0].overall_rating - a[0].overall_rating;
      });
      setRatings(ordered);
    } else {
      const ordered = [...ratings].sort((a, b) => {
        return a[0].overall_rating - b[0].overall_rating;
      });
      setRatings(ordered);
    }
    setCount(count + 1);
  };

  const handleClickRating = (homeId) => {
    AxiosClient.get(`admin/auth/locationadmin/ratingCatogeries/${homeId}`)
      .then((res) => {
        // console.log("rating cat", res.data.ratingCatogeries);
        setRatingCatogeries(res.data.ratingCatogeries);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box>
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
          marginBottom: "10px",
        }}
      >
        <Box>
          <Typography variant="h6">HolidayHome Ratings</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "1em ", marginTop: "1em" }}>
          <Box>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              startIcon={
                count % 2 === 0 ? (
                  <KeyboardDoubleArrowUpIcon />
                ) : (
                  <KeyboardDoubleArrowDownIcon />
                )
              }
              onClick={handleOrder}
            >
              Order
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "1em",
            height: "120px",
            overflowY: "scroll",
            backgroundColor: "#f5f5f5",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow:
              "rgba(50, 50, 93, 0.15) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.2) 0px 18px 36px -18px inset",
          }}
        >
          {ratings.length === 0 ? (
            <Typography>No ratings available</Typography>
          ) : (
            ratings.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1em",
                    marginBottom: "0.5em",
                    padding: "5px",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "#A9A9A9",
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => handleClickRating(item[0].HolidayHomeId)}
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    {item[0].Name}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography>{item[0].overall_rating.toFixed(2)}</Typography>
                    <StarIcon sx={{ fontSize: "18px", color: "#e5de00" }} />
                  </Box>
                </Box>
              );
            })
          )}
        </Box>
      </Box>
      <Ratings ratingCatogeries={ratingCatogeries} />
    </Box>
  );
};
export default HomeRating;
