import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  ThemeProvider,
  Stack,
  Grid,
} from "@mui/material";
// import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRangePicker } from 'react-date-range';

import NavBar from "../../Components/NavBar/NavBar";
import theme from "../../HomlyTheme";
// import MyReservationCard from "../../Components/MyReservationCard/MyReservationCard";

const reservedDates = [
'2024/01/27','2024/01/28','2024/02/01','2024/02/02','2024/02/03','2024/02/04'
];

export default function Home() {
  const [selectionRange,setSelectRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [disabledDates, setDisabledDates] = useState([]);
  function formatDate(string){
    var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}
  
  useEffect(() => {
    let updated = []
    reservedDates.map((date) => {
      let d = new Date(date);
      let dates = [d.getFullYear(),d.getMonth(),d.getDate()];
      updated.push(dates)
      // let updated = [...disabledDates,...dates]
      // setDisabledDates(updated)
      
      // console.log(date =>[...date,[d.getFullYear(),d.getMonth(),d.getDate()]]);
    });
    setDisabledDates(updated);
  }, []);

  console.log(disabledDates);
  // const disaabedDates = {
  //   date1: new Date(2024, 0,27),
  // };

  const handleSelect = (range) =>{
    console.log(range.selection); // native Date object
    setSelectRange({...selectionRange, startDate: range.selection.startDate, endDate: range.selection.endDate});
  }
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
                height: "100%",
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
                    sx={{ bgcolor: "white", width: "80%" }}
                  >
                    <Typography>Find</Typography>
                    <Grid
                      container
                      sx={{ bgcolor: "blueviolet", width: "100%" }}
                    >
                      <Grid item md={4}>
                        <Stack direction="column">
                          <Typography>Location</Typography>
                          <Typography>Location</Typography>
                        </Stack>
                      </Grid>
                      <Grid item md={6}>
                        <Stack direction="row">
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
                          <DateRangePicker
                          rangeColors={["#FF7F50"]}
                          disabledDates={[(2024,1,2)]}
                            ranges={[selectionRange]}
                            onChange={handleSelect}
                          />
                        </Stack>
                      </Grid>
                      <Grid item md={2}>
                        <Typography>Search</Typography>
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
