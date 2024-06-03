import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";

import FeedbackIcon from "@mui/icons-material/Feedback";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import DangerousIcon from "@mui/icons-material/Dangerous";
import CancelIcon from "@mui/icons-material/Cancel";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import BlockIcon from '@mui/icons-material/Block';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ErrorIcon from '@mui/icons-material/Error';

const Notification = ({
  type,
  data,
  senderId,
  id,
  updateNotifications,
  time,
}) => {
  const [isRemoving, setIsRemoving] = useState(false);
  const [showtime, setShowtime] = useState("");
  const chooseIcon = {
    "New Feedback": <FeedbackIcon sx={{ color: "#823" }} />,
    "Authorization Successful": <CloudDoneIcon sx={{ color: "green" }} />,
    "Authorization Denied": <DangerousIcon sx={{ color: "red" }} />,
    "Warning": <WarningAmberIcon sx={{ color: "red" }} />, 
    "New Reservation Added": <AddToPhotosIcon sx={{ color: "#823" }} />,	
    "Cancel Reservation": <BlockIcon sx={{ color: "#823" }} />,
    "New Complain": <ErrorIcon sx={{ color: "#823" }} />,
  };

  useEffect(() => {
    const today = dayjs();
    const diff = today.diff(dayjs(time), "minute");

    if (diff < 1) {
      setShowtime("Just Now");
    } else if (diff < 60) {
      setShowtime(`${diff} minutes ago`);
    } else if (diff < 1440) {
      setShowtime(`${Math.floor(diff / 60)} hours ago`);
    } else if (diff < 10080) {
      setShowtime(`${Math.floor(diff / 1440)} days ago`);
    } else if (diff < 40320) {
      setShowtime(`${Math.floor(diff / 10080)} weeks ago`);
    } else if (diff < 525600) {
      setShowtime(`${Math.floor(diff / 40320)} months ago`);
    } else {
      setShowtime(`${Math.floor(diff / 525600)} years ago`);
    }
  }, [showtime, time]);

  const removeNotification = () => {
    setIsRemoving(true);
    setTimeout(() => {
      updateNotifications(id);
    }, 300);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ececec",
        borderRadius: "10px",
        marginBottom: "15px",
        transition: "transform 0.3s ease",
        transform: isRemoving ? "translateX(100%)" : "translateX(0%)",
      }}
      className="notification"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px 15px",
        }}
      >
        <Box display={"flex"} gap={"10px"}>
          {chooseIcon[type] ? chooseIcon[type] : <NotificationsActiveIcon sx={{ color: "grey6" }} />}
          <Typography variant="p" sx={{ fontWeight: "bold" }}>
            {type}
          </Typography>
        </Box>
        <Box>
          <CancelIcon
            sx={{ color: "primary.main", cursor: "pointer" }}
            onClick={removeNotification}
          />
        </Box>
      </Box>
      <hr
        style={{
          width: "180px",
          margin: "5px 0 5px 20px",
          color: "lightgray",
          opacity: "0.7",
        }}
      />
      <Grid container sx={{ padding: "5px 15px" }} alignItems={"center"}>
        <Grid container>
          <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="p" sx={{ fontSize: "16px", color: "grey6" }} gutterBottom>
              {data}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="p"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#4E4E4E" }}
            >
              {/* Send by : {senderId} - {id} */}
              Send by : {senderId}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "5px",
        }}
      >
        <Typography
          variant="p"
          sx={{ padding: "0 15px", color: "grey6", fontSize: "12px" }}
        >
          {showtime}
        </Typography>
      </Box>
    </Box>
  );
};

export default Notification;
