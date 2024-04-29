import { useEffect,useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import holidayhome from '../../Assets/images/holidayHome.jpg';
import './Reservation.css';
import ViewPopUp from './ViewPopup';
import OngoingReservationCard from './OngoingReservationCard';
import axios from "axios";
import AxiosClient from "../../services/AxiosClient";

const OngoingReservationList = (props) => {
  const [reservations, setReservations] = useState([])
  const fetchreservations = () => {
    AxiosClient.get("/user/reservation/ongoing")
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
    <Box className="home">
      {reservations.map(reservation => (
         <OngoingReservationCard holidayHome={reservation.holidayHome[0]} reservation={reservation.reservation} reservedRoom={reservation.reservedrooms} reservedHall={reservation.reservedhalls}/>
      ))}
    </Box>
    </>
  );
}
 
export default OngoingReservationList;