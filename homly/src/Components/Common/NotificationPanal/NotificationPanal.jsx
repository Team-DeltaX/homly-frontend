import React, { useState, useEffect, useRef } from "react";
import Notification from "./Notification";
import NotifyEmpty from "./NotifyEmpty";
import { Paper, Box, Typography,  Badge } from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

import "../../../Pages/locationAdmin/style.css";

const NotificationPanal = ({ notifications, SetNotifications, bell }) => {
  const [Messagecount, SetMessagecount] = useState(notifications.length);
  const [showNotifications, setShowNotifications] = useState(false);

  const notificationsContainerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationsContainerRef.current &&
        !notificationsContainerRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleBellClick = () => {
    setShowNotifications((prev) => !prev);
  };

  const removeAllNotifications = () => {
    SetNotifications([]);
    SetMessagecount(0);
  };

  const updateNotifications = (removedNotificationId) => {
    SetNotifications((prevNotifications) =>
      prevNotifications.filter(
        (notification) => notification.id !== removedNotificationId
      )
    );
    SetMessagecount((prevCount) => prevCount - 1);
  };
  return (
    <Box>
      <Box
        className="bell_container"
        id="bell"
        sx={{ display: bell ? "block" : "none" }}
        onClick={handleBellClick}
      >
        {bell ? (
          <Badge badgeContent={Messagecount} color="primary" sx={{ ".css-6yc3qz-MuiBadge-badge ":{
            top:'7px',
            right:'7px',
          }}}>
            <NotificationsIcon
              sx={{ color: "grey6", fontSize: "2.5rem", cursor: "pointer" }}
            />
          </Badge>
        ) : (
          ""
        )}
      </Box>
      <Paper
        ref={notificationsContainerRef}
        className="notifications_container"
        sx={{
          width: "400px",
          maxHeight: "400px",
          backgroundColor: "rgba(255,255,255,0.8)",
          position: "absolute",
          borderRadius: "15px",
          zIndex: "1000",
          padding: "10px",
          right: 0,
          display: showNotifications ? "block" : "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <Typography variant="p" fontWeight={"bold"}>
            Notifications
          </Typography>
          <Typography
            variant="p"
            sx={{ color: "#2B69C7", fontSize: "0.9rem", cursor: "pointer" }}
            onClick={removeAllNotifications}
          >
            Mark All As Read
          </Typography>
        </Box>
        <Box
          className="notify_container"
          sx={{ maxHeight: "350px", overflowY: "scroll", overflowX: "hidden" }}
        >
          {notifications.length === 0 ? (
            <NotifyEmpty />
          ) : (
            notifications.map((notifi) => (
              <Notification
                key={notifi.id}
                id={notifi.id}
                type={notifi.type}
                url={notifi.image}
                data={notifi.data}
                updateNotifications={updateNotifications}
              ></Notification>
            ))
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default NotificationPanal;
