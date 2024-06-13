import React from "react";
import {
  Box,
  ThemeProvider,
  Grid,
  Stack,
  Typography,
  Divider,
  Link as MuiLink,
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

export default function Footer({ refContactUS }) {
  return (
    <ThemeProvider theme={theme}>
      <div data-aos="fade-up" data-aos-duration="600">
        <Box sx={{ width: "100%", bgcolor: "#D2D2D2", marginTop: "5%" }}>
          <Grid container sx={{ width: "100%", padding: "3% 1% 2%" }}>
            {/* First Column */}
            <Grid item xs={12} sm={4}>
              <Stack
                direction="column"
                sx={{
                  alignItems: "center",
                  paddingBottom: { xs: "1rem", sm: "0" },
                }}
              >
                <Typography
                  sx={{
                    color: "#823",
                    fontSize: { xs: "1.5rem", sm: "2rem" },
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  HOMLY
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ marginTop: "1rem", justifyContent: "center" }}
                >
                  <MuiLink href="#" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon
                      sx={{
                        color: "#5E5E5E",
                        fontSize: "2rem",
                        cursor: "pointer",
                        "&:hover": {
                          color: "#1877F2",
                        },
                      }}
                    />
                  </MuiLink>
                  <MuiLink href="#" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon
                      sx={{
                        color: "#5E5E5E",
                        fontSize: "2rem",
                        cursor: "pointer",
                        "&:hover": {
                          color: "#E1306C",
                        },
                      }}
                    />
                  </MuiLink>
                  <MuiLink href="#" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon
                      sx={{
                        color: "#5E5E5E",
                        fontSize: "2rem",
                        cursor: "pointer",
                        "&:hover": {
                          color: "#0A66C2",
                        },
                      }}
                    />
                  </MuiLink>
                </Stack>
              </Stack>
            </Grid>
            {/* Second Column */}
            <Grid item xs={12} sm={4}>
              <Stack
                direction="column"
                sx={{
                  alignItems: { xs: "center", sm: "flex-start" },
                  paddingBottom: { xs: "1rem", sm: "0" },
                }}
              >
                <Typography
                  sx={{
                    color: "#5E5E5E",
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                    fontWeight: "bold",
                  }}
                >
                  Useful Links
                </Typography>
                <Divider
                  sx={{
                    width: "50%",
                    borderBottomWidth: "1px",
                    borderColor: "#5E5E5E",
                    marginBottom: "1rem",
                  }}
                />
                <Typography
                  component={Link}
                  to="/Home"
                  sx={{
                    color: "#5E5E5E",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#823",
                    },
                    marginBottom: "0.5rem",
                  }}
                >
                  Home
                </Typography>
                <Typography
                  component={Link}
                  to="/HolidayHomes"
                  sx={{
                    color: "#5E5E5E",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#823",
                    },
                  }}
                >
                  Holiday Homes
                </Typography>
              </Stack>
            </Grid>
            {/* Third Column */}
            <Grid item xs={12} sm={4}>
              <Stack
                direction="column"
                sx={{ alignItems: { xs: "center", sm: "flex-start" } }}
                ref={refContactUS}
              >
                <Typography
                  sx={{
                    color: "#5E5E5E",
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                    fontWeight: "bold",
                  }}
                >
                  Contact Us
                </Typography>
                <Divider
                  sx={{
                    width: "50%",
                    borderBottomWidth: "1px",
                    borderColor: "#5E5E5E",
                    marginBottom: "1rem",
                  }}
                />
                <Stack direction="row" spacing={4}>
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center", marginBottom: "0.5rem" }}
                  >
                    <LocationOnIcon
                      sx={{ color: "#5E5E5E", fontSize: "2rem" }}
                    />
                    <Stack direction="column" sx={{ marginLeft: "0.5rem" }}>
                      <Typography sx={{ color: "#404040", fontSize: "0.8rem" }}>
                        HR Division
                      </Typography>
                      <Typography sx={{ color: "#404040", fontSize: "0.8rem" }}>
                        Inova IT Solution
                      </Typography>
                      <Typography sx={{ color: "#404040", fontSize: "0.8rem" }}>
                        Colombo 05
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack direction="column">
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center", marginBottom: "0.5rem" }}
                    >
                      <EmailIcon sx={{ color: "#5E5E5E", fontSize: "1.5rem" }} />
                      <Typography
                        component="a"
                        href="mailto:deltaxb21@gmail.com"
                        sx={{
                          textDecoration: "none",
                          color: "#404040",
                          marginLeft: "0.5rem",
                          fontSize: "0.8rem"
                        }}
                      >
                        deltaxb21@gmail.com
                      </Typography>
                    </Stack>
                    <Stack direction="row" sx={{ alignItems: "center" }}>
                      <LocalPhoneIcon
                        sx={{ color: "#5E5E5E", fontSize: "1.5rem" }}
                      />
                      <Typography
                        component="a"
                        href="tel:+94764112542"
                        sx={{
                          textDecoration: "none",
                          color: "#404040",
                          marginLeft: "0.5rem", 
                          fontSize: "0.8rem"
                        }}
                      >
                        0764112542
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
            {/* Copyright */}
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                paddingTop: "2rem",
              }}
            >
              <Divider
                sx={{
                  width: "90%",
                  borderBottomWidth: "1px",
                  borderColor: "#a5a3a340",
                  marginBottom: "1rem",
                }}
              />
              <Stack direction="column" sx={{ alignItems: "center" }}>
                <Typography
                  sx={{
                    color: "#5E5E5E",
                    fontSize: { xs: "0.7rem", sm: "0.8rem" },
                    textAlign: "center",
                  }}
                >
                  Homly.com is part of Inova IT Systems (PVT) LTD, the world
                  leader in online travel and related services.
                </Typography>
                <Typography
                  sx={{
                    color: "#5E5E5E",
                    fontSize: { xs: "0.7rem", sm: "0.8rem" },
                    textAlign: "center",
                  }}
                >
                  Copyright © 2023-{new Date().getFullYear()} Homly. All rights
                  reserved.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
}
