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
import { CssBaseline } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
// import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import MenuIcon from "@mui/icons-material/Menu";


import { ThemeProvider } from "@emotion/react";

import { Link, NavLink } from "react-router-dom";

import NotificationPanel from "../../NotificationPanel/NotificationPanel";

import theme from "../../../HomlyTheme";
import "./NavBar.css"

const drawerWidth = 240;
const settings = [{ name: "My Profile", path: '/myProfile' }, { name: "Logout" }];
const pages = [
    { name: "Home", path: "/" },
    { name: "Holiday Homes", path: "/holidayHomes" },
    { name: "Contact Us", path: "/contactUs" }
];

const respSidePages = [
    { name: "Home", path: "/" },
    { name: "Holiday Homes", path: "/holidayHomes" },
    { name: "Contact Us", path: "/contactUs" },
    { name: "My Profile", path: '/myProfile' },
];


const notifications = [
    { title: "notification 1", description: "this is notification 1.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", type: 'canceled' }, 
    { title: "notification 2", description: "this is notification 2", type: '' }, 
    { title: "notification 3", description: "this is notification 3", type: '' }];



const NavBar = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

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
                        <ListItemButton component={Link}
                            to={text.path}>
                            <ListItemText primary={text.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
 

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
                        // width: { sm: `calc(100% - ${drawerWidth}px)` },
                        // ml: { sm: `${drawerWidth}px` },
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

                        {/* <Typography variant="h6" noWrap component="div">
                            Responsive drawer
                        </Typography> */}
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
                                <NavLink key={page.name} to={page.path} className={({ isActive }) => (isActive ? 'activePage' : 'normalPage')
                                }>
                                    <Button variant="text"

                                        sx={{ color: "text.primary" }}
                                    >
                                        {page.name}
                                    </Button>
                                </NavLink>
                            ))}
                        </Stack>
                        {/* notification button */}
                        {/* <NotificationPanel /> */}
                        {/* user button */}
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" sx={{ height: '48px', width: '48px' }} src="https://img.freepik.com/premium-psd/3d-cartoon-man-smiling-portrait-isolated-transparent-background-png-psd_888962-1570.jpg" />
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
                                        to={setting.path}
                                    >
                                        <Typography textAlign="center">{setting.name}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Stack>
                </AppBar>
                <Box
                    component="nav"
                    sx={{
                        width: { sm: drawerWidth },
                        flexShrink: { sm: 0 },
                        display: 'none',
                    }}
                    aria-label="mailbox folders"
                >
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
                    {/* <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth,
                                color: "white",
                                
                            },
                            bgcolor: "primary.main",
                        }}
                        open
                    >
                        {drawer}
                    </Drawer> */}
                    
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default NavBar;
