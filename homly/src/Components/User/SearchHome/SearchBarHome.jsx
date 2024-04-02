import React, { useState } from "react";
import { ThemeProvider, Grid, Stack, Typography } from "@mui/material";
import theme from "../../../HomlyTheme";
import DistrictSelectCom from "../DistrictSelectCom";
import DatePickerCom from "../DatePickerCom/DatePickerCom";
import SearchIcon from "@mui/icons-material/Search";
import dayjs from "dayjs";
import SearchResaltDrawer from "./SearchResaltDrawer";
const SearchBarHome = () => {
  const [dateValue, setDateValue] = useState([dayjs(), dayjs()]);
  const [district, setDistrict] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [searchedHH, setSearchedHH] = useState([]);

  const handleSearch = () => {
    setOpenDrawer(true);
    console.log("searching");
    setSearchedHH([
      {
        name: "Holiday Home 1",
        description: "This is a holiday home",
        address: "No 1, Colombo",
        image:
          "https://images.adsttc.com/media/images/60e8/711c/f758/6e7f/c904/5c07/large_jpg/orangearchitects-holiday-home-04.jpg?1625846074",
      },
      {
        name: "Holiday Home 2",
        description: "This is a holiday home",
        address: "No 2, Colombo",
        image:
          "https://images.adsttc.com/media/images/60e8/711c/f758/6e7f/c904/5c07/large_jpg/orangearchitects-holiday-home-04.jpg?1625846074",
      },
      {
        name: "Holiday Home 3",
        description: "This is a holiday home",
        address: "No 3, Colombo",
        image:
          "https://aro-au-prod-storage.s3-ap-southeast-2.amazonaws.com/umbrella/medias/pic_1-61a712fb1f688.jpeg",
      }
    ]);
  };
  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        sx={{ width: { xs: "97%", sm: "90%", md: "75%" } }}
      >
        <Grid
          container
          sx={{
            bgcolor: "white",
            width: "100%",
            padding: { xs: "3%", sm: "1%" },
            borderRadius: { xs: "10px", sm: "40px" },
            display: "flex",
            alignItems: { xs: "center", sm: "flex-end" },
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} sm={4} sx={{ padding: { xs: "3%", sm: "0 3%" } }}>
            <DistrictSelectCom setDistrict={setDistrict} district={district} />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ padding: { xs: "3%", sm: "0 3%" } }}>
            <DatePickerCom value={dateValue} setValue={setDateValue} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={2}
            sx={{
              padding: { xs: "3%", sm: "0 1% 0 3%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Stack
              direction="row"
              sx={{
                bgcolor: "#484848",
                width: { xs: "100%", sm: "50px" },
                height: "50px",
                borderRadius: { xs: "10px", sm: "50%" },
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                cursor: "pointer",
                ":hover": { bgcolor: "#2c2c2c", transition: "0.5s" },
              }}
              onClick={handleSearch}
            >
              <Typography
                sx={{
                  display: { xs: "flex", sm: "none" },
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                Search
              </Typography>
              <SearchIcon
                sx={{
                  marginLeft: { xs: "5px", sm: "0" },
                  fontSize: { xs: "1.5rem", sm: "2.5rem" },
                  fontWeight: "bold",
                }}
              />
            </Stack>
          </Grid>
        </Grid>
        <Typography>dfgg</Typography>
        <SearchResaltDrawer
          open={openDrawer}
          setOpen={setOpenDrawer}
          searchedHH={searchedHH}
        />
      </Stack>
    </ThemeProvider>
  );
};

export default SearchBarHome;
