import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import "./Reservation.css";
import ViewReservationCard from "./ViewReservationCard";
import AxiosClient from "../../services/AxiosClient";

const SpeicalReservationList = (props) => {
  const [reservations, setReservations] = useState([]);
  const fetchreservations = () => {
    AxiosClient.get("/admin/auth/reservation/special")
      .then((res) => {
        console.log("fbnh fjnygfvfrvegbh", res.data);
        //reverse array to keep new ones first
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
      <Box className="home">
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
            <ViewReservationCard
              holidayHome={reservation.holidayHome[0]}
              reservation={reservation.reservation}
              reservedRoom={reservation.reservedrooms}
              reservedHall={reservation.reservedhalls}
              employeeName={reservation.employeeName[0]}
              employeeDetails={reservation.employeeDetails[0]}
            />
          ))}
      </Box>
    </>
  );
};

export default SpeicalReservationList;
