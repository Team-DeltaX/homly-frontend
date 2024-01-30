import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import holidayhome from '../../Assets/images/holidayHome.jpg';
import './Reservation.css';
import ViewPopUp from './ViewPopup';
// import AddComplainPopUp from './AddComplainPopUp';

const SpecialReservationCard = ({reservation}) => {
    return(
        <Box className="reservation-preview" key={reservation.id} >
            <Box className="columnData"> 
                <Box>
                    <img className="reservation-photo" src={reservation.img} alt="" />
                </Box>
                <Box>
                    <h2>{ reservation.receiptName }</h2>
                    <p>Reservation Number  { reservation.recervationNO }</p>
                    <p>Amount { reservation.amount }</p>
                </Box>
                <Box className="section2">
                    <Stack direction="column" justifyContent="flex-end" alignItems="flex-end" spacing={0.5}>
                        <h2>{ reservation.holidayhomename }</h2>
                        <p>Check In : { reservation.checkindate }</p>
                        <p>Check Out : { reservation.checoutdate }</p>
                        <ViewPopUp reservation={reservation}/>
                        <Stack direction="row" justifyContent="flex-end" alignItems="flex-end" spacing={2}>
                            
                            {/* <AddComplainPopUp /> */}
                        </Stack>
                    </Stack>
                    
                </Box>
            </Box>
        </Box> 
    );
    
}

export default SpecialReservationCard;

