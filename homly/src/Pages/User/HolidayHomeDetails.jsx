import React from 'react';
import { Container, Box } from "@mui/material";
// import NavBar from "../../Components/NavBar/NavBar";
import MainHolidayHomePhoto from '../../Components/User/HolidayHomeDetailsGrid/MainHolidayHomePhoto';
import HolidayHomeGrid from '../../Components/User/HolidayHomeDetailsGrid/HolidayHomeGrid';

export default function HolidayHomeDetails() {
  return (
    <div>
    <Box
      className="main_container"
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl" style={{ padding: 0 ,height:'80vh'}}>
        {/* <NavBar /> */}
        <Container sx={{ marginTop: "50px" }}>
          <HolidayHomeGrid/>
        </Container>
      </Container>
    </Box>
  </div>
  )
}
