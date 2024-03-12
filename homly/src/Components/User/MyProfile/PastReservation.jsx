import React from "react";
import ReservationCard from "../ReservationCard/ReservationCard";
import { Box, Stack } from "@mui/material";

export default function pastReservation({ reservation }) {
  return (
    <Stack
      direction="column"
      sx={{ height: { md: "380px" }, overflowY: { xs: "none", md: "scroll" } }}
    >
      {reservation.map((reserv, index) => {
        return (
          <Box sx={{ marginTop: "10px" }} key={index}>
            <ReservationCard
              HHreservation="Past"
              HHName={reserv.HolidayHome}
              HHAddress={reserv.address}
              HHReservedDate={reserv.reservedDate}
              HHCheckIn={reserv.CheckinDate}
              HHCheckOut={reserv.CheckoutDate}
              HHPrice={reserv.Price}
              HHAdults={reserv.NoOfAdults}
              HHChildren={reserv.NoOfChildren}
              HHRooms={reserv.NoOfRooms}
              HHHalls={reserv.NoOfHalls}
            />
          </Box>
        );
      })}
    </Stack>
  );
}
