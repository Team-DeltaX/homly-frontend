import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  ThemeProvider,
  Stack,
  Grid,
  MenuItem,
  FormControl,
} from "@mui/material";
import axios from "axios";
// import Select from "react-select";
import SearchIcon from "@mui/icons-material/Search";

import NavBar from "../../Components/NavBar/NavBar";
import theme from "../../HomlyTheme";
// import MyReservationCard from "../../Components/MyReservationCard/MyReservationCard";

import DatePickerCom from "../../Components/User/DatePickerCom/DatePickerCom";
import HolidayHomeCard from "../../Components/User/HHCard/HolidayHomeCard";

import "./UserStyle.css";
import Topbg from "../../Assets/images/LandingPageTop.png";
import DistrictSelectCom from "../../Components/User/DistrictSelectCom";
import OurPlaces from "../../Components/User/OurPlaces/OurPlaces";
import BrowseMoreCom from "../../Components/User/BrowseMore/BrowseMoreCom";
import Footer from "../../Components/User/Footer/Footer";

const reservedDates = [
  "2024/01/27",
  "2024/01/28",
  "2024/02/04",
  "2024/02/05",
  "2024/01/30",
  "2024/02/07",
];

// const holidayHomes = [
//   {
//     id: 1,
//     name: "Holiday Home 1",
//     address: "No2, Colombo 1",
//     rating: 4.7,
//     price: 5000,
//   },
//   {
//     id: 2,
//     name: "Holiday Home 2",
//     address: "No2, Kuruneagala",
//     rating: 4.6,
//     price: 5000,
//     image: "https://picsum.photos/200",
//   },
//   {
//     id: 3,
//     name: "Holiday Home 3",
//     address: "Bandaranayaka Mawatha, Moratuwa",
//     rating: 4.6,
//     price: 5000,
//     image: "https://picsum.photos/200",
//   },
//   {
//     id: 4,
//     name: "Holiday Home 4",
//     address:'No 5,Nuwara Eliya',
//     rating: 5,
//     price: 5000,
//     image: "https://picsum.photos/200",
//   },
//   {
//     id: 5,
//     name: "Holiday Home 5",
//     address: "No2, Colombo 1",
//     rating: 4.4,
//     price: 5000,
//     image: "https://picsum.photos/200",
//   }

// ];

export default function Home() {
  const [APIData, setAPIData] = useState([]);
  const [sortedByRating, setSortedByRating] = useState([]);
  const [selectionRange, setSelectRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [district, setDistrict] = useState("");

  useEffect(() => {
    axios
      .get(`https://65ac00f8fcd1c9dcffc76f52.mockapi.io/homly/api/HolidayHomes`)
      .then((response) => {
        setAPIData(response.data);
        setSortedByRating(response.data);
      });
    // APIData.sort((a, b) => b.rating - a.rating);
  }, []);

  useEffect(() => {
    sortedByRating.sort((a, b) => b.rating - a.rating);
  }, [sortedByRating]);

  console.log(sortedByRating);
  // console.log(APIData[0].name)
  // const [isVisible, setIsVisible] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="main-container-homepage"
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" style={{ padding: 0 }}>
          <NavBar />
          <Container maxWidth="lg" sx={{ bgcolor: "chartreuse" }}>
            <Container
              sx={{
                bgcolor: "azure",
                // height: "100vh",
                width: { xs: "100%", sm: "95%", padding: 0 },
              }}
            >
              {/* top image with search bar */}
              <Box sx={{ position: "relative" }}>
                <Box
                  component="img"
                  src={Topbg}
                  alt="top-image"
                  sx={{ width: "100%", height: "50vh", objectFit: "cover" }}
                />
                <Stack
                  direction="column"
                  sx={{
                    position: "absolute",
                    height: "50vh",
                    width: "100%",
                    bgcolor: "#2c2c2ca3",
                    top: 0,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Stack
                    direction="column"
                    sx={{ color: "white", fontWeight: 700 }}
                    display={{ xs: "none", sm: "flex" }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "1.7rem", sm: "3rem" },
                      }}
                    >
                      Discover the perfect getaway
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "1.7rem", sm: "3rem" },
                      }}
                    >
                      with beautiful views
                    </Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    sx={{ width: { xs: "97%", sm: "90%", md: "75%" } }}
                  >
                    {/* <Typography variant="h5">Find</Typography> */}
                    <Grid
                      container
                      sx={{
                        bgcolor: "white",
                        width: "100%",
                        borderRadius: { xs: "10px", sm: "40px" },
                      }}
                    >
                      {/* location */}
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        sx={{ padding: { xs: "3%", sm: "0 3% 0.5% 5%" } }}
                      >
                        <Stack direction="column">
                          <Typography
                            sx={{ fontSize: "1rem", fontWeight: "bold" }}
                          >
                            Location
                          </Typography>
                          <DistrictSelectCom
                            setDistrict={setDistrict}
                            district={district}
                          />
                          {/* <Typography
                              sx={{
                                display: isVisible ? "flex" : "none",
                                fontSize: "0.7rem",
                                fontWeight: "regular",
                                position: "absolute",
                                bottom: "5px",
                              }}
                            >
                              Which district do you prefer
                            </Typography> */}

                          {/* <Select
                              size="small"
                              sx={{ width: "100%", position: "relative" }}
                              id="select-district"
                              value={district}
                              onChange={(e) => {
                                setDistrict(e.target.value);
                                setIsVisible(false);
                              }}
                            >
                              {districts.map((name) => (
                                <MenuItem
                                  key={name}
                                  value={name}
                                  // style={getStyles(name, personName, theme)}
                                >
                                  {name}
                                </MenuItem>
                              ))}
                            </Select> */}
                          {/* </FormControl> */}
                        </Stack>
                      </Grid>

                      {/* checkin-checkout */}
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        sx={{ padding: { xs: "3%", sm: "0 3%" } }}
                      >
                        {/* <Stack direction='column'>
                            <Typography>Location</Typography>
                            <Typography>Location</Typography>
                          </Stack>
                          <Stack direction='column'>
                            <Typography>Location</Typography>
                            <Typography>Location</Typography>
                          </Stack> */}
                        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={["DateRangePicker"]}>
                              <DateRangePicker
                                localeText={{
                                  start: "Check-in",
                                  end: "Check-out",
                                }}
                              />
                            </DemoContainer>
                          </LocalizationProvider> */}
                        <DatePickerCom
                          selectionRange={selectionRange}
                          setSelectRange={setSelectRange}
                          reservedDates={reservedDates}
                        />
                      </Grid>

                      {/* search */}
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
                          }}
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
                  </Stack>
                </Stack>
              </Box>

              {/* top rated holiday homes */}
              <Box>
                <Stack>
                  <Typography variant="h4" color="initial">
                    Top Rated Holiday Homes
                  </Typography>
                  <Box>
                    <Stack direction="row" spacing={2}>
                      {sortedByRating
                        .sort((a, b) => b.rating - a.rating)
                        .slice(0, 4)
                        .map((item) => (
                          <HolidayHomeCard
                            key={item.HHId}
                            HHName={item.name}
                            HHLocation={item.address}
                            HHPrice={item.price}
                            HHRating={item.rating}
                            HHImage={item.image}
                          />
                        ))}
                    </Stack>
                  </Box>
                </Stack>
              </Box>

              <Box>
                <Typography variant="h4" color="initial">
                  our places - 5 districts
                </Typography>
                <OurPlaces />
              </Box>
              <Box>
                <Typography variant="h4" color="initial">
                  Browse for More holiday Homes
                </Typography>
                <BrowseMoreCom />
              </Box>
            </Container>
            <Container
              sx={{
                bgcolor: "red",
                // height: "100vh",
                width: { xs: "100%", sm: "95%" },
                padding: 0,
                paddingLeft:0,
                "& .css-185m5ur-MuiContainer-root":{
                  padding:0,
                  paddingLeft:0
                }
              }}
            >
              <Box>
                
                <Footer />
              </Box>
            </Container>
          </Container>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
