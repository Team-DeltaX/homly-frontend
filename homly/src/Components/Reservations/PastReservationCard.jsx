import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import holidayhome from "../../Assets/images/holidayHome.jpg";
import "./Reservation.css";
import ViewPopUp from "./ViewPopup";
import dayjs from "dayjs";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import AddComplainPopUp from "../Reservations/AddComplainPopUp";

const PastReservationCard = (props) => {
  const [isSpecial, setIsSpecial] = useState(props.reservation.IsSpecial);
  const [isCancelled, setIsCancelled] = useState(props.reservation.IsCancelled);

  return (
    <Grid container spacing={2} className="reservation-preview" key={props.reservation.id}>
      <Grid container className="columnData" sx={{ width: "100%" }}>
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: { xs: 2, sm: 0 },
          }}
        >
          <img
            className="reservation-photo"
            src={props.holidayHome.MainImage}
            alt=""
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", sm: "flex-start" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography variant="h6">{props.employeeName.name}</Typography>
          <Typography variant="body2">Service number: {props.reservation.ServiceNO}</Typography>
          <Typography variant="body2">Reservation Number: {props.reservation.ReservationId}</Typography>
          <Typography variant="body2">Amount: {props.reservation.Price}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-end" },
            alignItems: "center",
            textAlign: { xs: "center", sm: "right" },
          }}
        >
          <Stack
            direction="column"
            justifyContent="flex-end"
            alignItems={{ xs: "center", sm: "flex-end" }}
            spacing={0.5}
          >
            <Typography variant="h5">{props.holidayHome.Name.toUpperCase()}</Typography>
            <Typography variant="body2">
              Check In: {dayjs(props.reservation.CheckinDate).format("DD/MM/YYYY")}
            </Typography>
            <Typography variant="body2">
              Check Out: {dayjs(props.reservation.CheckoutDate).format("DD/MM/YYYY")}
            </Typography>
            <ViewPopUp
              reservation={props.reservation}
              reservedRoom={props.reservedRoom}
              reservedHall={props.reservedHall}
              holidayhome={props.holidayHome}
            />
            <AddComplainPopUp reservation={props.reservation} />
            {isSpecial && (
              <Typography variant="button" color="green">
                Special
              </Typography>
            )}
            {isCancelled && (
              <Typography variant="button" color="red">
                Cancelled
              </Typography>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PastReservationCard;
