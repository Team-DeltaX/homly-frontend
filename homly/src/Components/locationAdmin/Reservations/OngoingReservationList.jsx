import { useState } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import holidayhome from '../../../Assets/images/holidayHome.jpg';
import './Reservation.css';
import Popup from './ViewPopup';
import AddComplainPopup from "./AddComplainPopUp";

const OngoingReservationList = () => {
  const [reservations, setReservations] = useState([
    {
        img: holidayhome,
        //isspecial: true,
        receiptName: "Jhon Doe",
        recervationNO: '4501',
        amount: '3500',
        holidayhomename: 'Anuradhapura Lotus by nipun',
        checkindate: '2024-03-01',
        checoutdate: '2024-03-03',
        id: 1
    },
    {
        img: holidayhome,
        //isspecial: true,
        receiptName: "Jhon Doe",
        recervationNO: '4501',
        amount: '3500',
        holidayhomename: 'Anuradhapura Lotus by nipun',
        checkindate: '2024-03-01',
        checoutdate: '2024-03-03',
        id: 2
    },
    {
        img: holidayhome,
        //isspecial: true,
        receiptName: "Jhon Doe",
        recervationNO: '4501',
        amount: '3500',
        holidayhomename: 'Anuradhapura Lotus by nipun',
        checkindate: '2024-03-01',
        checoutdate: '2024-03-03',
        id: 3
    },
    {
        img: holidayhome,
        //isspecial: true,
        receiptName: "Jhon Doe",
        recervationNO: '4501',
        amount: '3500',
        holidayhomename: 'Anuradhapura Lotus by nipun',
        checkindate: '2024-03-01',
        checoutdate: '2024-03-03',
        id: 4
    },
    {
        img: holidayhome,
        //isspecial: true,
        receiptName: "Jhon Doe",
        recervationNO: '4501',
        amount: '3500',
        holidayhomename: 'Anuradhapura Lotus by nipun',
        checkindate: '2024-03-01',
        checoutdate: '2024-03-03',
        id: 5
    },
    {
        img: holidayhome,
        //isspecial: true,
        receiptName: "Jhon Doe",
        recervationNO: '4501',
        amount: '3500',
        holidayhomename: 'Anuradhapura Lotus by nipun',
        checkindate: '2024-03-01',
        checoutdate: '2024-03-03',
        id: 6
    },
    {
        img: holidayhome,
        //isspecial: true,
        receiptName: "Jhon Doe",
        recervationNO: '4501',
        amount: '3500',
        holidayhomename: 'Anuradhapura Lotus by nipun',
        checkindate: '2024-03-01',
        checoutdate: '2024-03-03',
        id: 7
    },
    {
        img: holidayhome,
        //isspecial: true,
        receiptName: "Jhon Doe",
        recervationNO: '4501',
        amount: '3500',
        holidayhomename: 'Anuradhapura Lotus by nipun',
        checkindate: '2024-03-01',
        checoutdate: '2024-03-03',
        id: 8
    },
    {
        img: holidayhome,
        //isspecial: true,
        receiptName: "Jhon Doe",
        recervationNO: '4501',
        amount: '3500',
        holidayhomename: 'Anuradhapura Lotus by nipun',
        checkindate: '2024-03-01',
        checoutdate: '2024-03-03',
        id: 9
    },
    {
        img: holidayhome,
        //isspecial: true,
        receiptName: "Jhon Doe",
        recervationNO: '4501',
        amount: '3500',
        holidayhomename: 'Anuradhapura Lotus by nipun',
        checkindate: '2024-03-01',
        checoutdate: '2024-03-03',
        id: 10
    }
  ])

  return (
    <div className="home">
      {reservations.map(reservation => (
        <div className="reservation-preview" key={reservation.id} >
            <div className="columnData"> 
                <div>
                    <img className="reservation-photo" src={reservation.img} alt="" />
                </div>
                <div>
                    <h2>{ reservation.receiptName }</h2>
                    <p>Reservation Number  { reservation.recervationNO }</p>
                    <p>Amount { reservation.amount }</p>
                </div>
                <div>
                    <h2>{ reservation.holidayhomename }</h2>
                    <p>Check In : { reservation.checkindate }</p>
                    <p>Check Out : { reservation.checoutdate }</p>
                    <Stack direction="row" justifyContent="flex-end" alignItems="flex-end" spacing={2}>
                        <Popup/>
                        <AddComplainPopup/>
                    </Stack>
                </div>
            </div>
        </div>        
      ))}
    </div>
  );
}
 
export default OngoingReservationList;