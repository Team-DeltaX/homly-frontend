import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import holidayhome from '../../Assets/images/holidayHome.jpg';
import './Reservation.css';
import ViewPopUp from './ViewPopup';
import SpecialReservationCard from './SpecialReservationCard';
import axios from "axios";

const SpecialReservationList = (props) => {
  const [reservations, setReservations] = useState([])
  const fetchadmins = () => {
    axios
      .get("http://localhost:8080/admin/auth/locationadmin/reservations")
      .then((res) => {
        console.log(res.data);
         //reverse array to keep new ones first 
         setReservations(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchadmins();
  }, []);

  return (
    <Box className="home">
      {reservations.filter((reservations) => {
                    return props.search.toLowerCase() === ""
                      ? reservations
                      : reservations.holidayhomename.toLowerCase().startsWith(
                            props.search.toLocaleLowerCase()
                        );
                  })
                  .map(reservation => (
         (<SpecialReservationCard  reservation={reservation}/>)    
      ))}
    </Box>
  );
}
 
export default SpecialReservationList;