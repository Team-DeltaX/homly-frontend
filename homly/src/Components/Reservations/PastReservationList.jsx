
import { useEffect,useState } from "react";
import Box from '@mui/material/Box';
import PastReservationCard from './PastReservationCard';
import AxiosClient from "../../services/AxiosClient";

const PastReservationList = (props) => {
  const [reservations, setReservations] = useState([]);
  const [adminNo, setAdminNo] = useState("");
  const reservationType = "past";
  const fetchreservations = () => {
    AxiosClient.get("/admin/auth/reservation/past")
      .then((res) => {
        console.log("fbnh fjnygfvfrvegbh", res.data);
        console.log("admin number ",res.data.adminNo);
        //reverse array to keep new ones first
        setReservations(res.data.reservationDetails.reverse());
        setAdminNo(res.data.adminNo);
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

      <Box className="home" sx={{height: '70vh',overflow: 'hidden', overflowY: 'scroll'}}>
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
              adminNumber={adminNo}
              type={reservationType}
            />
          ))}

      </Box>
    </>
  );
};

export default PastReservationList;
