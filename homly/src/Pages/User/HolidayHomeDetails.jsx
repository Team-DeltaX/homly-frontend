import React, { useRef, useEffect } from "react";
import {
  Paper,
  Container,
  Box,
  ThemeProvider,
  Pagination,
} from "@mui/material";
import NavBar from "../../Components/User/NavBar/NavBar";
import Footer from "../../Components/User/Footer/Footer";
import theme from "../../HomlyTheme";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fontsource/roboto/400.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SimpleMap from "../../Components/Common/MapContainer";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import MainHolidayHomePhoto from "../../Components/User/HolidayHomeDetailsGrid/MainHolidayHomePhoto";

// import MainHolidayHomePhoto from '../../Components/User/HolidayHomeDetailsGrid/MainHolidayHomePhoto';
import HolidayHomeGrid from "../../Components/User/HolidayHomeDetailsGrid/HolidayHomeGrid";
import AddReservationPopUp from "../../Components/Reservations/AddReservationPopUp";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function HolidayHomeDetails() {
  const refContactUS = useRef(null);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" style={{ padding: 0 }}>
          <NavBar refContactUS={refContactUS} />
          <Container
            maxWidth="lg"
            sx={{
              bgcolor: "white",
              marginTop: { xs: "20px", sm: "10px", ms: "0" },
            }}
          >
            <Grid container spacing={2}>
              <Grid md={8}>
                <Typography variant="h4" gutterBottom>
                  Holiday Home Name
                  
                </Typography>
              </Grid>
              <Grid md={4}>
                <AddReservationPopUp />
              </Grid>
              <Grid md={12}>
                <HolidayHomeGrid />
              </Grid>

              <Grid md={8}>
                <Stack spacing={2}>
                  <Stack spacing={2} direction="row">
                    <Box sx={{ width: 1 / 6 }}>
                      <Button variant="outlined" fullWidth>
                        Gym
                      </Button>
                    </Box>
                    <Box sx={{ width: 1 / 6 }}>
                      <Button variant="outlined" fullWidth>
                        Kitchen
                      </Button>
                    </Box>
                    <Box sx={{ width: 1 / 6 }}>
                      <Button variant="outlined" fullWidth>
                        Park
                      </Button>
                    </Box>
                    <Box sx={{ width: 1 / 6 }}>
                      <Button variant="outlined" fullWidth>
                        Wi-fi
                      </Button>
                    </Box>
                    <Box sx={{ width: 1 / 6 }}>
                      <Button variant="outlined" fullWidth disabled>
                        Bar
                      </Button>
                    </Box>
                    <Box sx={{ width: 1 / 6 }}>
                      <Button variant="outlined" fullWidth>
                        Pool
                      </Button>
                    </Box>
                  </Stack>

                  <Typography variant="subtitle1" gutterBottom>
                    Discover the epitome of relaxation at Serene Haven - your idyllic holiday sanctuary. Nestled amidst lush greenery, our cozy accommodations offer the perfect escape. Unwind in comfort, explore nearby adventures, and create cherished memories. Book your stay now for an unforgettable retreat!
                  </Typography>
                </Stack>
              </Grid>
              <Grid md={4}>
                <SimpleMap />
              </Grid>
              <Stack spacing={4} width={"100%"}>
                <Typography variant="h5" gutterBottom>
                  Guest Feedbacks
                </Typography>
                <Box sx={{ width: "100%" }}>
                  <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item md={4}>
                      <Grid item md={8}>
                        Staff
                      </Grid>
                      <Grid item md={4}>
                        <Button variant="contained" style={{ float: "right" }}>5.0</Button>
                      </Grid>
                      <Grid>
                        <BorderLinearProgress variant="determinate" value={50} />
                      </Grid> 
                    </Grid>
                    <Grid item md={4}>
                      Accomodation
                      <BorderLinearProgress variant="determinate" value={50} />
                    </Grid>

                    <Grid item md={4}>
                      Food
                      <BorderLinearProgress variant="determinate" value={50} />
                    </Grid>

                    <Grid item xs={4}>
                      Location
                      <BorderLinearProgress variant="determinate" value={50} />
                    </Grid>

                    <Grid item xs={4}>
                      Electric Items
                      <BorderLinearProgress variant="determinate" value={50} />
                    </Grid>

                    <Grid item xs={4}>
                      Furnitures
                      <BorderLinearProgress variant="determinate" value={50} />
                    </Grid>
                  </Grid>
                </Box>

                <Item>Review</Item>
              </Stack>
            </Grid>
          </Container>
          <Box>
            <Footer refContactUS={refContactUS} />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
