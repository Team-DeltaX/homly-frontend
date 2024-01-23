import { Grid, Box, Button, TextField } from "@mui/material";
import React from "react";
import HomeDetailsView from "./HomeDetailsView";
import CareTakerDetailsView from "./CareTakerDetailsView";
import HomeBreakDownView from "./HomeBreakDownView";

const CreateHolidayHomeContent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Box className="content_container" sx={{ maxHeight: "90vh" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ marginBottom: "16px " }}>
          <Grid item md={6} sm={12} xs={12}>
            <HomeDetailsView />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <CareTakerDetailsView />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <HomeBreakDownView />
          </Grid>
        </Grid>

        <Box sx={{ minHeight:'100px',display:'flex',alignItems:'center',justifyContent:'flex-end',paddingRight:"3em"}}>
          <Button type="submit" variant="contained" disabled={true} sx={{marginBottom:"1.25em"}}>Submit</Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateHolidayHomeContent;
