import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import holidayhome from '../../Assets/images/holidayHome.jpg';
import './Reservation.css';
import ViewPopUp from './ViewPopup';
import SpecailReservationViewPopup from './SpecialReservationViewPopup';
// import AddComplainPopUp from './AddComplainPopUp';
import dayjs, { Dayjs } from 'dayjs';

const SpecialReservationCard = ({reservation}) => {
    return(
        <Grid container spacing={2} className="reservation-preview" key={reservation.id} >
            <Grid container className="columnData" sx={{width:'100%'}}> 
                <Grid Item xs={3} md={3} sx={{display:'flex',justifyContent:"center", alignItems:"center"}}>
                    <img className="reservation-photo" src={"https://images.unsplash.com/photo-1605352081508-2e09927ecfe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9saWRheSUyMGhvbWV8ZW58MHx8MHx8fDA%3D"} alt="" />
                    {/* <img className="reservation-photo" src={reservation.img} alt="" /> */}
                </Grid>
                <Grid Item xs={4} md={4} sx={{justifyContent:"center", alignItems:"center"}}>
                    <h2>{ reservation.ServiceNo }</h2>
                    <p>Reservation Number  { reservation.SpecailReservationID }</p>
                    <p>Amount { reservation.Price }</p>
                </Grid>
                <Grid xs={5} md={5} className="section2" sx={{display:'flex',justifyContent:"flex-end", alignItems:"center"}}>
                    <Stack direction="column" justifyContent="flex-end" alignItems="flex-end" spacing={0.5}>
                        <h2>{ reservation.HolidayHome }</h2>
                        <p>Check In : { dayjs(reservation.CheckinDate).format('DD/MM/YYYY')}</p>
                        <p>Check Out : { dayjs(reservation.CheckoutDate).format('DD/MM/YYYY')}</p>
                        {/* <SpecailReservationViewPopup reservation={reservation}/> */}
                    </Stack>
                    {/* <h2>{ reservation.holidayhomename }</h2>
                    <p>Check In : { reservation.checkindate }</p>
                    <p>Check Out : { reservation.checoutdate }</p> */}
                    {/* <Stack direction="row" justifyContent="flex-end" alignItems="flex-end" spacing={2}>
                        
                    </Stack> */}
                </Grid>
            </Grid>
        </Grid> 
    );
    
}

export default SpecialReservationCard;

