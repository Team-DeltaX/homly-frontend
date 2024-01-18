import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import SideNavBar from "../../Components/SideNavBar/SideNavBar";

import { Box, ThemeProvider, Typography } from "@mui/material";

const PersonalDetails = () => {
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <SideNavBar />
        <Box>
          <h1>PersonalDetails</h1>
        </Box>
      </Box>
    </div>
  );
};

export default PersonalDetails;
