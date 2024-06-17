import { Grid, Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import HomeDetailsViewOnly from "./HomeDetailsViewOnly";
import CareTakerDetailsViewOnly from "./CareTakerDetailsViewOnly";
import HomeBreakDownViewOnly from "./HomeBreakDownViewOnly";
import HolidayHomeImagesView from "./HolidayHomeImagesView";

const ViewHolidayHomeContent = () => {
  // all values from three components
  const [allValues, setAllValues] = useState({});

  return (
    <Box className="content_container" sx={{ maxHeight: "90vh" }}>
      <form>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <HolidayHomeImagesView />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ marginBottom: "16px " }}>
          <Grid item md={6} sm={12} xs={12}>
            <HomeDetailsViewOnly
              allValues={allValues}
              setAllValues={setAllValues}
            />
            {/* <HomeDetailsView setSubmit={setSubmit} /> */}
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <CareTakerDetailsViewOnly
              allValues={allValues}
              setAllValues={setAllValues}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <HomeBreakDownViewOnly
              allValues={allValues}
              setAllValues={setAllValues}
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ViewHolidayHomeContent;
