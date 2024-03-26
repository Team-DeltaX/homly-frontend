import React from "react";
import { Grid, ThemeProvider,Box } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../../../HomlyTheme";
import PlacesCard from "./PlacesCard";

export default function OurPlaces() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={1}>
        <Grid item container sm={12} spacing={1}>
          <Grid item sm={7}>
            <div data-aos="fade-right" data-aos-duration="700">
            <Box component={Link} to={`/holidayHomes/Colombo`}>
              <PlacesCard
                name="Colombo"
                img="https://res.cloudinary.com/dwgeetnoj/image/upload/v1710836489/homly-main-images/colombo_ig2ge4.jpg"
              />
            </Box>
            </div>
          </Grid>
          <Grid item sm={5}>
            <div data-aos="fade-left" data-aos-duration="700">
              <Box component={Link} to={`/holidayHomes/Nuwara Eliya`}>
                <PlacesCard
                  name="Nuwara Eliya"
                  img="https://res.cloudinary.com/dwgeetnoj/image/upload/v1710836478/homly-main-images/nuwaraEliya_mydjxe.jpg"
                />
              </Box>
            </div>
          </Grid>
        </Grid>
        <Grid item container sm={12} spacing={1}>
          <Grid item sm={4}>
            <div  data-aos="fade-up" data-aos-duration="700">
              <Box component={Link} to={`/holidayHomes/Kandy`}>
                <PlacesCard
                  name="Kandy"
                  img="https://res.cloudinary.com/dwgeetnoj/image/upload/v1710836477/homly-main-images/kandy_xmed27.jpg"
                />
                </Box>
            </div>
          </Grid>
          <Grid item sm={4}>
            <div  data-aos="fade-up" data-aos-duration="700">
              <Box component={Link} to={`/holidayHomes/Galle`}>
                <PlacesCard
                  name="Galle"
                  img="https://res.cloudinary.com/dwgeetnoj/image/upload/v1710836490/homly-main-images/Galle_iu8s7s.webp"
                />
                </Box>
            </div>
          </Grid>
          <Grid item sm={4}>
            <div  data-aos="fade-up" data-aos-duration="700">
              <Box component={Link} to={`/holidayHomes/Anuradhapura`}>
                <PlacesCard
                  name="Anuradhapura"
                  img="https://res.cloudinary.com/dwgeetnoj/image/upload/v1710836482/homly-main-images/anuradhapura_lguho7.jpg"
                />
                </Box>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
