import { useEffect,useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import holidayhome from '../../Assets/images/holidayHome.jpg';
import ViewPopUp from './ViewPopup';
import ViewReservationCard from './ViewReservationCard';
import axios from "axios";
import AxiosClient from "../../services/AxiosClient";

const OngoingReservationList = (props) => {
  const [reservations, setReservations] = useState([])
  const fetchreservations = () => {
    AxiosClient.get("/admin/auth/reservation/ongoing")
      .then((res) => {
        console.log("fbnh fjnygfvfrvegbh",res.data);
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
    <Box className="home"
    sx={{weight: "100%" ,height: '60vh',overflow: 'hidden', overflowY: 'scroll'}}>
      {reservations.map(reservation => (
         <ViewReservationCard holidayHome={reservation.holidayHome[0]} reservation={reservation.reservation} reservedRoom={reservation.reservedrooms} reservedHall={reservation.reservedhalls} employeeName={reservation.employeeName[0]} employeeDetails={reservation.employeeDetails[0]}/>
      ))}
    </Box>
    </>
  );
}
 
export default OngoingReservationList;