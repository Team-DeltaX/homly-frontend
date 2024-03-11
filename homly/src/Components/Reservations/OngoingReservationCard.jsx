import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import holidayhome from '../../Assets/images/holidayHome.jpg';
import './Reservation.css';
import ViewPopUp from './ViewPopup';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from "react";
import axios from "axios";

const OngoingReservationCard = (props) => {
    const [Employee,SetEmployee]=useState({})
    const fetchfromemployee=()=>{
        axios.get(`http://localhost:3002/admin/auth/locationadmin/employee/${props.reservation.ServiceNO}`)
        .then((res)=>{
            SetEmployee(res.data[0])
            console.log('----------emp emp-------')
            
            console.log(Employee)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        fetchfromemployee();

    },[])
    
    return(     
        <Grid container spacing={2} className="reservation-preview" key={props.reservation.id} >
            <Grid container className="columnData" sx={{width:'100%'}}> 
                <Grid Item xs={3} md={3} sx={{display:'flex',justifyContent:"center", alignItems:"center"}}>
                    <img className="reservation-photo" src={"https://images.unsplash.com/photo-1605352081508-2e09927ecfe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9saWRheSUyMGhvbWV8ZW58MHx8MHx8fDA%3D"} alt="" />
                    {/* <img className="reservation-photo" src={props.reservation.img} alt="" /> */}
                </Grid>
                <Grid Item xs={4} md={4} sx={{justifyContent:"center", alignItems:"center"}}>
                    <h4>{Employee.name}</h4>
                    <p>Service number : { props.reservation.ServiceNO}</p>
                    <p>Reservation Number  { props.reservation.ReservationId}</p>
                    <p>Amount { props.reservation.Price }</p>
                </Grid>
                <Grid xs={5} md={5} className="section2" sx={{display:'flex',justifyContent:"flex-end", alignItems:"center"}}>
                    <Stack direction="column" justifyContent="flex-end" alignItems="flex-end" spacing={0.5}>
                        <h2>{ props.reservation.HolidayHome }</h2>
                        <p>Check In : { dayjs(props.reservation.CheckinDate).format('DD/MM/YYYY')}</p>
                        <p>Check Out : { dayjs(props.reservation.CheckoutDate).format('DD/MM/YYYY')}</p>
                        <ViewPopUp reservation={props.reservation} name = {Employee.name}/>
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

export default OngoingReservationCard;

