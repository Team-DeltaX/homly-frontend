import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
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

// useEffect(() => {
//   axios
//     .get("http://localhost:3002/admin/auth/locationadmin/holidayhome/1709530965098")
//     .then((res) => {
//       if (res.data) {
//         setHolidayHomes(res.data);
//         if (res.data.length > 0) {
//           // Set default values to the first holiday home
//           setHolidayHomeName(res.data[0].name);
//           setHolidayHomeId(res.data[0].id);
//         }
//       } else {
//         console.log("No data found");
//       }
//     })
//     .catch(error => {
//       console.error('Error fetching holiday homes:', error);
//     });
// }, []);
export default function HolidayHomeDetails() {
  const refContactUS = useRef(null);
  useEffect(() => {
    AOS.init();
  }, []);
  const [room,setRoom] = useState([]);
  const [value, setValue] = useState({
    id: "",
    name: "",
    address: "",
    district: "",
    description: "",
    contactNo1: "",
    contactNo2: "",
    category: "",
    status: "",
    Gym: false,
    Kitchen: false,
    Park: false,
    Wifi: false,
    Pool: false,
    Bar: false,
    Facilities: null,
    food_rating: 0,
    value_for_money_rating: 0,
    staff_rating: 0,
    location_rating: 0,
    furniture_rating: 0,
    wifi_rating: 0,
    overall_rating: 0,
  });
  const homeId = "1710317323947";
  // const { homeId } = useParams();
  useEffect(() => {
    axios
      .get(
        `http://localhost:3002/admin/auth/locationadmin/holidayhome/${homeId}`,
        { withCredentials: true }
      )
      .then((res) => {
        console.log("response", res.data.room);
        if (Response) {
          const homeDetails = res.data.homeDetails[0];
          const contactNo = res.data.contactNo;
          setRoom(res.data.room);

          // Extract relevant data from response and set to 'value' state
          setValue({
            id: homeDetails.HolidayHomeId || "",
            name: homeDetails.Name || "",
            address: homeDetails.Address || "",
            district: "Kegalle", // Add the logic to get district if available
            description: homeDetails.Description || "",
            contactNo1:
              contactNo && contactNo.length > 0 ? contactNo[0].ContactNo : "",
            contactNo2:
              contactNo && contactNo.length > 1 ? contactNo[1].ContactNo : "",
            category: homeDetails.Category || "",
            status: homeDetails.Status || "",
            Gym: homeDetails.Gym === "0" ? false : true,
            Kitchen: homeDetails.Kitchen  === "0" ? false : true,
            Park: homeDetails.Park === "0" ? false : true,
            Wifi: homeDetails.Wifi === "0" ? false : true,
            Pool: homeDetails.Pool === "0" ? false : true,
            Bar: homeDetails.Bar === "0" ? false : true,

          });
        } else {
          console.log("No data found");
        }
      })
      .catch((error) => {
        console.error("Error fetching holiday homes:", error);
      });
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
                <Typography variant="h4" sx={{fontWeight:"550", textTransform:'uppercase'}}>
                  {value.name} 
                </Typography>
                <Typography variant="button" sx={{color:'#823', ml:'1%', fontSize:'1rem'}}>
                  {value.category}
                </Typography> 
              </Grid>
              <Grid md={4}>
                <AddReservationPopUp name={value.name} id={value.id} room={room}/>
              </Grid>
              <Grid md={12}>
                <HolidayHomeGrid />
              </Grid>

              <Grid md={8}>
                <Stack spacing={2}>
                  <Stack spacing={2} direction="row">
                    <Box sx={{ width: 1 / 6 }}>
                      <Button variant="outlined" fullWidth disabled={!value.Gym}>
                        Gym
                      </Button>
                    </Box>
                    <Box sx={{ width: 1 / 6 }}>
                      <Button variant="outlined" fullWidth disabled={!value.Kitchen}>
                        Kitchen
                      </Button>
                    </Box>
                    <Box sx={{ width: 1 / 6 }}>
                      <Button variant="outlined" fullWidth disabled={!value.Park}>
                        Park
                      </Button>
                    </Box>
                    <Box sx={{ width: 1 / 6 }}>
                      <Button variant="outlined" fullWidth disabled={!value.Wifi}>
                        Wi-fi
                      </Button>
                    </Box>
                    <Box sx={{ width: 1 / 6 }}>
                      <Button variant="outlined" fullWidth disabled={!value.Bar}>
                        Bar
                      </Button>
                    </Box>
                    <Box sx={{ width: 1 / 6 }}>
                      <Button variant="outlined" fullWidth disabled={!value.Pool}>
                        Pool
                      </Button>
                    </Box>
                  </Stack>

                  <Typography variant="subtitle1" gutterBottom>
                    {value.description}
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
                        <Button variant="contained" style={{ float: "right" }}>
                          5.0
                        </Button>
                      </Grid>
                      <Grid>
                        <BorderLinearProgress
                          variant="determinate"
                          value={50}
                        />
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
