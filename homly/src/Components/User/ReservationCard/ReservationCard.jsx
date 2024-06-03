import React, { useState, useContext } from "react";
import {
  Box,
  ThemeProvider,
  Grid,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { AuthContext } from "../../../Contexts/AuthContext";
import dayjs from "dayjs";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddReviewPopup from "../Review/AddReviewPopup";
import theme from "../../../HomlyTheme";
import PayNowPopup from "../../Common/PayNowPopup";
import ConfirmPopup from "../../PrimaryAdmin/ConfirmPopup";
import AxiosClient from "../../../services/AxiosClient";
import ErrorSnackbar from "../ErrorSnackbar";

export default function ReservationCard({
  HHreservation,
  HHpayment,
  HHName,
  HHAddress,
  HHImage,
  HHReservedDate,
  HHCheckIn,
  HHCheckOut,
  HHPrice,
  HHAdults,
  HHChildren,
  HHRooms,
  HHHalls,
  ExpireIn,
  ReservationId,
  IsReviewed,
  IsCancelled,
  setIsAddReview,
}) {
  const { setIsOngoingReservationChange } = useContext(AuthContext);
  const [openReview, setOpenReview] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openPay, setOpenPay] = useState(false);
  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });

  const handleCancelReservation = () => {
    AxiosClient.put("/user/auth/userReservation", {
      reservationId: ReservationId,
      isPaid: HHpayment,
    })
      .then((res) => {
        if (res.data.success) {
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "success",
            message: res.data.message,
          });
          setIsOngoingReservationChange(true);
        } else {
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "error",
            message: res.data.message,
          });
        }
      })
      .catch(() => {
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "error",
          message: "Something went wrong",
        });
      });
    setOpenConfirm(false);
  };

  const buttons = () => {
    if (HHreservation === "Ongoing") {
      if (HHpayment) {
        return (
          <Stack direction="row" sx={{ marginTop: { xs: "10px", sm: "0" } }}>
            <Stack
              direction="row"
              sx={{
                width: "108px",
                bgcolor: "success.light",
                padding: "6px 16px",
                borderRadius: "4px",
                fontSize: "0.875rem",
                justifyContent: "Center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontWeight: "500", color: "white" }}>
                PAID
              </Typography>
              <CheckCircleIcon sx={{ color: "white", marginLeft: "10px" }} />
            </Stack>
            <Button
              variant="outlined"
              onClick={() => setOpenConfirm(true)}
              sx={{ marginLeft: "15px" }}
            >
              Cancel
            </Button>
          </Stack>
        );
      } else {
        return (
          <Stack direction="row" sx={{ marginTop: { xs: "10px", sm: "0" } }}>
            <Button
              variant="contained"
              color="error"
              sx={{ width: "108px", cursor: "pointer" }}
              onClick={() => setOpenPay(true)}
            >
              Checkout
            </Button>
            <Button
              variant="outlined"
              onClick={() => setOpenConfirm(true)}
              sx={{ marginLeft: "15px", cursor: "pointer" }}
            >
              Cancel
            </Button>
          </Stack>
        );
      }
    } else {
      return (
        <Stack direction="row" sx={{ marginTop: { xs: "10px", sm: "0" } }}>
          {IsCancelled ? (
            <Typography
              sx={{ color: "red", fontSize: "1.2rem", fontWeight: "medium" }}
            >
              Cancelled
            </Typography>
          ) : (
            <Button
              variant="contained"
              disabled={IsReviewed}
              onClick={() => setOpenReview(true)}
              sx={{ cursor: "pointer" }}
            >
              {IsReviewed ? "Reviewed" : "Add Review"}
            </Button>
          )}
        </Stack>
      );
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          maxWidth: "700px",
          maxHeight: { xs: "auto", sm: "300px" },
          bgcolor: "#F5F5F5",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Grid item xs={12} sm={3} sx={{ alignItems: "center" }}>
          <Box
            component="img"
            src={HHImage}
            alt=""
            sx={{ height: "100%", width: "100%", borderRadius: "10px" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack
            direction="column"
            sx={{
              marginLeft: { sm: "10px" },
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Stack direction="column">
              <Stack direction="row">
                <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
                  {HHName.toUpperCase()}
                </Typography>
                <Typography sx={{ fontWeight: "light", fontSize: "0.8rem" }}>
                  {ReservationId}
                </Typography>
              </Stack>
              <Typography sx={{ fontWeight: "light", fontSize: "0.8rem" }}>
                {HHAddress}
              </Typography>
            </Stack>
            <Stack direction="column">
              <Grid
                container
                sx={{
                  alignItems: "flex-end",
                  marginTop: { xs: "5px", sm: "0" },
                }}
              >
                <Grid item xs={7} sm={5}>
                  <Typography sx={{ fontSize: "0.9rem" }}>
                    Reserved Date
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    {dayjs(HHReservedDate).format("DD-MM-YYYY")}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container sx={{ alignItems: "flex-end" }}>
                <Grid item xs={7} sm={5}>
                  <Typography sx={{ fontSize: "0.9rem" }}>Check in</Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    {dayjs(HHCheckIn).format("DD-MM-YYYY")}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container sx={{ alignItems: "flex-end" }}>
                <Grid item xs={7} sm={5}>
                  <Typography sx={{ fontSize: "0.9rem" }}>Check out</Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    {dayjs(HHCheckOut).format("DD-MM-YYYY")}
                  </Typography>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="column">
              <Grid container sx={{ alignItems: "flex-end" }}>
                <Grid item xs={7} sm={5}>
                  <Typography sx={{ fontSize: "0.9rem" }}>
                    Total Cost
                  </Typography>
                </Grid>
                <Grid item>
                  <Stack
                    direction="row"
                    sx={{ alignItems: "baseline", color: "primary.main" }}
                  >
                    <Typography
                      sx={{ fontSize: "0.8rem", fomtWeight: "medium" }}
                    >
                      LKR
                    </Typography>
                    <Typography sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                      {HHPrice}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Box
              sx={{
                display:
                  HHreservation === "Ongoing" && !HHpayment ? "flex" : "none",
              }}
            >
              <Typography sx={{ color: "red" }}>
                Expire in{" "}
                <span style={{ fontWeight: "600" }}>{ExpireIn} days</span>{" "}
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ justifyContent: "right" }}>
          <Stack
            direction="column"
            sx={{ justifyContent: "space-between", height: "100%" }}
          >
            <Stack direction="column">
              <Grid
                item
                container
                sx={{
                  justifyContent: { sm: "space-between" },
                  marginTop: "5px",
                }}
              >
                <Grid item xs={6} sm={8}>
                  <Typography>No of Adults</Typography>
                </Grid>
                <Grid item>
                  <Box
                    sx={{
                      bgcolor: "text.primary",
                      width: "25px",
                      height: "25px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      color: "white",
                    }}
                  >
                    <Typography>{HHAdults}</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid
                item
                container
                sx={{
                  justifyContent: { sm: "space-between" },
                  marginTop: "5px",
                }}
              >
                <Grid item xs={6} sm={8}>
                  <Typography>No of Children</Typography>
                </Grid>
                <Grid item>
                  <Box
                    sx={{
                      bgcolor: "text.primary",
                      width: "25px",
                      height: "25px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      color: "white",
                    }}
                  >
                    <Typography>{HHChildren}</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid
                item
                container
                sx={{
                  justifyContent: { sm: "space-between" },
                  marginTop: "5px",
                }}
              >
                <Grid item xs={6} sm={8}>
                  <Typography>No of Rooms</Typography>
                </Grid>
                <Grid item>
                  <Box
                    sx={{
                      bgcolor: "text.primary",
                      width: "25px",
                      height: "25px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      color: "white",
                    }}
                  >
                    <Typography>{HHRooms ? HHRooms : "all"}</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid
                item
                container
                sx={{
                  justifyContent: { sm: "space-between" },
                  marginTop: "5px",
                }}
              >
                <Grid item xs={6} sm={8}>
                  <Typography>No of Halls</Typography>
                </Grid>
                <Grid item>
                  <Box
                    sx={{
                      bgcolor: "text.primary",
                      width: "25px",
                      height: "25px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      color: "white",
                    }}
                  >
                    <Typography>{HHHalls != null ? HHHalls : "all"}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Stack>
            <Box
              sx={{ display: "flex", justifyContent: "end", marginTop: "5px" }}
            >
              {buttons()}
            </Box>
          </Stack>
        </Grid>
      </Grid>
      {/* add review popup */}
      <AddReviewPopup
        open={openReview}
        setOpen={setOpenReview}
        reservationId={ReservationId}
        setIsAddReview={setIsAddReview}
      />
      <ConfirmPopup
        open={openConfirm}
        setOpen={setOpenConfirm}
        title={"Cancel Your Reservation"}
        text={"Are you sure to cancel this reservation?"}
        controlfunction={handleCancelReservation}
      />
      <PayNowPopup
        isOpen={openPay}
        setIsOpen={setOpenPay}
        reservationId={ReservationId}
        price={HHPrice}
      />
      <ErrorSnackbar
        isOpen={errorStatus.isOpen}
        type={errorStatus.type}
        message={errorStatus.message}
        setIsOpen={(val) => setErrorStatus({ ...errorStatus, isOpen: val })}
      />
    </ThemeProvider>
  );
}
