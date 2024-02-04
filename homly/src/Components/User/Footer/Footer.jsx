import React from "react";
import {
  Box,
  ThemeProvider,
  Grid,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import theme from "../../../HomlyTheme";
import footerWave from "../../../Assets/images/footerWave.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          bgcolor: "white",
        }}
      >
        <Box
          sx={{
            width: "110%",
            height: { xs: "20vh", sm: "35vh", lg: "50vh" },
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={footerWave}
            alt="footer wave"
            sx={{ width: "100%", bottom: "0",left:'-10px', position: "absolute" }}
          />
        </Box>
        <Box sx={{ width: "100%", bgcolor: "#313131" }}>
          <Grid container sx={{ width: "100%" }}>
            <Grid item container>
              <Grid item xs={12} sm={7} lg={8}>
                <Stack
                  direction="column"
                  sx={{
                    width: "100%",
                    height: "100%",
                    padding: {xs:'5% 10%',sm:"0 10%"},
                  }}
                >
                  <Typography
                    sx={{ color: "white", fontSize:{xs:'1rem',sm:"2rem"}, fontWeight: "bold" }}
                  >
                    Contact Us
                  </Typography>
                  <Divider
                    sx={{
                      width: "90%",
                      borderBottomWidth: "3px",
                      borderColor: "white",
                    }}
                  />
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    sx={{ marginTop: "2%", width: "100%" }}
                >
                    <Stack
                      direction="row"
                      sx={{ justifyContent: {xs:'none',sm:"center"}, alignItems: "center" }}
                    >
                      {/* location icon */}
                      <LocationOnIcon
                        sx={{ color: "white", fontSize: "4rem" }}
                      />
                      {/* location */}
                      <Stack direction="column">
                        <Typography sx={{ color: "white" }}>
                          HR Division
                        </Typography>
                        <Typography sx={{ color: "white" }}>
                          Inova IT Solution
                        </Typography>
                        <Typography sx={{ color: "white" }}>
                          Colombo 05
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack
                      direction="column"
                      sx={{ marginLeft: "4%", justifyContent: "space-between" }}
                    >
                      <Stack direction="row" sx={{ alignItems: "center" }}>
                        {/* icon */}
                        <EmailIcon sx={{ color: "white", fontSize: "2rem" }} />
                        {/*  email*/}
                        <Typography
                          component="a"
                          href="mailto:deltaxb21@gmail.com"
                          sx={{
                            textDecoration: "none",
                            color: "white",
                            marginLeft: "2%",
                          }}
                        >
                          deltaxb21@gmail.com
                        </Typography>
                      </Stack>
                      <Stack direction="row" sx={{ alignItems: "center" }}>
                        {/* icon */}
                        <LocalPhoneIcon
                          sx={{ color: "white", fontSize: "2rem" }}
                        />
                        {/*  phone*/}
                        <Typography
                          component="a"
                          href="tel:+94764112542"
                          sx={{
                            textDecoration: "none",
                            color: "white",
                            marginLeft: "2%",
                          }}
                        >
                          0764112542
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={5} lg={4} >
                <Stack direction="column" sx={{
                    width: "100%",
                    height: "100%",
                    padding: {xs:"5% 10%",sm:"0 5%"},
                  }}>
                  <Typography
                    sx={{ color: "white", fontSize:{xs:'1rem',sm:"2rem"}, fontWeight: "bold" }}
                  >
                    Usefull Link
                  </Typography>
                  <Divider
                    sx={{
                      width: "80%",
                      borderBottomWidth: "3px",
                      borderColor: "white",
                    }}
                  />
                  <Stack direction="column" sx={{ marginTop: "2%" }}>
                    <Typography
                      component={Link}
                      to="/"
                      sx={{ color: "white", textDecoration: "none" }}
                    >
                      Home
                    </Typography>
                    <Typography
                      component={Link}
                      to="/HolidayHomes"
                      sx={{ color: "white", textDecoration: "none" }}
                    >
                      Holiday Homes
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "2%",
              }}
            >
              <Stack
                direction="row"
                sx={{
                  width: "40%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* social media icons */}
                <FacebookIcon sx={{ color: "white", fontSize: "3rem" }} />
                <InstagramIcon sx={{ color: "white", fontSize: "3rem" }} />
                <LinkedInIcon sx={{ color: "white", fontSize: "3rem" }} />
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                paddingTop: "2%",
              }}
            >
              <Divider
                sx={{
                  width: "90%",
                  borderBottomWidth: "1px",
                  borderColor: "#a5a3a340",
                }}
              />
              <Stack
                direction="row"
                sx={{ alignItems: "center", padding: "0.5% 0 1% 0" }}
              >
                <Typography sx={{ color: "white",fontSize:{xs:'0.7rem',sm:'1rem'} }}>
                  Copyright © 2023-{new Date().getFullYear()} Homly. All Rights
                  Reserved.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
