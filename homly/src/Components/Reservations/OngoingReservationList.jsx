import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ReservationCard from "./ReservationCard";
import AxiosClient from "../../services/AxiosClient";
import ErrorSnackbar from "../User/ErrorSnackbar";

const OngoingReservationList = (props) => {
  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });
  const [reservations, setReservations] = useState([]);
  const reservationType = "ongoing";
  const fetchreservations = () => {
    AxiosClient.get("/admin/auth/reservation/ongoing")
      .then((res) => {
        setReservations(res.data);
      })
      .catch(() => {
        setErrorStatus({
          isOpen: true,
          type: "warning",
          message: "Failed to fetch reservations",
        });
      });
  };
  useEffect(() => {
    fetchreservations();
  }, []);

  return (
    <>
      <Box
        className="home"
        sx={{
          weight: "100%",
          height: "70vh",
          overflow: "hidden",
          overflowY: "scroll",
        }}
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
                  .includes(props.search.toLowerCase()) ||
                reservation.reservation.ReservationId.toLowerCase().includes(
                  props.search.toLowerCase()
                )
              ? reservation
              : null;
          })
          .map((reservation) => (
            <ReservationCard
              holidayHome={reservation.holidayHome[0]}
              reservation={reservation.reservation}
              reservedRoom={reservation.reservedrooms}
              reservedHall={reservation.reservedhalls}
              employeeName={reservation.employeeName[0]}
              employeeDetails={reservation.employeeDetails[0]}
              type={reservationType}
            />
          ))}
        <ErrorSnackbar
          isOpen={errorStatus.isOpen}
          type={errorStatus.type}
          message={errorStatus.message}
          setIsOpen={(val) => setErrorStatus({ ...errorStatus, isOpen: val })}
        />
      </Box>
    </>
  );
};

export default OngoingReservationList;
