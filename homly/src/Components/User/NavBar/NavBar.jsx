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
  CssBaseline,
  Stack,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import theme from "../../../HomlyTheme";
import "./NavBar.css";
// import useSocketioClient from "../../../services/SocketioClient";
import { AuthContext } from "../../../Contexts/AuthContext";
import NotificationPanal from "../../Common/NotificationPanal/NotificationPanal";
const drawerWidth = 240;
const pages = [
  { name: "Home", path: "/Home" },
  { name: "Holiday Homes", path: "/holidayHomes" },
];

const respSidePages = [
  { name: "Home", path: "/Home" },
  { name: "Holiday Homes", path: "/holidayHomes/" },
  { name: "My Profile", path: "/myProfile" },
];

const NavBar = ({ refContactUS, position }) => {
  const { user } = useContext(AuthContext);

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
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

  // const socket = useSocketioClient();

  // useEffect(() => {
  //   socket &&
  //     socket.on("connection", (data) => {
  //       console.log(data);
  //     });
  // }, [socket]);

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

  const handleScrollClick = () => {
    if (window.innerWidth < 600) {
      setMobileOpen(!mobileOpen);
    }
    refContactUS.current?.scrollIntoView({ behavior: "smooth" });
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
        <ListItem
          disablePadding
          sx={{ display: refContactUS ? "flex" : "none" }}
        >
          <ListItemButton onClick={handleScrollClick}>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        <AppBar
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "secondary.main",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            position: position
              ? position
              : { xs: "fixed", sm: "fixed", md: "sticky" },
          }}
        >
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" }, color: "text" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ paddingRight: { xs: "4%", sm: "2%" } }}
          >
            <Stack
              direction="row"
              spacing={2}
              display={{ xs: "none", sm: "none", md: "flex" }}
            >
              {pages.map((page) => (
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  key={page.name}
                >
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
                </Box>
              ))}
              <Box
                onClick={handleScrollClick}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "text.primary",
                    textTransform: "uppercase",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    display: refContactUS ? "flex" : "none",
                  }}
                >
                  Contact Us
                </Typography>
              </Box>
            </Stack>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-basis",
                  gap: "1.5em",
                }}
              >
                <NotificationPanal
                  notifications={notifications}
                  SetNotifications={SetNotifications}
                  bell={true}
                />
              </Box>
            </Box>
            <Stack direction="row">
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
          </Stack>
        </AppBar>
        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
            display: "none",
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
              position: "fixed",
            }}
          >
            {mainDrawer}
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default NavBar;
