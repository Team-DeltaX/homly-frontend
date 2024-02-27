import { Grid, Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import HomeDetailsView from "./HomeDetailsView";
import CareTakerDetailsView from "./CareTakerDetailsView";
import HomeBreakDownView from "./HomeBreakDownView";
import axios from "axios";

const CreateHolidayHomeContent = () => {

  const [submitDisable, setSubmitDisable] = useState(true);
  const [submitClicked, setSubmitClicked] = useState(false);

  // all values from three components
  const [allValues, setAllValues] = useState({});




  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitClicked(true);
    axios.post("http://localhost:3002/locationadmin/holidayhome/", { allValues })
      .then((res) => {
        console.log(res);
      }
      )
      .catch((err) => {
        console.log(err);
      })

  };

  console.log(allValues);

  const [holidayHomeSubmit, setHolidayHomeSubmit] = useState(false);
  const [caretakerSubmit, setCaretakerSubmit] = useState(false);
  const [homeBreakdownSubmit, setHomeBreakdownSubmit] = useState(false);

  useEffect(() => {
    if (holidayHomeSubmit || caretakerSubmit || homeBreakdownSubmit) {
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
            <HomeDetailsView submit={holidayHomeSubmit} setSubmit={setHolidayHomeSubmit} allValues={allValues} setAllValues={setAllValues} submitClicked={submitClicked} setSubmitClicked={setSubmitClicked} />
            {/* <HomeDetailsView setSubmit={setSubmit} /> */}
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <CareTakerDetailsView submit={caretakerSubmit} allValues={allValues} setAllValues={setAllValues} setSubmit={setCaretakerSubmit} submitClicked={submitClicked} setSubmitClicked={setSubmitClicked} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <HomeBreakDownView submit={homeBreakdownSubmit} setSubmit={setHomeBreakdownSubmit} allValues={allValues} setAllValues={setAllValues} submitClicked={submitClicked} setSubmitClicked={setSubmitClicked} />
          </Grid>
        </Grid>

        <Box sx={{ minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: "3em" }}>
          {/* <Button type="submit" variant="contained" disabled={true} sx={{ marginBottom: "1.25em" }}>Submit</Button> */}
          <Button id="submitBtn" type="submit" variant="contained" disabled={submitDisable} sx={{ marginBottom: "1.25em" }} onClick={handleSubmit}>Submit</Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateHolidayHomeContent;
