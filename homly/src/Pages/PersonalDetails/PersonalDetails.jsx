import React from "react";
import NavBar from "../../Components/NavBar/NavBar";

import { Box, Container, ThemeProvider, Typography } from "@mui/material";

const PersonalDetails = () => {
  return (
    <div style={{display:'flex'}}>
      <NavBar sideNavBar='block'/>
      <Container>
        <Box sx={{ display: "flex", mt: 10 }}>
          <Typography variant="h4">Personal Details</Typography>
        </Box>
      </Container>
      

    </div>
  );
};

export default PersonalDetails;
