import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ReservationCard from "./ReservationCard";
import AxiosClient from "../../services/AxiosClient";
import ErrorSnackbar from "../User/ErrorSnackbar";

const PastReservationList = (props) => {
  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });
  const [reservations, setReservations] = useState([]);
  const [adminNo, setAdminNo] = useState("");
  const reservationType = "past";
  const fetchreservations = () => {
    AxiosClient.get("/admin/auth/reservation/past")
      .then((res) => {
        setReservations(res.data.reservationDetails);
        setAdminNo(res.data.adminNo);
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
              isComplaint={reservation.Complaints}
              adminNumber={adminNo}
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

export default PastReservationList;
