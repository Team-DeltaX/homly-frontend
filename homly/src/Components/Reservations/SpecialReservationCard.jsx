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
import { useEffect, useState } from "react";
import axios from "axios";

const SpecialReservationCard = (props) => {
    const [Employee,SetEmployee]=useState({})
    const fetchfromemployee=()=>{
        axios.get(`http://localhost:3002/admin/auth/locationadmin/employee/${props.reservation.ServiceNo}`)
        .then((res)=>{
            SetEmployee(res.data[0])
            console.log("employee name",res.data);
        })
        .catch(error=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        fetchfromemployee();

    },[])
    const [value, setValue] = useState({
        id: "",
        holidayname: "",
    });

    useEffect(() => {
        axios
          .get(
            `http://localhost:3002/admin/auth/locationadmin/holidayhome/${props.reservation.HolidayHome}`,
            { withCredentials: true }
          )
          .then((res) => {
            console.log("response", res.data.room);
            if (Response) {
              const homeDetails = res.data.homeDetails[0];
              const contactNo = res.data.contactNo;
    
              // Extract relevant data from response and set to 'value' state
              setValue({
                id: homeDetails.HolidayHomeId || "",
                holidayname: homeDetails.Name || "",
    
              });
            } else {
              console.log("No data found");
            }
          })
          .catch((error) => {
            console.error("Error fetching holiday homes:", error);
          });
      }, []);
    return(
        <Grid container spacing={2} className="reservation-preview" key={props.reservation.id} >
            <Grid container className="columnData" sx={{width:'100%'}}> 
                <Grid Item xs={3} md={3} sx={{display:'flex',justifyContent:"center", alignItems:"center"}}>
                    <img className="reservation-photo" src={"https://images.unsplash.com/photo-1605352081508-2e09927ecfe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9saWRheSUyMGhvbWV8ZW58MHx8MHx8fDA%3D"} alt="" />
                    {/* <img className="reservation-photo" src={reservation.img} alt="" /> */}
                </Grid>
                <Grid Item xs={4} md={4} sx={{justifyContent:"center", alignItems:"center"}}>
                    <h4>{Employee.name}</h4>
                    <p>{ props.reservation.ServiceNo }</p>
                    <p>Reservation Number  { props.reservation.SpecailReservationID }</p>
                    <p>Amount { props.reservation.Price }</p>
                </Grid>
                <Grid xs={5} md={5} className="section2" sx={{display:'flex',justifyContent:"flex-end", alignItems:"center"}}>
                    <Stack direction="column" justifyContent="flex-end" alignItems="flex-end" spacing={0.5}>
                        <h2>{ value.holidayname }</h2>
                        <p>Check In : { dayjs(props.reservation.CheckinDate).format('DD/MM/YYYY')}</p>
                        <p>Check Out : { dayjs(props.reservation.CheckoutDate).format('DD/MM/YYYY')}</p>
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

