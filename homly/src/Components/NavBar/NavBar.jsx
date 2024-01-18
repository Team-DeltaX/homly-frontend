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
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { ThemeProvider } from "@emotion/react";

import { Link } from "react-router-dom";

import theme from "../../HomlyTheme";

const drawerWidth = 240;
const settings = ["My Profile", "Logout"];
const pages = ["Home", "Holiday Homes", "Contact Us"];

const NavBar = (props) => {
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
                {[
                    "Home", "Holiday Homes", "Contact Us", "My Profile"
                ].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton component={Link}
                            to={`/${text}`}>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                {[
                    "Personal Details",
                    "Security",
                    "Payement Details",
                    "My Reservation",
                ].map((text, index) => (
                    <ListItem key={text} sx={{ padding: '0 0 0 10%', top: '-10px' }} >
                        <ListItemButton sx={{ padding: 0 }} component={Link}
                            to={`/My Profile/${text}`}>
                            <ListItemText secondary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
    const drawer = (
        <div>
            <Toolbar />
            <List>
                {[
                    "Personal Details",
                    "Security",
                    "Payement Details",
                    "My Reservation",
                ].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton component={Link}
                            to={`/My Profile/${text}`}>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <ThemeProvider theme={theme}>
            <Box>
                {/* <CssBaseline /> */}
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
                            display={{ xs: "none",sm: "none", md: "flex" }}
                        >
                            {pages.map((page) => (
                                <Button variant="text"
                                    key={page}
                                    component={Link}
                                    to={`/${page}`}
                                    sx={{ color: "text.primary" }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Stack>
                        <Badge
                            color="primary"
                            overlap="circular"
                            badgeContent=" "
                            variant="dot"
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                        >
                            <NotificationsIcon
                                sx={{ color: "text.primary", fontSize: "2rem" }}
                            />
                        </Badge>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="https://img.freepik.com/premium-psd/3d-cartoon-man-smiling-portrait-isolated-transparent-background-png-psd_888962-1570.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: "45px"}}
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
                                        key={setting}
                                        onClick={handleCloseUserMenu}
                                        component={setting === "My Profile" ? Link : ""}
                                        sx={{display:setting === "My Profile" ? { xs: "none", md: "block" }: "block"}}
                                        to={`/${setting}`}
                                    >
                                        <Typography textAlign="center">{setting}</Typography>
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
                        display: props.sideNavBar,
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
                            display: { xs: "block", sm: "block",md: "none"},
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
                            display: { xs: "none", sm: "none", md:"block" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth,
                                bgcolor: "primary.main",
                                color: "white",
                            },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default NavBar;
