import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import holidayhome from "../../Assets/images/holidayHome.jpg";
import "./Reservation.css";
import ViewPopUp from "./ViewPopup";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import AxiosClient from "../../services/AxiosClient";

const SpeicalReservationCard = (props) => {

const [isCancelled, setIsCancelled] = useState(props.reservation.IsCancelled);
return (
  <Grid
    container
    spacing={2}
    className="reservation-preview"
    key={props.reservation.id}
  >
    <Grid container className="columnData" sx={{ width: "100%" }}>
      <Grid
        Item
        xs={3}
        md={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          className="reservation-photo"
          src={props.holidayHome.MainImage}
          alt=""
        />
      </Grid>
      <Grid
        Item
        xs={2}
        md={4}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <h4>{props.employeeName.name}</h4>
        {/* <p>Service number : {props.reservation.ServiceNO}</p> */}
        <p>Reservation Number {props.reservation.ReservationId}</p>
        {/* <p>Contact Number : {Employee.contactNumber}</p> */}
        <p>Amount {props.reservation.Price}</p>
      </Grid>
      <Grid
        xs={3}
        md={5}
        className="section2"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Stack
          direction="column"
          justifyContent="flex-end"
          alignItems="flex-end"
          spacing={0.5}

        >
          <img
            className="reservation-photo"
            src={props.holidayHome.MainImage}
            alt=""
          />
        </Grid>
        <Grid
          Item
          xs={4}
          md={4}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <h4>{props.employeeName.name}</h4>
          {/* <p>Service number : {props.reservation.ServiceNO}</p> */}
          <p>Reservation Number {props.reservation.ReservationId}</p>
          {/* <p>Contact Number : {Employee.contactNumber}</p> */}
          <p>Amount {props.reservation.Price}</p>
        </Grid>
        <Grid
          xs={5}
          md={5}
          className="section2"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Stack
            direction="column"
            justifyContent="flex-end"
            alignItems="flex-end"
            spacing={0.5}
          >
            <h2>{props.holidayHome.Name.toUpperCase()}</h2>
            {/* <h2>{ props.reservation.HolidayHome }</h2> */}
            <p>
              Check In :{" "}
              {dayjs(props.reservation.CheckinDate).format("DD/MM/YYYY")}
            </p>
            <p>
              Check Out :{" "}
              {dayjs(props.reservation.CheckoutDate).format("DD/MM/YYYY")}
            </p>
            <ViewPopUp
              reservation={props.reservation}
              reservedRoom={props.reservedRoom}
              reservedHall={props.reservedHall}
              //name={props.employeeName.name}
              holidayhome={props.holidayHome}
            />
            {/* if reservation is special pass special */}
            <Typography variant="button" color="green">
              Special
            </Typography>

            {isCancelled ? (
              <Typography variant="button" color="red">
                Cancelled
              </Typography>
            ) : null}
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SpeicalReservationCard;
