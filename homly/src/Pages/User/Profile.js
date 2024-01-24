import React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
// import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HttpsIcon from "@mui/icons-material/Https";

import { useLayoutEffect, useRef } from "react";

import MenuIcon from "@mui/icons-material/Menu";

import { ThemeProvider } from "@emotion/react";

import { Link, NavLink } from "react-router-dom";

// import NotificationPanel from "../NotificationPanel/NotificationPanel";

import theme from "../../HomlyTheme";
import './Profile.css'
// import "../../Components/NavBar/NavBar.css";
import PersonalDetailsCom from "../../Components/MyProfile/PersonalDetailsCom";

// let vh = window.innerHeight * 0.01;

const drawerWidth = 240;
const settings = [
  { name: "My Profile", path: "/myProfile/personalDetails" },
  { name: "Logout" },
];
const pages = [
  { name: "Home", path: "/" },
  { name: "Holiday Homes", path: "/holidayHomes" },
  { name: "Contact Us", path: "/contactUs" },
];

const respSidePages = [
  { name: "Home", path: "/" },
  { name: "Holiday Homes", path: "/holidayHomes" },
  { name: "Contact Us", path: "/contactUs" },
  { name: "My Profile", path: "/myProfile/personalDetails" },
];
const sidePages = [
  { name: "Personal Details", icon: <ManageAccountsIcon />, value: 0 },
  { name: "Security", icon: <HttpsIcon />, value: 1 },
  { name: "Payement Details", icon: <CreditCardIcon />, value: 2 },
  { name: "My Reservation", icon: <ListAltIcon />, value: 3 },
];

const tabComponent = [
  <PersonalDetailsCom />,
  <PersonalDetailsCom />,
  <PersonalDetailsCom />,
  <PersonalDetailsCom />,
  <div>Item Two</div>,
  <div>Item Three</div>,
  <div>Item Four</div>,
];

const MyProfile = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useLayoutEffect(() => {
    setContainerWidth(ref.current.offsetWidth);
    setContainerHeight(ref2.current.offsetHeight);
  }, [containerWidth, containerHeight]);

  console.log(
    "containerWidth",
    containerWidth,
    "containerHeight",
    containerHeight
  );

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // tabs
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const bottomTabLable = (name, icon) => (
    <Stack
      direction="column"
      sx={{
        alignItems: "center",
        height: "100%",
        width: "15vw",
        color: "white",
        // backgroundColor: "white",
      }}
    >
      <Box
        className="bottom-tab-icon"
        sx={{
          // backgroundColor: "white",
          padding: '7px',
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
      direction="roe"
      sx={{
        alignItems: "center",
        // height: "100%",
        width: "100%",
        color: "white",
        // backgroundColor: "white",
      }}
    >
      <Box
        className="side-tab-icon"
        sx={{
          // backgroundColor: "white",
          padding: '7px',
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

  // tabs end

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // console.log("vh", vh, "containerWidth", containerWidth)

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const mainDrawer = (
    <div>
      <Toolbar />
      <List>
        {respSidePages.map((text) => (
          <ListItem key={text.name} disablePadding>
            <ListItemButton component={Link} to={text.path}>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
        {/* {sidePages.map((text) => (
          <ListItem key={text.name} sx={{ padding: "0 0 0 10%", top: "-10px" }}>
            <ListItemButton component={Link} sx={{ padding: 0 }} to={text.path}>
              <ListItemText secondary={text.name} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
    </div>
  );
  const drawer = (
    <div>
      <Toolbar />
      <Box sx={{ width: "100%" }}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleTabChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
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
      {/* <List>
        {sidePages.map((text) => (
          <ListItem key={text.name} disablePadding>
            <NavLink
              key={text.name}
              to={text.path}
              className={({ isActive }) =>
                isActive ? "activeSidePage " : "normaSidePage"
              }
            >
              <ListItemButton>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List> */}
    </div>
  );
  return (
    <ThemeProvider theme={theme}>
      <Box
        ref={ref2}
        // className="main_container"
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container ref={ref} maxWidth="xl" style={{ padding: 0 }}>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
              sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                // width:'1000px',
                // ml: { sm: `${drawerWidth}px` },
                bgcolor: "secondary.main",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                position: "absolute",
                left: 0,
              }}
            >
              <Toolbar>
                <IconButton
                  color="text.primary"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "block", md: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                {/* <Typography variant="h6" noWrap component="div">
                      Responsive drawer
                                      </Typography> */}
              </Toolbar>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ paddingRight: { xs: "4%", sm: "2%" } }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  display={{ xs: "none", sm: "none", md: "flex" }}
                >
                  {pages.map((page) => (
                    <NavLink
                      key={page.name}
                      to={page.path}
                      className={({ isActive }) =>
                        isActive ? "activePage" : "normalPage"
                      }
                    >
                      <Button variant="text" sx={{ color: "text.primary" }}>
                        {page.name}
                      </Button>
                    </NavLink>
                  ))}
                </Stack>
                {/* notification button */}
                {/* <NotificationPanel notifications={notifications} /> */}
                {/* user button */}
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        sx={{ height: "48px", width: "48px" }}
                        src="https://img.freepik.com/premium-psd/3d-cartoon-man-smiling-portrait-isolated-transparent-background-png-psd_888962-1570.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem
                        key={setting.name}
                        onClick={handleCloseUserMenu}
                        component={setting.name === "My Profile" ? Link : ""}
                        sx={{
                          display:
                            setting.name === "My Profile"
                              ? { xs: "none", md: "block" }
                              : "block",
                        }}
                        to={setting.path}
                      >
                        <Typography textAlign="center">
                          {setting.name}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Stack>
            </AppBar>
            <Box
              className="nav_container"
              component="nav"
              sx={{
                width: { md: drawerWidth },
                flexShrink: { sm: 0 },
              }}
              aria-label="mailbox folders"
            >
              {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "block", md: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                {mainDrawer}
              </Drawer>
              <Drawer
                className="side_navbar"
                variant="permanent"
                sx={{
                  display: { xs: "none", sm: "none", md: "block" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                    bgcolor: "primary.main",
                  },
                  height: "100%",
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
            }}
          >
            <Tabs
              className="bottom_tabs"
              value={value}
              onChange={handleTabChange}
              textColor="secondary"
              // indicatorColor="secondary"
              // TabIndicatorProps={{
              //   style:{
              //     backgroundColor: "green",
              //     "& .Mui-selected":{
              //       backgroundColor: "green",
              //     }
              //   }
              // }}
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
              {/* <Tab value={0} label={bottomTabLable(sidePages.name,sidePages.icon)} />
          <Tab value={1} label="Item Two" />
          <Tab value={2} label="Item Three" />
          <Tab value={3} label="Item Three" /> */}
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
