import React from "react";
import { useState } from "react";

import {
  Box,
  IconButton,
  Tooltip,
  Badge,
  Menu,
  MenuItem,
  Typography,
  Divider,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

const NotificationPanel = (props) => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [count, setCount] = useState(props.notifications.length);
  const handleCloseNotificationMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <Box alignItems={"center"}>
      <Tooltip title="notifications">
        <IconButton onClick={handleOpenUserMenu}>
          {/* <Badge
            color="primary"
            overlap="circular"
            badgeContent="0"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <NotificationsIcon
              sx={{ color: "text.primary", fontSize: "2rem" }}
            />
          </Badge> */}
          <Badge color="primary" badgeContent={count} overlap="circular">
            <NotificationsIcon
              sx={{ color: "text.primary", fontSize: "2rem" }}
            />
          </Badge>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px",width:"20%" }}
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
        onClose={handleCloseNotificationMenu}
      >
        {props.notifications.map((item) => (
          <MenuItem
            key={item.title}
            display={"flex"}
            sx={{m:0.5 ,borderRadius: "10px",boxShadow: "0px 39px 64px -55px rgba(0,0,0,0.75)",flexDirection: "column",alignItems:"flex-start"}}
            
            // alignItems={"flex-start"}
            // onClick={handleCloseUserMenu}
            // component={setting.name === "My Profile" ? Link : ""}
            // sx={{ display: setting.name === "My Profile" ? { xs: "none", md: "block" } : "block" }}
            // to={setting.path}
          >
            
              <Typography textAlign="center">{item.title}</Typography>
              <Divider variant="middle"  />
              <Typography textAlign="center">{item.description}</Typography>
           
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default NotificationPanel;
