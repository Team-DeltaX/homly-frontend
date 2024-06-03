import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationPanal from "../Common/NotificationPanal/NotificationPanal";

const PageTitle = ({ title, bell, setShowNav }) => {
  const [notifications, SetNotifications] = useState([
    {
      id: 1,
      type: "New Feedback",
      image: "../assest/images/profile.jpeg",
      data: {
        serviceNumber: "18964v",
        HolidayHomeName: "Anuradhapura resort by samitha",
      },
    },

    {
      id: 2,
      type: "Authorization Successful",
      image: "",
      data: "Remove HolidayHome",
    },
    {
      id: 3,
      type: "New Feedback",
      image: "../assest/images/profile.jpeg",
      data: {
        serviceNumber: "18964v",
        HolidayHomeName: "Anuradhapura resort by samitha",
      },
    },
    {
      id: 4,
      type: "New Feedback",
      image: "../assest/images/profile.jpeg",
      data: {
        serviceNumber: "18964v",
        HolidayHomeName: "Anuradhapura resort by samitha",
      },
    },
    {
      id: 5,
      type: "Authorization Denied",
      image: "",
      data: "Remove HolidayHome",
    },
  ]);

  const openNav = () => {
    setShowNav("nav_grid_active");
  };

  return (
    <Box
      sx={{
        backgroundColor: "",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "25px",
      }}
    >
      <Typography variant="h4" fontWeight={560} className="page_title">
        {title}
      </Typography>
      <Box sx={{ position: "relative" }}>
        <Box sx={{ display: "flex", alignItems: "flex-basis", gap: "1.5em" }}>
          <NotificationPanal
            notifications={notifications}
            SetNotifications={SetNotifications}
            bell={bell}
          />
          <Box className="burger_icon" sx={{ display: "none" }}>
            <MenuIcon
              id="burgerIcon"
              sx={{ color: "grey6", fontSize: "2.5rem", cursor: "pointer" }}
              onClick={openNav}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PageTitle;
