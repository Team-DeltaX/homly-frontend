import { useState, useEffect } from "react";
import {
  Box,
  Stack,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import ReservationCard from "../ReservationCard/ReservationCard";
import dayjs from "dayjs";
import ReservationCardSkeleton from "../Skeleton/ReservationCardSkeleton";

export default function OngoingReservation({ reservation, showSkeleton }) {
  const [tempReservation, setTempReservation] = useState(reservation);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (filter === "paid") {
      setTempReservation(
        reservation.filter((reserv) => reserv.reservation.IsPaid)
      );
    } else if (filter === "unpaid") {
      setTempReservation(
        reservation.filter((reserv) => !reserv.reservation.IsPaid)
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
            <FormControlLabel value="paid" control={<Radio />} label="Paid" />
            <FormControlLabel
              value="unpaid"
              control={<Radio />}
              label="Unpaid"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Stack
        direction="column"
        sx={{
          overflowY: { xs: "none", md: "scroll" },
        }}
      >
        {showSkeleton
          ? [1, 2].map((index) => {
              return <ReservationCardSkeleton key={index} />;
            })
          : tempReservation.length > 0
          ? tempReservation.map((reserv, index) => {
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
                      reserv.reservation.HallPrice +
                      reserv.reservation.RoomPrice
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
    </Stack>
  );
}
