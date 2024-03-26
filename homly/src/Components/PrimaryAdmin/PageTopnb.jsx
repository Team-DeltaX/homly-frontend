import { Box, Menu, MenuItem } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import theme from "../../HomlyTheme";

const Pagetop = ({ heading }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginLeft: "0%",
        marginTop: "1%",
        background: "white",
      }}
    >
      <Box sx={{ fontSize: "30px", fontWeight: "bold" }}>{heading}</Box>
    </Box>
  );
};

export default Pagetop;
