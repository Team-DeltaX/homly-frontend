import { useEffect,useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import holidayhome from '../../Assets/images/holidayHome.jpg';
import './Reservation.css';
import ViewPopUp from './ViewPopup';
import PastReservationCard from './PastReservationCard';
import axios from "axios";

const PastReservationList = (props) => {
  const [reservations, setReservations] = useState([])
  const fetchreservations = () => {
    axios
      .get("http://localhost:8080/users/reservation/past")
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
    fetchreservations();
  }, []);
  return (
    <>
        {/* <Box className="home">
      {reservations.filter((reservations) => {
                    return props.search.toLowerCase() === ""
                      ? reservations
                      : reservations.empName.toLowerCase().startsWith(
                            props.search.toLocaleLowerCase()
                        );
                  })
                  .map(reservation => (
         (<OngoingReservationCard  reservation={reservation.Reservations[0]} name={reservation.empName}/>)    
      ))}
    </Box> */}
    <Box className="home">
      {reservations.map(reservation => (
         <PastReservationCard  reservation={reservation}/>
        // console.log("sadasd",reservation)
      ))}
    </Box>
    </>
  );
}
 
export default PastReservationList;