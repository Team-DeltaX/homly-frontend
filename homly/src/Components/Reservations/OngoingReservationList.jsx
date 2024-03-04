import { useEffect,useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import holidayhome from '../../Assets/images/holidayHome.jpg';
import './Reservation.css';
import ViewPopUp from './ViewPopup';
import OngoingReservationCard from './OngoingReservationCard';
import axios from "axios";

const OngoingReservationList = (props) => {
  const [reservations, setReservations] = useState([])
  const fetchadmins = () => {
    axios
      .get("http://localhost:3002/users/reservation/")
      .then((res) => {
        console.log(res.data);
         //reverse array to keep new ones first 
        setReservations(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchadmins();
  }, []);
  return (
    <>
    {/* <Box className="home">
      {reservations.filter((reservations) => {
                    console.log(reservations)
                    return props.search.toLowerCase() === ""
                      ? reservations
                      : reservations.holidayhomename.toLowerCase().startsWith(
                            props.search.toLocaleLowerCase()
                        );
                  })
                  .map(reservation => (
         (<OngoingReservationCard  reservation={reservation}/>)    
      ))}
    </Box> */}
    <Box className="home">
      {reservations.map(reservation => (
         <OngoingReservationCard  reservation={reservation.Reservations[0]} name={reservation.empName}/>
      ))}
    </Box>
    </>
  );
}
 
export default OngoingReservationList;