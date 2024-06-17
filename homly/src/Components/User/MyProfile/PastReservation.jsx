import { useState, useEffect } from "react";
import ReservationCard from "../ReservationCard/ReservationCard";
import {
  Box,
  Stack,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
} from "@mui/material";
import ReservationCardSkeleton from "../Skeleton/ReservationCardSkeleton";

export default function PastReservation({
  reservation,
  setIsAddReview,
  showSkeleton,
}) {
  const [tempReservation, setTempReservation] = useState(reservation);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    console.log("first", reservation);
    if (filter === "cancelled") {
      setTempReservation(
        reservation.filter((reserv) => reserv.reservation.IsCancelled)
      );
    } else if (filter === "non-cancelled") {
      setTempReservation(
        reservation.filter((reserv) => !reserv.reservation.IsCancelled)
      );
    } else {
      setTempReservation(reservation);
    }
  }, [filter, reservation]);

  return (
    <Stack direction="column" sx={{ height: { md: "380px" } }}>
      <Box>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel
              value="cancelled"
              control={<Radio />}
              label="Cancelled"
            />
            <FormControlLabel
              value="non-cancelled"
              control={<Radio />}
              label="Non-Cancelled"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Stack
        direction="column"
        sx={{
          overflowY: { xs: "none", md: "scroll" },
          height: "100%",
        }}
      >
        {showSkeleton ? (
          [1, 2, 3].map((index) => {
            return <ReservationCardSkeleton key={index} />;
          })
        ) : tempReservation.length > 0 ? (
          tempReservation.map((reserv, index) => {
            return (
              <Box sx={{ marginTop: "10px" }} key={index}>
                <ReservationCard
                  HHreservation="Past"
                  HHName={reserv.holidayHome[0].Name}
                  HHAddress={reserv.holidayHome[0].Address}
                  HHImage={reserv.holidayHome[0].MainImage}
                  HHReservedDate={reserv.reservation.createdAt}
                  HHCheckIn={reserv.reservation.CheckinDate}
                  HHCheckOut={reserv.reservation.CheckoutDate}
                  HHPrice={
                    reserv.reservation.HallPrice + reserv.reservation.RoomPrice
                  }
                  HHAdults={reserv.reservation.NoOfAdults}
                  HHChildren={reserv.reservation.NoOfChildren}
                  HHRooms={reserv.reservation.NoOfRooms}
                  HHHalls={reserv.reservation.NoOfHalls}
                  ReservationId={reserv.reservation.ReservationId}
                  IsReviewed={reserv.IsReviewed}
                  setIsAddReview={setIsAddReview}
                  IsCancelled={reserv.reservation.IsCancelled}
                  CancelledBy={reserv.reservation.CancelledBy}
                />
              </Box>
            );
          })
        ) : (
          <Box
            sx={{
              height: "100%",
              minHeight: { xs: "258px", sm: "458px", md: "auto" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ color: "grey.500" }}>
              No Reservation Found!
            </Typography>
          </Box>
        )}
      </Stack>
    </Stack>
  );
}
