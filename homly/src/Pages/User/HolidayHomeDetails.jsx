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
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import StarIcon from "@mui/icons-material/Star";
import SimpleMap from "../../Components/Common/MapContainer";
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";
import { useParams } from "react-router-dom";
import AddReservationPopUp from "../../Components/Reservations/AddReservationPopUp";
import Review from "../../Components/User/Review/Review";
import AxiosClient from "../../services/AxiosClient";
import noImage from "../../Assets/images/no image.jpg";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#823" : "#823",
  },
}));
export default function HolidayHomeDetails() {
  const refContactUS = useRef(null);
  useEffect(() => {
    AOS.init();
  }, []);
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
    Facilities: "",
    food_rating: 0,
    value_for_money_rating: 0,
    staff_rating: 0,
    location_rating: 0,
    furniture_rating: 0,
    wifi_rating: 0,
    overall_rating: 0,
    MainImage: "",
    Image1: "",
    Image2: "",
  });
  const { homeId } = useParams();
  useEffect(() => {
    AxiosClient.get(`/user/auth/locationadmin/holidayhome/${homeId}`)
      .then((res) => {
        console.log("response", res.data);
        if (Response) {
          const homeDetails = res.data.homeDetails[0];
          const contactNo = res.data.contactNo;
          setValue({
            id: homeDetails.HolidayHomeId || "",
            name: homeDetails.Name || "",
            address: homeDetails.Address || "",
            district: homeDetails.District || "",
            description: homeDetails.Description || "",
            contactNo1:
              contactNo && contactNo.length > 0 ? contactNo[0].ContactNo : "",
            contactNo2:
              contactNo && contactNo.length > 1 ? contactNo[1].ContactNo : "",
            category: homeDetails.Category || "",
            status: homeDetails.Status || "",
            Gym: homeDetails.Gym === "0" ? false : true,
            Kitchen: homeDetails.Kitchen === "0" ? false : true,
            Park: homeDetails.Park === "0" ? false : true,
            Wifi: homeDetails.Wifi === "0" ? false : true,
            Pool: homeDetails.Pool === "0" ? false : true,
            Bar: homeDetails.Bar === "0" ? false : true,
            Facilities: homeDetails.Facilities || "",
            food_rating: homeDetails.food_rating || 0,
            value_for_money_rating: homeDetails.value_for_money_rating || 0.0,
            staff_rating: homeDetails.staff_rating || 0.0,
            location_rating: homeDetails.location_rating || 0,
            furniture_rating: homeDetails.furniture_rating || 0,
            wifi_rating: homeDetails.wifi_rating || 0,
            overall_rating: homeDetails.overall_rating || 0,
            MainImage: homeDetails.MainImage,
            Image1: homeDetails.Image1,
            Image2: homeDetails.Image2,
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
              marginTop: { xs: "80px", sm: "80px", md: "10px" },
            }}
          >
            <Grid container spacing={2}>
              <Grid xs={6} sx={6} md={8}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: { xs: "550", sm: "550", md: "550" },
                    textTransform: "uppercase",
                    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" }, 
                  }}
                >
                  {value.name}
                </Typography>
                <Typography
                  variant="button"
                  sx={{ color: "#823", ml: "1%", fontSize: "1rem" }}
                >
                  {value.category}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Rating
                    name="text-feedback"
                    value={value.overall_rating / 2}
                    size="small"
                    readOnly
                    precision={0.1}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <Typography
                    variant="button"
                    sx={{ color: "#823", ml: "1%", fontSize: "0.75rem" }}
                  >
                    {6} Reviews
                  </Typography>
                </Stack>
              </Grid>
              <Grid xs={6} sx={6} md={4}>
                <AddReservationPopUp name={value.name} id={value.id} />
              </Grid>
              <Grid xs={12} sx={12} md={8}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#FFFFFF",
                    width: "100%",
                    height: "50vh",
                    borderRadius: 8,
                  }}
                >
                  <img
                    src={value.MainImage || noImage}
                    alt="HH PHOTO 1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 10,
                    }}
                  />
                </Box>
              </Grid>
              <Grid xs={12} sx={12} md={4}>
                <Stack
                  direction={{ xs: "row", sm: "row", md: "column" }}
                  spacing={2}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: "#FFFFFF",
                      width: "100%",
                      height: "24vh",
                      borderRadius: 3,
                    }}
                  >
                    <img
                      src={value.Image1 || noImage}
                      alt="HH PHOTO 2"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 8,
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: "#FFFFFF",
                      width: "100%",
                      height: "24vh",
                      borderRadius: 3,
                    }}
                  >
                    <img
                      src={value.Image2 || noImage}
                      alt="HH PHOTO 3"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 8,
                      }}
                    />
                  </Box>
                </Stack>
              </Grid>
              <Grid xs={12} sm={12} md={8}>
                <Stack>
                  <Stack
                    spacing={2}
                    direction={{ xs: "column", sm: "row", md: "row" }}
                  >
                    <Stack
                      spacing={{ xs: 1, sm: 1, md: 2 }}
                      direction="row"
                      flexGrow={1}
                    >
                      <Box width={{ xs: 1 / 3, sm: 1 / 3, md: 1 / 3 }}>
                        <Button
                          variant="outlined"
                          fullWidth
                          disabled={!value.Gym}
                          sx={{
                            cursor: "default",
                          }}
                        >
                          Gym
                        </Button>
                      </Box>
                      <Box width={{ xs: 1 / 3, sm: 1 / 3, md: 1 / 3 }}>
                        <Button
                          variant="outlined"
                          fullWidth
                          disabled={!value.Kitchen}
                          sx={{
                            cursor: "default",
                          }}
                        >
                          Kitchen
                        </Button>
                      </Box>
                      <Box width={{ xs: 1 / 3, sm: 1 / 3, md: 1 / 3 }}>
                        <Button
                          variant="outlined"
                          fullWidth
                          disabled={!value.Park}
                          sx={{
                            cursor: "default",
                          }}
                        >
                          Park
                        </Button>
                      </Box>
                    </Stack>
                    <Stack
                      spacing={{ xs: 1, sm: 1, md: 2 }}
                      direction="row"
                      flexGrow={1}
                    >
                      <Box width={{ xs: 1 / 3, sm: 1 / 3, md: 1 / 3 }}>
                        <Button
                          variant="outlined"
                          fullWidth
                          disabled={!value.Wifi}
                          sx={{
                            cursor: "default",
                          }}
                        >
                          Wi-fi
                        </Button>
                      </Box>
                      <Box width={{ xs: 1 / 3, sm: 1 / 3, md: 1 / 3 }}>
                        <Button
                          variant="outlined"
                          fullWidth
                          disabled={!value.Bar}
                          sx={{
                            cursor: "default",
                          }}
                        >
                          Bar
                        </Button>
                      </Box>
                      <Box width={{ xs: 1 / 3, sm: 1 / 3, md: 1 / 3 }}>
                        <Button
                          variant="outlined"
                          fullWidth
                          disabled={!value.Pool}
                          sx={{
                            cursor: "default",
                          }}
                        >
                          Pool
                        </Button>
                      </Box>
                    </Stack>
                  </Stack>
                  <Typography variant="subtitle1" align="justify" gutterBottom>
                    {value.description}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: { xs: "350", sm: "400", md: "450" },
                      fontSize: { xs: "0.25rem", sm: "0.5rem", md: "1rem" },
                    }}
                    gutterBottom
                  >
                    Other Facilities
                  </Typography>
                  <Typography variant="subtitle1" align="justify" gutterBottom>
                    {value.Facilities}
                  </Typography>
                </Stack>
              </Grid>
              <Grid xs={12} sm={12} md={4}>
                <SimpleMap name={value.name} address={value.address} photo={value.MainImage || noImage}/>
              </Grid>
              <Stack spacing={4} width={"100%"}>
                <Divider />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: { xs: "350", sm: "400", md: "450" },
                    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.5rem" }, 
                  }}
                  gutterBottom
                >
                  Guest Feedbacks
                </Typography>
                <Box sx={{ width: "100%" }}>
                  <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={12} sm={6} md={4}>
                      <Stack direction="column" spacing={1}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="baseline"
                        >
                          <Typography>Staff</Typography>
                          <Button
                            size="small"
                            variant="contained"
                            sx={{
                              cursor: "default",
                            }}
                          >
                            {value.staff_rating}
                          </Button>
                        </Stack>
                        <BorderLinearProgress
                          variant="determinate"
                          value={value.staff_rating * 10}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Stack direction="column" spacing={1}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="baseline"
                        >
                          <Typography>Value for Money</Typography>
                          <Button
                            size="small"
                            variant="contained"
                            sx={{
                              cursor: "default",
                            }}
                          >
                            {value.value_for_money_rating}
                          </Button>
                        </Stack>
                        <BorderLinearProgress
                          variant="determinate"
                          value={value.value_for_money_rating * 10}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Stack direction="column" spacing={1}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="baseline"
                        >
                          <Typography>Food</Typography>
                          <Button
                            size="small"
                            variant="contained"
                            sx={{
                              cursor: "default",
                            }}
                          >
                            {value.food_rating}
                          </Button>
                        </Stack>
                        <BorderLinearProgress
                          variant="determinate"
                          value={value.food_rating * 10}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Stack direction="column" spacing={1}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="baseline"
                        >
                          <Typography>Location</Typography>
                          <Button
                            size="small"
                            variant="contained"
                            sx={{
                              cursor: "default",
                            }}
                          >
                            {value.location_rating}
                          </Button>
                        </Stack>
                        <BorderLinearProgress
                          variant="determinate"
                          value={value.location_rating * 10}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Stack direction="column" spacing={1}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="baseline"
                        >
                          <Typography>Wi-Fi</Typography>
                          <Button
                            size="small"
                            variant="contained"
                            sx={{
                              cursor: "default",
                            }}
                          >
                            {value.wifi_rating}
                          </Button>
                        </Stack>
                        <BorderLinearProgress
                          variant="determinate"
                          value={value.wifi_rating * 10}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Stack direction="column" spacing={1}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="baseline"
                        >
                          <Typography>Furnitures</Typography>
                          <Button
                            size="small"
                            variant="contained"
                            sx={{
                              cursor: "default",
                            }}
                          >
                            {value.furniture_rating}
                          </Button>
                        </Stack>
                        <BorderLinearProgress
                          variant="determinate"
                          value={value.furniture_rating * 10}
                        />
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
                <Divider />
                <Box>
                  <Review />
                </Box>
                <Divider />
              </Stack>
              <Grid container rowSpacing={1} columnSpacing={4}>
                <Grid md={12} mt={4}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: { xs: "350", sm: "400", md: "450" },
                      fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.5rem" }, 
                    }}
                    gutterBottom
                  >
                    Other Informations
                  </Typography>
                </Grid>
                <Grid md={4}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: { xs: "350", sm: "400", md: "450" },
                      fontSize: { xs: "1rem", sm: "1.25rem", md: "1.25rem" },
                      marginBottom: "1rem",
                    }}
                    gutterBottom
                  >
                    House Rules
                  </Typography>
                  <Box ml={1} alignItems="center">
                    <Typography gutterBottom>Flexible Check-in</Typography>
                    <Typography gutterBottom>
                      Check-out before 10:00 PM
                    </Typography>
                    <Typography gutterBottom>Pets allowed</Typography>
                    <Typography gutterBottom>Smoking is allowed</Typography>
                  </Box>
                </Grid>
                <Grid md={4}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: { xs: "350", sm: "400", md: "450" },
                      fontSize: { xs: "1rem", sm: "1.25rem", md: "1.25rem" },
                      marginBottom: "1rem",
                    }}
                    gutterBottom
                  >
                    Cancellation Policy
                  </Typography>
                  <Box ml={1} alignItems="center">
                    <Typography gutterBottom>
                      Non-Refundable for customer cancellations
                    </Typography>
                    <Typography gutterBottom>
                      If a reservation is cancelled due to "special reservation
                      allocating", we refund your money back.
                    </Typography>
                    <Typography gutterBottom>
                      In such cases please contact welfare division.
                    </Typography>
                  </Box>
                </Grid>
                <Grid md={4}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: { xs: "350", sm: "400", md: "450" },
                      fontSize: { xs: "1rem", sm: "1.25rem", md: "1.25rem" },
                      marginBottom: "1rem",
                    }}
                    gutterBottom
                  >
                    Contact Details
                  </Typography>
                  <Box ml={1} alignItems="center">
                    <Typography gutterBottom>{value.address}</Typography>
                    <Typography gutterBottom>
                      TEL: {value.contactNo1} / {value.contactNo2}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
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
