import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
  }, [time]);

  const removeNotification = () => {
    setIsRemoving(true);
    setTimeout(() => {
      updateNotifications(id);
    }, 300);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        marginBottom: "20px",
        transition: "transform 0.3s ease",
        transform: isRemoving ? "translateX(100%)" : "translateX(0%)",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
      className="notification"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#fff",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Box display="flex" alignItems="center" gap="10px">
          {chooseIcon[type] ? chooseIcon[type] : <NotificationsActiveIcon sx={{ color: "grey.600" }} />}
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {type}
          </Typography>
        </Box>
        <IconButton onClick={removeNotification} sx={{ color: "primary.main" }}>
          <CancelIcon />
        </IconButton>
      </Box>
      <Box sx={{ padding: "15px 20px" }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ fontWeight: "bold", fontSize: "14px", color: "text.primary" }}>
              {senderId}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ fontSize: "16px", color: "text.secondary" }} gutterBottom>
              {data}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px 20px",
          backgroundColor: "#f5f5f5",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <Typography variant="caption" sx={{ color: "grey.600" }}>
          {showtime}
        </Typography>
      </Box>
    </Box>
  );
};

export default Notification;
