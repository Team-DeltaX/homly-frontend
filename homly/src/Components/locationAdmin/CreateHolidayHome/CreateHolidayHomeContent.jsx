import { Grid, Box, Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import HomeDetailsView from "./HomeDetailsView";
import CareTakerDetailsView from "./CareTakerDetailsView";
import HomeBreakDownView from "./HomeBreakDownView";

const CreateHolidayHomeContent = () => {

  const [submitDisable, setSubmitDisable] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const [submit, setSubmit] = useState({ holidayhomeDetails: false, caretakerDetails: true, homebreakdown: true, });
  const [holidayHomeSubmit, setHolidayHomeSubmit] = useState(false);
  const [caretakerSubmit, setCaretakerSubmit] = useState(false);
  const [homeBreakdownSubmit, setHomeBreakdownSubmit] = useState(false);

  // const areAllTrue = () => {
  //   return Object.values(submit).every(value => value === true);
  // };

  // if (areAllTrue()) {
  //   setSubmitDisable(false);
  // }

  useEffect(() => {
    if (holidayHomeSubmit && caretakerSubmit && homeBreakdownSubmit) {
      setSubmitDisable(false);
    } else {
      setSubmitDisable(true); // Make sure to set to false or true explicitly
    }
  }, [holidayHomeSubmit, caretakerSubmit, homeBreakdownSubmit]);


  return (
    <Box className="content_container" sx={{ maxHeight: "90vh" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ marginBottom: "16px " }}>
          <Grid item md={6} sm={12} xs={12}>
            <HomeDetailsView submit={holidayHomeSubmit} setSubmit={setHolidayHomeSubmit} />
            {/* <HomeDetailsView setSubmit={setSubmit} /> */}
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <CareTakerDetailsView submit={caretakerSubmit} setSubmit={setCaretakerSubmit} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <HomeBreakDownView submit={homeBreakdownSubmit} setSubmit={setHomeBreakdownSubmit} />
          </Grid>
        </Grid>

        <Box sx={{ minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: "3em" }}>
          {/* <Button type="submit" variant="contained" disabled={true} sx={{ marginBottom: "1.25em" }}>Submit</Button> */}
          <Button type="submit" variant="contained" disabled={submitDisable} sx={{ marginBottom: "1.25em" }}>Submit</Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateHolidayHomeContent;
