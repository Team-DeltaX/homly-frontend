import React, { useState } from "react";
import { ThemeProvider, Grid, Stack, Typography } from "@mui/material";
import theme from "../../../HomlyTheme";
import DistrictSelectCom from "../DistrictSelectCom";
import DatePickerCom from "../DatePickerCom/DatePickerCom";
import SearchIcon from "@mui/icons-material/Search";
import dayjs from "dayjs";
import SearchResaltDrawer from "./SearchResaltDrawer";
import AxiosClient from "../../../services/AxiosClient";

const SearchBarHome = () => {
  const [dateValue, setDateValue] = useState([dayjs(), dayjs()]);
  const [district, setDistrict] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [searchedHH, setSearchedHH] = useState([]);

  const handleSearch = () => {
    setOpenDrawer(true);
    AxiosClient.get("/user/auth/holidayhomes/search", {
      params: {
        district: district,
        startDate: dateValue[0].format("YYYY-MM-DD"),
        endDate: dateValue[1].format("YYYY-MM-DD"),
      },
    })
      .then((res) => {
        console.log(res.data);
        setSearchedHH(res.data);
      })
      .catch(() => {
        setSearchedHH([]);
      });
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
