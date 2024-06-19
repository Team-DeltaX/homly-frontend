import React, { useState, useEffect, useRef, useContext } from "react";
import Notification from "./Notification";
import NotifyEmpty from "./NotifyEmpty";
import { Paper, Box, Typography, Badge } from "@mui/material";
import NotificationSnackBar from "./NotificationSnackBar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "../../../Pages/locationAdmin/style.css";
import { SocketioContext } from "../../../Contexts/SocketioContext";
import AxiosClient from "../../../services/AxiosClient";
import CancelIcon from "@mui/icons-material/Cancel";

const NotificationPanal = ({ bell }) => {
  const { socket } = useContext(SocketioContext);
  const [Messagecount, SetMessagecount] = useState(0);
  const [notifications, SetNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [newNotifications, setNewNotifications] = useState("");
  const notificationsContainerRef = useRef(null);

  useEffect(() => {
    AxiosClient.get("/common/auth/notifications")
      .then((res) => {
        SetNotifications(res.data);
        SetMessagecount(res.data.length);
      })
      .catch(() => {});
  }, []);

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

  useEffect(() => {
    if (socket) {
      socket.on("notification", (notification) => {
        SetNotifications((prevNotifications) => [
          notification,
          ...prevNotifications,
        ]);
        SetMessagecount((prevCount) => prevCount + 1);
        setOpenSnackBar(true);
        setNewNotifications(notification.data);
      });
    }
  }, [socket]);

  const handleBellClick = () => {
    setShowNotifications((prev) => !prev);
  };

  const removeAllNotifications = () => {
    AxiosClient.delete("/common/auth/notifications", {
      data: { notificationIds: null, all: true },
    })
      .then(() => {
        SetNotifications([]);
        SetMessagecount(0);
      })
      .catch(() => {});
  };

  const updateNotifications = (removedNotificationId) => {
    AxiosClient.delete("/common/auth/notifications", {
      data: { notificationIds: removedNotificationId },
    })
      .then(() => {
        SetNotifications((prevNotifications) =>
          prevNotifications.filter(
            (notification) => notification.id !== removedNotificationId
          )
        );
        SetMessagecount((prevCount) => prevCount - 1);
      })
      .catch(() => {});
  };

  const handleClickPanelClose = () => {
    setShowNotifications(false);
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
          <Badge
            badgeContent={Messagecount}
            color="primary"
            sx={{
              ".css-6yc3qz-MuiBadge-badge ": {
                top: "7px",
                right: "7px",
              },
            }}
          >
            <NotificationsIcon
              sx={{ color: "grey6", fontSize: "2.5rem", cursor: "pointer" }}
            />
          </Badge>
        ) : (
          ""
        )}
      </Box>
      {showNotifications && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={handleBellClick}
        />
      )}
      <Paper
        ref={notificationsContainerRef}
        className="notifications_container"
        sx={{
          width: "400px",
          maxHeight: "400px",
          backgroundColor: "rgba(255,255,255,0.8)",
          position: "absolute",
          borderRadius: "15px",
          zIndex: 1000,
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
                data={notifi.data}
                senderId={notifi.senderId}
                time={notifi.time}
                updateNotifications={updateNotifications}
              />
            ))
          )}
        </Box>
        <Box
          sx={{ display: "none", zIndex: "1000" }}
          className="notification_panel_close"
        >
          <CancelIcon
            sx={{ color: "primary.main", fontSize: "2rem", cursor: "pointer" }}
            onClick={handleClickPanelClose}
          />
        </Box>
      </Paper>
      <NotificationSnackBar
        open={openSnackBar}
        setOpen={setOpenSnackBar}
        message={newNotifications}
      />
    </Box>
  );
};

export default NotificationPanal;
