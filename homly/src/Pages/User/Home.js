import React from "react";
import {
  Container,
  Box,
  Typography,
  ThemeProvider,
  Stack, Grid,
} from "@mui/material";

import NavBar from "../../Components/NavBar/NavBar";
import theme from "../../HomlyTheme";
// import MyReservationCard from "../../Components/MyReservationCard/MyReservationCard";

export default function Home() {
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
                    <Grid container sx={{bgcolor:'blueviolet',width:'100%'}}>
                      <Grid item md={4}>
                        <Stack direction='column'>
                          <Typography>Location</Typography>
                          <Typography>Location</Typography>
                        </Stack>
                      </Grid>
                      <Grid item md={6}>
                        <Stack direction='row'>
                          <Stack direction='column'>
                            <Typography>Location</Typography>
                            <Typography>Location</Typography>
                          </Stack>
                          <Stack direction='column'>
                            <Typography>Location</Typography>
                            <Typography>Location</Typography>
                          </Stack>
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
