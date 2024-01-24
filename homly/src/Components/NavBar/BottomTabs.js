import { Box } from "@mui/material";
import React from "react";

const BottomTabs = () => {
  return (
    <Box >
      <Box sx={{ width: "100%", height: "10vh", backgroundColor: "red",position:'fixed',bottom:0,display:{sm:'none',md:'none'} }}></Box>
    </Box>
  );
};

export default BottomTabs;
