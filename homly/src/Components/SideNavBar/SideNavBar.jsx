// import React from "react";
// // import useState from "react";

// import {
//   AppBar,
//   Box,
//   Drawer,
//   CssBaseline,
//   ThemeProvider,
//   Typography,
//   Toolbar,
//   IconButton,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   ListItemButton,
// } from "@mui/material";

// import MenuIcon from "@mui/icons-material/Menu";
// import MailIcon from "@mui/icons-material/Mail";
// import InboxIcon from "@mui/icons-material/MoveToInbox";

// import NavigationBar from "../NavigationBar";
// import NavBar from "../../Components/NavBar/NavBar"
// import theme from "../../HomlyTheme";

// const drawerWidth = 240;
// const SideNavBar = () => {
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [isClosing, setIsClosing] = React.useState(false);
//   const handleDrawerClose = () => {
//     setIsClosing(true);
//     setMobileOpen(false);
//   };

//   const handleDrawerTransitionEnd = () => {
//     setIsClosing(false);
//   };

//   const handleDrawerToggle = () => {
//     if (!isClosing) {
//       setMobileOpen(!mobileOpen);
//     }
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <List>
//         {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {["All mail", "Trash", "Spam"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <ThemeProvider theme={theme}>
//       <Box sx={{ display: "flex", flexDirection: "column" }}>
//         {/* <CssBaseline /> */}
//         {/* <NavigationBar handleDrawerToggle={handleDrawerToggle} /> */}
//         {/* <AppBar
//           position="fixed"
//           sx={{
//             width: { sm: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` },
//           }}
//         >
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//               sx={{ mr: 2, display: { sm: "none" } }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" noWrap component="div">
//               Responsive drawer
//             </Typography>
//           </Toolbar>
//         </AppBar> */}
//         <NavBar />
//         <Box
//           component="nav"
//           sx={{
//             width: { sm: drawerWidth },
//             flexShrink: { sm: 0 },
//           }}
//           aria-label="mailbox folders"
//         >
//           {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//           <Drawer
//             variant="temporary"
//             open={mobileOpen}
//             onTransitionEnd={handleDrawerTransitionEnd}
//             onClose={handleDrawerClose}
//             ModalProps={{
//               keepMounted: true, // Better open performance on mobile.
//             }}
//             sx={{
//               display: { xs: "block", sm: "none" },
//               "& .MuiDrawer-paper": {
//                 boxSizing: "border-box",
//                 width: drawerWidth,
//               },
//             }}
//           >
//             {drawer}
//           </Drawer>
//           <Drawer
//             variant="permanent"
//             sx={{
//               display: { xs: "none", sm: "block" },
//               "& .MuiDrawer-paper": {
//                 boxSizing: "border-box",
//                 width: drawerWidth,
//               },
//             }}
//             open
//           >
//             {drawer}
//           </Drawer>
//         </Box>
//         {/* <Box
//             component="main"
//             sx={{
//                 flexGrow: 1,
//                 p: 3,
//                 width: { sm: `calc(100% - ${drawerWidth}px)` },
//             }}
//             >
//             <Toolbar />
//             </Box> */}
//       </Box>
//     </ThemeProvider>
//   );
// };

import React from "react";
import NavBar from "../../Components/NavBar/NavBar"
const SideNavBar = () => {
    return <NavBar sideNavBar={'block'}/>;
}

export default SideNavBar;
