import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import PastReservationCard from "./PastReservationCard";
import AxiosClient from "../../services/AxiosClient";

const CancelledReservationList = (props) => {
  const [reservations, setReservations] = useState([]);
  const reservationType = "cancelled";
  const fetchreservations = () => {
    AxiosClient.get("/admin/auth/reservation/cancelled")
      .then((res) => {
        setReservations(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchreservations();
  }, []);
  return (
    <>
      <Box
        className="home"
        sx={{ height: "70vh", overflow: "hidden", overflowY: "scroll" }}
      >
        {reservations
          .filter((reservation) => {
            return props.search.toLowerCase() === ""
              ? reservation
              : reservation.holidayHome[0].Name.toLowerCase().startsWith(
                  props.search.toLowerCase()
                ) ||
                reservation.employeeName[0].name
                  .toLowerCase()
                  .startsWith(props.search.toLowerCase()) ||
                reservation.reservation.ReservationId.toLowerCase().includes(
                  props.search.toLowerCase()
                )
              ? reservation
              : null;
          })
          .map((reservation) => (
            <PastReservationCard
              holidayHome={reservation.holidayHome[0]}
              reservation={reservation.reservation}
              reservedRoom={reservation.reservedrooms}
              reservedHall={reservation.reservedhalls}
              employeeName={reservation.employeeName[0]}
              employeeDetails={reservation.employeeDetails[0]}
              type={reservationType}
            />
          ))}
      </Box>
    </>
  );
};

export default CancelledReservationList;
