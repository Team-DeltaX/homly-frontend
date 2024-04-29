import React from "react";
import ReservationCard from "../ReservationCard/ReservationCard";
import { Box, Stack } from "@mui/material";
import ReservationCardSkeleton from "../Skeleton/ReservationCardSkeleton";

export default function PastReservation({
  reservation,
  setIsAddReview,
  showSkeleton,
}) {
  return (
    <Stack
      direction="column"
      sx={{ height: { md: "380px" }, overflowY: { xs: "none", md: "scroll" } }}
    >
      {showSkeleton
        ? [1, 2, 3].map((index) => {
            return <ReservationCardSkeleton key={index} />;
          })
        : reservation.length > 0
        ? reservation.map((reserv, index) => {
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
                />
              </Box>
            );
          })
        : "No Reservations Found!"}
    </Stack>
  );
}
