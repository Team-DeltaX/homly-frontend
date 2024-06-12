import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  ThemeProvider,
  Typography,
  Tab,
  Tabs,
  Card,
  CardContent,
} from "@mui/material";
import { AuthContext } from "../../../Contexts/AuthContext";
import OngoingReservation from "./OngoingReservation";
import PastReservation from "./PastReservation";
import theme from "../../../HomlyTheme";
import AxiosClient from "../../../services/AxiosClient";

const MyReservation = () => {
  const { setIsOngoingReservationChange, isOngoingReservationChange } =
    useContext(AuthContext);
  const [value, setValue] = useState(0);
  const [ongoingReservation, setOngoingReservation] = useState([]);
  const [pastReservation, setPastReservation] = useState([]);
  const [showPastSkeleton, setShowPastSkeleton] = useState(true);
  const [showOngoingSkeleton, setShowOngoingSkeleton] = useState(true);

  const [isAddReview, setIsAddReview] = useState(false);

  const tabComponent = [
    <OngoingReservation
      reservation={ongoingReservation}
      showSkeleton={showOngoingSkeleton}
    />,
    <PastReservation
      reservation={pastReservation}
      setIsAddReview={setIsAddReview}
      showSkeleton={showPastSkeleton}
    />,
  ];

  useEffect(() => {
    AxiosClient.get("/user/auth/userOngoingReservation")
      .then((response) => {
        console.log("respone", response.data);
        setOngoingReservation(response.data);
        setShowOngoingSkeleton(false);
        setIsOngoingReservationChange(false);
      })
      .catch(() => {
        setOngoingReservation([]);
        setShowOngoingSkeleton(false);
      });

    AxiosClient.get("/user/auth/userPastReservation")
      .then((response) => {
        setPastReservation(response.data);
        setIsAddReview(false);
        setShowPastSkeleton(false);
      })
      .catch(() => {
        setPastReservation([]);
        setShowPastSkeleton(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAddReview, isOngoingReservationChange]);

  const handleTabChange = (event, newValue) => {
    event.preventDefault();
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
            <CardContent
              sx={{ display: "flex", flexDirection: "column", padding: 1.5 }}
            >
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
