import React from "react";
import { Box, Stack } from "@mui/material";
import ReservationCard from "../ReservationCard/ReservationCard";
import dayjs from "dayjs";

export default function OngoingReservation({ reservation }) {
  return (
    <Stack direction="column" sx={{ height: { md: "380px" } }}>
      {reservation.length > 0
        ? reservation.map((reserv, index) => {
            return (
              <Box sx={{ marginTop: "10px" }} key={index}>
                <ReservationCard
                  HHreservation="Ongoing"
                  HHpayment={reserv.reservation.IsPaid}
                  HHName={reserv.holidayHome[0].Name}
                  HHAddress={reserv.holidayHome[0].Address}
                  HHReservedDate={reserv.reservation.updatedAt}
                  HHCheckIn={reserv.reservation.CheckinDate}
                  HHCheckOut={reserv.reservation.CheckoutDate}
                  HHPrice={
                    reserv.reservation.HallPrice + reserv.reservation.RoomPrice
                  }
                  HHAdults={reserv.reservation.NoOfAdults}
                  HHChildren={reserv.reservation.NoOfChildren}
                  HHRooms={reserv.reservation.NoOfRooms}
                  HHHalls={reserv.reservation.NoOfHalls}
                  ExpireIn={dayjs(reserv.expireDate).diff(dayjs(), "day") + 1}
                  HHImage={reserv.holidayHome.MainImage}
                />
              </Box>
            );
          })
        : "No Reservations Found!"}
    </Stack>
  );
}
