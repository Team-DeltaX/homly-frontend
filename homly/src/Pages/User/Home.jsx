import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  Box,
  Typography,
  ThemeProvider,
  Stack,
  Grid,
  Divider,
} from "@mui/material";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

import NavBar from "../../Components/User/NavBar/NavBar";
import theme from "../../HomlyTheme";
// import MyReservationCard from "../../Components/MyReservationCard/MyReservationCard";

import DatePickerCom from "../../Components/User/DatePickerCom/DatePickerCom";
// import HolidayHomeCard from "../../Components/User/HHCard/HolidayHomeCard";

import "./UserStyle.css";
import Topbg from "../../Assets/images/LandingPageTop.png";
import DistrictSelectCom from "../../Components/User/DistrictSelectCom";
import OurPlaces from "../../Components/User/OurPlaces/OurPlaces";
import BrowseMoreCom from "../../Components/User/BrowseMore/BrowseMoreCom";
import Footer from "../../Components/User/Footer/Footer";
import HHCarousel from "../../Components/User/Carousel/HHCarousel";
import UserInterestedPopup from "../../Components/User/UserInterestedPopup";

import AOS from "aos";
import "aos/dist/aos.css";

const reservedDates = [
  "2024/01/27",
  "2024/01/28",
  "2024/02/04",
  "2024/02/05",
  "2024/01/30",
  "2024/02/07",
];

export default function Home() {
  const refContactUS = useRef(null);
  const [sortedByRating, setSortedByRating] = useState([]);
  const [selectionRange, setSelectRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [insterestedPopup, setInsterestedPopup] = useState(false);

  const Navigate = useNavigate();

  const [district, setDistrict] = useState("");
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    axios
      .get(`https://65ac00f8fcd1c9dcffc76f52.mockapi.io/homly/api/HolidayHomes`)
      .then((response) => {
        setSortedByRating(response.data);
      });

    axios
      .get("http://localhost:3002/users/auth/interested",{withCredentials:true})
      .then((response) => {
        if (response.data.updated) {
          setInsterestedPopup(false);
        } else {
          setInsterestedPopup(true);
        }
      })
      .catch((err) => {
        if (!err.response.data.autherized) {
          Navigate("/");
        } else {
          
          setInsterestedPopup(true);
        }
      });
    // APIData.sort((a, b) => b.rating - a.rating);
  }, []);

  useEffect(() => {
    sortedByRating.sort((a, b) => b.rating - a.rating);
  }, [sortedByRating]);

  // console.log(sortedByRating);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" style={{ padding: 0 }}>
          {/* navbar */}
          <NavBar refContactUS={refContactUS} />
          {/* user interested popup */}
          <UserInterestedPopup
            open={insterestedPopup}
            setOpen={setInsterestedPopup}
          />

          <Container
            maxWidth="lg"
            sx={{
              bgcolor: "white",
              marginTop: { xs: "20px", sm: "10px", ms: "0" },
            }}
          >
            <Container
              sx={{
                bgcolor: "white",
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
                <Stack sx={{ margin: "3% 0" }}>
                  <Stack direction="column" sx={{ margin: "3% 0" }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "1.2rem", sm: "1.8rem" },
                        fontWeight: "bold",
                      }}
                    >
                      Top Rated Holiday Homes
                    </Typography>

                    <Divider
                      sx={{
                        width: "80%",
                        borderBottomWidth: "2px",
                        bgcolor: "#2c2c2c6e",
                        ml: "10px",
                      }}
                    />
                  </Stack>
                  <Box>
                    <HHCarousel sortedByRating={sortedByRating} />
                  </Box>
                </Stack>
              </Box>

              <Stack sx={{ margin: "3% 0" }}>
                <Stack direction="column" sx={{ margin: "3% 0" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.2rem", sm: "1.8rem" },
                      fontWeight: "bold",
                    }}
                  >
                    Our Places
                  </Typography>
                  <Divider
                    sx={{
                      width: "80%",
                      borderBottomWidth: "2px",
                      bgcolor: "#2c2c2c6e",
                      ml: "10px",
                    }}
                  />
                </Stack>
                <OurPlaces />
              </Stack>
              <Stack
                data-aos="fade-left"
                data-aos-duration="900"
                sx={{ margin: "5% 0 0 0" }}
              >
                {/* browse more holiday homes */}
                <BrowseMoreCom />
              </Stack>
            </Container>
            <Container
              sx={{
                // height: "100vh",
                width: { xs: "100%", sm: "95%" },
                padding: 0,
                paddingLeft: 0,
                "& .css-185m5ur-MuiContainer-root": {
                  padding: 0,
                  paddingLeft: 0,
                },
              }}
            ></Container>
          </Container>
          <Box>
            <Footer refContactUS={refContactUS} />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
