import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import holidayhome from '../../Assets/images/holidayHome.jpg';
import './Reservation.css';
import ViewPopUp from './ViewPopup';
// import AddComplainPopUp from './AddComplainPopUp';

const SpecialReservationCard = ({reservation}) => {
    return(
        <Grid container spacing={2} className="reservation-preview" key={reservation.id} >
            <Grid container className="columnData" sx={{width:'100%'}}> 
                <Grid Item xs={3} md={3} sx={{display:'flex',justifyContent:"center", alignItems:"center"}}>
                    <img className="reservation-photo" src={reservation.img} alt="" />
                </Grid>
                <Grid Item xs={4} md={4} sx={{justifyContent:"center", alignItems:"center"}}>
                    <h2>{ reservation.receiptName }</h2>
                    <p>Reservation Number  { reservation.recervationNO }</p>
                    <p>Amount { reservation.amount }</p>
                </Grid>
                <Grid xs={5} md={5} className="section2" sx={{display:'flex',justifyContent:"flex-end", alignItems:"center"}}>
                    <Stack direction="column" justifyContent="flex-end" alignItems="flex-end" spacing={0.5}>
                        <h2>{ reservation.holidayhomename }</h2>
                        <p>Check In : { reservation.checkindate }</p>
                        <p>Check Out : { reservation.checoutdate }</p>
                        <ViewPopUp reservation={reservation}/>
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

