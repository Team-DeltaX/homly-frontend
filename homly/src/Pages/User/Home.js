import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  ThemeProvider,
  Stack,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import NavBar from "../../Components/NavBar/NavBar";
import theme from "../../HomlyTheme";
// import MyReservationCard from "../../Components/MyReservationCard/MyReservationCard";

import DatePickerCom from "../../Components/User/DatePickerCom/DatePickerCom";

import "./UserStyle.css";

const reservedDates = [
  "2024/01/27",
  "2024/01/28",
  "2024/02/04",
  "2024/02/05",
  "2024/01/30",
  "2024/02/07",
];

const districts = [
  "Colombo",
  "Gampaha",
  "Kalutara",
  "Kandy",
  "Matale",
  "Nuwara Eliya",
  "Galle",
  "Matara",
  "Hambantota",
  "Jaffna",
  "Mannar",
  "Vavuniya",
  "Mullaitivu",
  "Kilinochchi",
  "Batticaloa",
  "Ampara",
  "Trincomalee",
  "Kurunegala",
  "Puttalam",
  "Anuradhapura",
  "Polonnaruwa",
  "Badulla",
  "Monaragala",
  "Ratnapura",
  "Kegalle",
];

export default function Home() {
  const [selectionRange, setSelectRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [district, setDistrict] = useState("");

  const [isVisible, setIsVisible] = useState(true);

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
                height: "100vh",
                width: { xs: "100%", sm: "95%", padding: 0 },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Box
                  component="img"
                  src="https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg"
                  alt="top-image"
                  sx={{ width: "100%", height: "50vh", objectFit: "cover" }}
                />
                <Stack
                  direction="column"
                  sx={{
                    position: "absolute",
                    height: "50vh",
                    width: "100%",
                    bgcolor: "#ffa07d5c",
                    top: 0,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Stack
                    direction="column"
                    sx={{ color: "white", fontWeight: 700 }}
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
                    sx={{ width: { xs: "100%", sm: "75%" } }}
                  >
                    <Typography variant="h5">Find</Typography>
                    <Grid
                      container
                      sx={{
                        bgcolor: "white",
                        width: "100%",
                        borderRadius: "40px",
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{ padding: "0 3% 0.5% 5%" }}
                      >
                        <Stack direction="column">
                          <Typography
                            sx={{ fontSize: "1rem", fontWeight: "bold" }}
                          >
                            Location
                          </Typography>
                          <FormControl variant="standard">
                            <Typography
                              sx={{
                                display: isVisible ? "flex" : "none",
                                fontSize: "0.7rem",
                                fontWeight: "regular",
                                position: "absolute",
                                bottom: "5px",
                              }}
                            >
                              Which district do you prefer
                            </Typography>
                            <Select
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
                            </Select>
                          </FormControl>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ padding: "0 3%" }}>
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
                      <Grid
                        item
                        md={2}
                        sx={{
                          padding: "0 1% 0 3%",
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
                          }}
                        >
                          <Typography
                            sx={{ display: { xs: "flex", sm: "none" } }}
                          >
                            Search
                          </Typography>
                          <SearchIcon
                            sx={{
                              color: "white",
                              fontSize: { sm: "2.5rem" },
                              fontWeight: "bold",
                            }}
                          />
                        </Stack>
                      </Grid>
                    </Grid>
                  </Stack>
                </Stack>
                <Box></Box>
                <Typography variant="h4" color="initial">
                  Top Rated Holiday Homes
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" color="initial">
                  our places - 5 districts
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" color="initial">
                  Browse for More holiday Homes
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" color="initial">
                  contactus/footer
                </Typography>
              </Box>
            </Container>
          </Container>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
