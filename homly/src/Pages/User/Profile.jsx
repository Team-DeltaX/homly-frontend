import React, { useState, useContext, useEffect } from "react";
import {
  ThemeProvider,
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
  Container,
  CssBaseline,
  Stack,
  Button,
  Tabs,
  Tab,
} from "@mui/material";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HttpsIcon from "@mui/icons-material/Https";
import MenuIcon from "@mui/icons-material/Menu";

import { Link, NavLink } from "react-router-dom";
import theme from "../../HomlyTheme";
import "./Profile.css";
import "../../Components/User/NavBar/NavBar.css";
import PersonalDetails from "../../Components/User/MyProfile/PersonalDetails";
import PaymentDetailsCom from "../../Components/User/MyProfile/PaymentDetailsCom";
import Security from "../../Components/User/MyProfile/Security";
import MyReservation from "../../Components/User/MyProfile/MyReservation";

import { AuthContext } from "../../Contexts/AuthContext";

const drawerWidth = 240;

const pages = [
  { name: "Home", path: "/Home" },
  { name: "Holiday Homes", path: "/holidayHomes/all" },
];

const respSidePages = [
  { name: "Home", path: "/Home" },
  { name: "Holiday Homes", path: "/holidayHomes/all" },
  { name: "My Profile", path: "/myProfile" },
];
const sidePages = [
  { name: "Personal Details", icon: <ManageAccountsIcon />, value: 0 },
  { name: "Security", icon: <HttpsIcon />, value: 1 },
  { name: "Payement Details", icon: <CreditCardIcon />, value: 2 },
  { name: "My Reservation", icon: <ListAltIcon />, value: 3 },
];

const tabComponent = [
  <PersonalDetails />,
  <Security />,
  <PaymentDetailsCom />,
  <MyReservation />,
];

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
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

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

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
      </List>
    </div>
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

            <AppBar
              className="app_bar_main"
              sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
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
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        sx={{ height: "48px", width: "48px" }}
                        src={user.image}
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
                    <MenuItem
                      onClick={handleCloseUserMenu}
                      component={Link}
                      to="/myProfile"
                    >
                      <Typography textAlign="center">My Profile</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              </Stack>
            </AppBar>

            <Box
              component="nav"
              sx={{
                width: { md: drawerWidth },
                flexShrink: { sm: 0 },
              }}
              aria-label="mailbox folders"
            >
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{
                  keepMounted: true,
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
