import React from "react";

import ReservationCard from "../ReservationCard/ReservationCard";
import { Box, Stack } from "@mui/material";

export default function OngoingReservation({ reservation }) {
  return (
    <Stack direction="column" sx={{ height: { md: "380px" } }}>
      {/* <Box sx={{marginTop:'10px'}}>
        <ReservationCard
        HHreservation="Ongoing"
        HHpayment={false}
        HHName="Holiday Home"
        HHAddress="No. 1, Holiday Home, Holiday Road, Holiday City"
        HHReservedDate="2021-10-20"
        HHCheckIn="2021-10-20"
        HHCheckOut="2021-10-21"
        HHPrice="1000"
        HHAdults={3}
        HHChildren={2}
        HHRooms={2}
        />
      </Box>
      <Box sx={{marginTop:'10px'}}>
        <ReservationCard
        HHreservation="Ongoing"
        HHpayment={true}
        HHName="Holiday Home"
        HHAddress="No. 1, Holiday Home, Holiday Road, Holiday City"
        HHReservedDate="2021-10-20"
        HHCheckIn="2021-10-20"
        HHCheckOut="2021-10-21"
        HHPrice="1000"
        HHAdults={3}
        HHChildren={2}
        HHRooms={2}
        />
      </Box> */}
      {reservation.length > 0
        ? reservation.map((reserv, index) => {
            return (
              <Box sx={{ marginTop: "10px" }} key={index}>
                <ReservationCard
                  HHreservation="Ongoing"
                  HHpayment={reserv.IsPaid}
                  HHName={reserv.HolidayHome}
                  HHAddress={reserv.address}
                  HHReservedDate={reserv.createdAt}
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
          })
        : "No Reservations Found!"}
    </Stack>
  );
}
