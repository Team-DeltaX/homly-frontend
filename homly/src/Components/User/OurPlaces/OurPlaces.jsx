import { Grid, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../../../HomlyTheme";
import PlacesCard from "./PlacesCard";

export default function OurPlaces() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={1}>
        <Grid item container sm={12} spacing={1}>
          <Grid item sm={7}>
            <div data-aos="fade-right" data-aos-duration="700">
              <PlacesCard
                name="Colombo"
                img="https://cf.bstatic.com/xdata/images/hotel/max1024x768/407639983.jpg?k=def87386fe45592fb44a3e70c27ae83c2a0e166fda1f818efaf6cb7993ed21a7&o=&hp=1"
              />
            </div>
          </Grid>
          <Grid item sm={5}>
            <div data-aos="fade-left" data-aos-duration="700">
              <PlacesCard
                name="Nuwara Eliya"
                img="https://cf.bstatic.com/xdata/images/hotel/max1024x768/423007932.jpg?k=812910b14824c1e6eff60a9b6ea666e2a9df412983dce976d4d3661eae71de5f&o=&hp=1"
              />
            </div>
          </Grid>
        </Grid>
        <Grid item container sm={12} spacing={1}>
          <Grid item sm={4}>
            <div  data-aos="fade-up" data-aos-duration="700">
                <PlacesCard
                  name="Kandy"
                  img="https://media.gettyimages.com/id/1202279073/photo/the-temple-of-the-holy-tooth-relict-in-kandy-see-from-the-lake.jpg?s=612x612&w=0&k=20&c=Io3JciGjIi2DBSAibVj0VJcafOlC_DO4Bk4nnSWXgGE="
                />
            </div>
          </Grid>
          <Grid item sm={4}>
            <div  data-aos="fade-up" data-aos-duration="700">
                <PlacesCard
                  name="Galle"
                  img="https://classiclanka.com/wp-content/uploads/2022/06/Galle.webp"
                />
            </div>
          </Grid>
          <Grid item sm={4}>
            <div  data-aos="fade-up" data-aos-duration="700">
                <PlacesCard
                  name="Anuradhapura"
                  img="https://srilankatravelpages.com/media/2023/10/places-to-visit-in-Anuradhapura-.jpg"
                />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
