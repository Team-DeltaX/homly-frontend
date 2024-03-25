import React, { useState, useEffect } from "react";
import {
  Box,
  ThemeProvider,
  Typography,
  Tab,
  Tabs,
  Card,
  CardContent,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import OngoingReservation from "./OngoingReservation";
import PastReservation from "./PastReservation";
import theme from "../../../HomlyTheme";

const MyReservation = () => {
  const [value, setValue] = useState(0);
  const [ongoingReservation, setOngoingReservation] = useState([]);
  const [pastReservation, setPastReservation] = useState([]);
  const tabComponent = [
    <OngoingReservation reservation={ongoingReservation} />,
    <PastReservation reservation={pastReservation} />,
  ];

  const Navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3002/users/auth/userOngoingReservation", {
        withCredentials: true,
      })
      .then((response) => {
        console.log("reservation ongoing", response.data);
        setOngoingReservation(response.data);
      })
      .catch((err) => {
        console.log("error", err);
        if (!err.response.data.autherized) {
          Navigate("/");
        }
      });

    axios
      .get("http://localhost:3002/users/auth/userPastReservation", {
        withCredentials: true,
      })
      .then((response) => {
        console.log("reservation past", response.data);
        setPastReservation(response.data);
      })
      .catch((err) => {
        console.log("error", err);
        if (!err.response.data.autherized) {
          Navigate("/");
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography variant="h4">My Reservation</Typography>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: { xs: "3% 0 20% 0", sm: "3% 0 0 0" },
          }}
        >
          <Card sx={{ width: { xs: "100%", sm: "90%" } }}>
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <Tabs
                value={value}
                onChange={handleTabChange}
                textColor="secondary"
                aria-label="secondary tabs example"
                sx={{
                  "& .css-1qqs86a-MuiButtonBase-root-MuiTab-root.Mui-selected ":
                    {
                      bgcolor: "primary.main",
                      color: "white",
                      fontWeight: "bold",
                      width: "50% !important",
                    },
                  "& .css-1qqs86a-MuiButtonBase-root-MuiTab-root ": {
                    padding: "10px !important",
                    border: "1px solid #872341",
                    width: "50% !important",
                  },
                  minWidth: "295px",
                  maxWidth: "450px",
                }}
              >
                <Tab value={0} label="Ongoing Reservation" />
                <Tab value={1} label="Past Reservation" />
              </Tabs>
              {tabComponent[value]}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MyReservation;
