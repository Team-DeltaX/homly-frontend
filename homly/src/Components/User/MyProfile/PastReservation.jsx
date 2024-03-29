import React from "react";
import ReservationCard from "../ReservationCard/ReservationCard";
import { Box, Stack } from "@mui/material";

export default function pastReservation({ reservation }) {
  return (
    <Stack
      direction="column"
      sx={{ height: { md: "380px" }, overflowY: { xs: "none", md: "scroll" } }}
    >
      {reservation.length > 0
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
                  HHPrice={reserv.reservation.HallPrice+reserv.reservation.RoomPrice}
                  HHAdults={reserv.reservation.NoOfAdults}
                  HHChildren={reserv.reservation.NoOfChildren}
                  HHRooms={reserv.reservation.NoOfRooms}
                  HHHalls={reserv.reservation.NoOfHalls}
                  IsReviewed = {reserv.IsReviewed}
                />
              </Box>
            );
          })
        : "No Reservations Found!"}
    </Stack>
  );
}
