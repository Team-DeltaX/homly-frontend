import React, { useState, useEffect } from "react";
import {
  ThemeProvider,
  Box,
  Drawer,
  Toolbar,
  Typography,
  Container,
  CssBaseline,
  Stack,
  Tabs,
  Tab,
} from "@mui/material";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ListAltIcon from "@mui/icons-material/ListAlt";
import HttpsIcon from "@mui/icons-material/Https";
import theme from "../../HomlyTheme";
import "./Profile.css";
import "../../Components/User/NavBar/NavBar.css";
import PersonalDetails from "../../Components/User/MyProfile/PersonalDetails";
import FavouriteHH from "../../Components/User/MyProfile/FavoritesHH";
import Security from "../../Components/User/MyProfile/Security";
import MyReservation from "../../Components/User/MyProfile/MyReservation";
import NavBar from "../../Components/User/NavBar/NavBar";

const drawerWidth = 240;

const sidePages = [
  { name: "Personal Details", icon: <ManageAccountsIcon />, value: 0 },
  { name: "Security", icon: <HttpsIcon />, value: 1 },
  { name: "Favourite Holiday Homes", icon: <FavoriteIcon />, value: 2 },
  { name: "My Reservation", icon: <ListAltIcon />, value: 3 },
];

const tabComponent = [
  <PersonalDetails />,
  <Security />,
  <FavouriteHH />,
  <MyReservation />,
];

const MyProfile = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const selectedTab = localStorage.getItem("selectedTab");
    if (selectedTab) {
      setValue(parseInt(selectedTab));
    }
  }, []);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem("selectedTab", newValue);
  };

  const bottomTabLable = (name, icon) => (
    <Stack
      direction="column"
      sx={{
        alignItems: "center",
        height: "100%",
        width: "15vw",
        color: "white",
      }}
    >
      <Box
        className="bottom-tab-icon"
        sx={{
          padding: "7px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          marginBottom: "5px",
        }}
      >
        {icon}
      </Box>
      <Typography
        sx={{ fontSize: { xs: "0.5rem", sm: "0.8rem" }, color: "white" }}
      >
        {name}
      </Typography>
    </Stack>
  );
  const sideTabLable = (name, icon) => (
    <Stack
      className="side-tab"
      direction="row"
      sx={{
        alignItems: "center",
        width: "100%",
        color: "white",
        padding: "10px 0",
      }}
    >
      <Box
        className="side-tab-icon"
        sx={{
          padding: "7px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          margin: "0 15px",
        }}
      >
        {icon}
      </Box>
      <Typography
        className="side-tab-text"
        sx={{ fontSize: { xs: "0.5rem", sm: "0.8rem" }, color: "white" }}
      >
        {name}
      </Typography>
    </Stack>
  );

  const drawer = (
    <div>
      <Toolbar />
      <Box sx={{ width: "100%", marginTop: "64px" }}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleTabChange}
          textColor="secondary"
          aria-label="secondary tabs example"
          sx={{ ".css-ts0m74-MuiStack-root":{
            paddingRight: "10px",
            textAlign:"left",
          }}}
        >
          {sidePages.map((item) => (
            <Tab
              key={item.name}
              value={item.value}
              label={sideTabLable(item.name, item.icon)}
            />
          ))}
        </Tabs>
      </Box>
    </div>
  );
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" style={{ padding: 0, position: "relative" }}>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <NavBar position={"absolute"} />
            <Box
              component="nav"
              sx={{
                width: { md: drawerWidth },
                flexShrink: { sm: 0 },
              }}
              aria-label="mailbox folders"
            >
              <Drawer
                variant="permanent"
                sx={{
                  display: { xs: "none", sm: "none", md: "block" },
                  "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    bgcolor: "primary.main",
                  },
                  height: "100%",
                  position: "fixed	",
                }}
                open
              >
                {drawer}
              </Drawer>
            </Box>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                width: { sm: `calc(100% - ${drawerWidth}px)` },
              }}
            >
              <Toolbar />
              {tabComponent[value]}
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              position: "fixed",
              bottom: 0,
              display: { md: "none" },
              zIndex: 100,
            }}
          >
            <Tabs
              className="bottom_tabs"
              value={value}
              onChange={handleTabChange}
              textColor="secondary"
              aria-label="secondary tabs example"
              sx={{
                width: "100%",
                backgroundColor: "primary.main",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "& .css-heg063-MuiTabs-flexContainer ": {
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                },
              }}
            >
              {sidePages.map((item) => (
                <Tab
                  key={item.name}
                  value={item.value}
                  label={bottomTabLable(item.name, item.icon)}
                />
              ))}
            </Tabs>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default MyProfile;
