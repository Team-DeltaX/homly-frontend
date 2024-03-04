import { Grid, Box, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import HomeDetailsView from "./HomeDetailsView";
import CareTakerDetailsView from "./CareTakerDetailsView";
import CreatePageHomeBreakDownView from "./HolidayHomeCreate/CreatePageHomeBreakDownView";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ErrorIcon from '@mui/icons-material/Error';


const CreateHolidayHomeContent = () => {
  const navigate = useNavigate();

  const [submitDisable, setSubmitDisable] = useState(true);
  const [submitClicked, setSubmitClicked] = useState(false);

  // all values from three components
  const [allValues, setAllValues] = useState({});






  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitClicked(true);
    console.log("allvalues", allValues);
    axios.post("http://localhost:3002/admin/auth/locationadmin/holidayhome/", allValues, { withCredentials: true })
      .then((res) => {
        // window.location.href("/locationadmin/manage");
        console.log(res);
        navigate("/locationadmin/manage");
      }
      )
      .catch((err) => {
        console.log(err);
      });
  };


  const [holidayHomeSubmit, setHolidayHomeSubmit] = useState(false);
  const [caretakerSubmit, setCaretakerSubmit] = useState(false);
  const [homeBreakdownSubmit, setHomeBreakdownSubmit] = useState(false);

  // const [holidayHomeError, setHolidayHomeError] = useState(false);
  // const [caretakerError, setcaretakerError] = useState(false);
  // const [homeBreakDownError, setHomeBreakDownError] = useState(false);

  // console.log("holierror", holidayHomeError)
  // console.log("care errro", caretakerError)
  // console.log("homebrake error ", homeBreakDownError)
  // const [submitError, setSubmitError] = useState(false);



  useEffect(() => {
    if (holidayHomeSubmit && caretakerSubmit && homeBreakdownSubmit) {
      setSubmitDisable(false);
    } else {
      setSubmitDisable(true); // Make sure to set to false or true explicitly
    }
  }, [holidayHomeSubmit, caretakerSubmit, homeBreakdownSubmit]);

  // useEffect(() => {
  //   if (holidayHomeError && caretakerError && homeBreakDownError) {
  //     setSubmitError(true)
  //   }
  //   else {
  //     setSubmitError(false)
  //   }
  // }, [caretakerError, homeBreakDownError, holidayHomeError])


  // console.log("submiterror", submitError)



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
            <CreatePageHomeBreakDownView submit={homeBreakdownSubmit} setSubmit={setHomeBreakdownSubmit} allValues={allValues} setAllValues={setAllValues} submitClicked={submitClicked} setSubmitClicked={setSubmitClicked} />
          </Grid>
        </Grid>

        <Box sx={{ minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: "3em" }}>
          {/* <Button type="submit" variant="contained" disabled={true} sx={{ marginBottom: "1.25em" }}>Submit</Button> */}
          {/* {holidayHomeError ?
            <Typography variant="p" sx={{ marginRight: "20px", marginBottom: "18px", color: "red", display: 'flex', alignItems: 'center' }}>Invalid input detected. Please correct the errors before submitting<ErrorIcon sx={{ marginLeft: "5px" }} /></Typography>
            : ""} */}
          <Button id="submitBtn" type="submit" variant="contained" disabled={submitDisable} sx={{ marginBottom: "1.25em" }} onClick={handleSubmit}>Submit</Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateHolidayHomeContent;
