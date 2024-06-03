import React from "react";
import { Box, Stack } from "@mui/material";
import ReservationCard from "../ReservationCard/ReservationCard";
import dayjs from "dayjs";
import ReservationCardSkeleton from "../Skeleton/ReservationCardSkeleton";

export default function OngoingReservation({ reservation, showSkeleton }) {
  return (
    <Stack
      direction="column"
      sx={{ height: { md: "380px" }, overflowY: { xs: "none", md: "scroll" } }}
    >
      {showSkeleton
        ? [1, 2].map((index) => {
            return <ReservationCardSkeleton key={index} />;
          })
        : reservation.length > 0
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
                  HHImage={reserv.holidayHome[0].MainImage}
                  ReservationId={reserv.reservation.ReservationId}
                />
              </Box>
            );
          })
        : "No Reservations Found!"}
    </Stack>
  );
}
