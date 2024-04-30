import { useEffect,useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import holidayhome from '../../Assets/images/holidayHome.jpg';
import './Reservation.css';
import ViewPopUp from './ViewPopup';
import SpeicalReservationCard from './SpecialReservationCard';
import axios from "axios";
import AxiosClient from "../../services/AxiosClient";

const SpeicalReservationList = (props) => {
  const [reservations, setReservations] = useState([])
  const fetchreservations = () => {
    AxiosClient.get("/admin/auth/reservation/special")
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
         <SpeicalReservationCard holidayHome={reservation.holidayHome[0]} reservation={reservation.reservation} reservedRoom={reservation.reservedrooms} reservedHall={reservation.reservedhalls}/>
      ))}
    </Box>
    </>
  );
}
 
export default SpeicalReservationList;