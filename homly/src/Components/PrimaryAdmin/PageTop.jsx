import { Box, Menu, MenuItem, ThemeProvider, Typography } from "@mui/material";

import { useState } from "react";
import theme from "../../HomlyTheme";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationPanal from "../Common/NotificationPanal/NotificationPanal";

const Pagetop = ({ heading, setShowNav }) => {
  // const [open, setOpen] = useState(false);

 
  // const handleIconClick = () => {
  //   setOpen(!open);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  //   setAnchorEl(null);
  // };
  const notifyarray = [
    {
      id: 1,
      name: "admin add",
      description: "admin added holiday home request abscalkjf",
    },
    {
      id: 2,
      name: "admin add",
      description: "admin added holiday home request abscalkjf",
    },
    {
      id: 3,
      name: "admin add request",
      description: "admin added holiday home request abscalkjf",
    },
    {
      id: 4,
      name: "admin add request",
      description: "admin added holiday home request abscalkjf",
    },
    {
      id: 5,
      name: "admin add request",
      description: "admin added holiday home request abscalkjf",
    },
  ];
  const openNav = () => {
    setShowNav("nav_grid_active");
  };

  return (
    <ThemeProvider theme={theme}>
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
        <Box sx={{ fontSize: "20px", fontFamily: "Roboto Flex", width: '60%' }}>
          <Typography variant="h4"  sx={{ fontWeight: "bold",marginLeft:'5%',fontSize:{md:'35px',xs:'20px'} }}> {heading}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* <Box>
            <NotificationsIcon
              sx={{ fontSize: "50px", color: "#999090" }}
              onClick={handleIconClick}
            />
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorE1={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              style={{
                marginTop: "40px",
                width: "500px",
                marginRight: "40px",
              }}
            >
              {notifyarray.map((n) => {
                return (
                  <MenuItem
                    key={n.id}
                    sx={{
                      width: "300px",
                      fontFamily: "Roboto",
                      height: "60px",
                    }}
                  >
                    {n.name}
                  </MenuItem>
                );
              })}
            </Menu>
          </Box> */}

          <NotificationPanal
            
            bell={true}
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
    </ThemeProvider>
  );
};

export default Pagetop;
