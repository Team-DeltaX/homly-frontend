import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import holidayhome from '../../Assets/images/holidayHome.jpg';
import './Reservation.css';
import ViewPopUp from './ViewPopup';
import SpecialReservationCard from './PastReservationCard';

const SpecialReservationList = (props) => {
  const [reservations, setReservations] = useState([
    {
        img: holidayhome,
        //isspecial: true,
        receiptName: "Jhon Doe12",
        reciptTelephone: "0765678453",
        recervationNO: '4501',
        amount: '3500',
        holidayhomename: 'palmadulla Lotus by nipun',
        checkindate: '2024-03-01',
        checoutdate: '2024-03-03',
        holidayHomeAddress: "89/A, Anuradhapura, Malwathuoya",
        noOfRooms: "3",
        noOfHalls: "0",
        roomId: "{R001,R002,R003}",
        hallId: "{}",
        reservedDate: "2024-01-12",
        id: 1
    },
        {
            img: holidayhome,
            //isspecial: true,
            receiptName: "Jhon Doe",
            reciptTelephone: "0765678453",
            recervationNO: '4501',
            amount: '3500',
            holidayhomename: 'Anuradhapura Lotus by nipun',
            checkindate: '2024-03-01',
            checoutdate: '2024-03-03',
            holidayHomeAddress: "89/A, Anuradhapura, Malwathuoya",
            noOfRooms: "3",
            noOfHalls: "0",
            roomId: "{R001,R002,R003}",
            hallId: "{}",
            reservedDate: "2024-01-12",
            id: 2
        },
        {
            img: holidayhome,
            //isspecial: true,
            receiptName: "Jhon Doe",
            reciptTelephone: "0765678453",
            recervationNO: '4501',
            amount: '3500',
            holidayhomename: 'Anuradhapura Lotus by nipun',
            checkindate: '2024-03-01',
            checoutdate: '2024-03-03',
            holidayHomeAddress: "89/A, Anuradhapura, Malwathuoya",
            noOfRooms: "3",
            noOfHalls: "0",
            roomId: "{R001,R002,R003}",
            hallId: "{}",
            reservedDate: "2024-01-12",
            id: 3
        },
        {
            img: holidayhome,
            //isspecial: true,
            receiptName: "Jhon Doe",
            reciptTelephone: "0765678453",
            recervationNO: '4501',
            amount: '3500',
            holidayhomename: 'Anuradhapura Lotus by nipun',
            checkindate: '2024-03-01',
            checoutdate: '2024-03-03',
            holidayHomeAddress: "89/A, Anuradhapura, Malwathuoya",
            noOfRooms: "3",
            noOfHalls: "0",
            roomId: "{R001,R002,R003}",
            hallId: "{}",
            reservedDate: "2024-01-12",
            id: 4
        },
        {
            img: holidayhome,
            //isspecial: true,
            receiptName: "Jhon Doe",
            reciptTelephone: "0765678453",
            recervationNO: '4501',
            amount: '3500',
            holidayhomename: 'Anuradhapura Lotus by nipun',
            checkindate: '2024-03-01',
            checoutdate: '2024-03-03',
            holidayHomeAddress: "89/A, Anuradhapura, Malwathuoya",
            noOfRooms: "3",
            noOfHalls: "0",
            roomId: "{R001,R002,R003}",
            hallId: "{}",
            reservedDate: "2024-01-12",
            id: 5
        },
        {
            img: holidayhome,
            //isspecial: true,
            receiptName: "Jhon Doe",
            reciptTelephone: "0765678453",
            recervationNO: '4501',
            amount: '3500',
            holidayhomename: 'Anuradhapura Lotus by nipun',
            checkindate: '2024-03-01',
            checoutdate: '2024-03-03',
            holidayHomeAddress: "89/A, Anuradhapura, Malwathuoya",
            noOfRooms: "3",
            noOfHalls: "0",
            roomId: "{R001,R002,R003}",
            hallId: "{}",
            reservedDate: "2024-01-12",
            id: 6
        },
        {
            img: holidayhome,
            //isspecial: true,
            receiptName: "Jhon Doe",
            reciptTelephone: "0765678453",
            recervationNO: '4501',
            amount: '3500',
            holidayhomename: 'kurunagala Lotus by nipun',
            checkindate: '2024-03-01',
            checoutdate: '2024-03-03',
            holidayHomeAddress: "89/A, Anuradhapura, Malwathuoya",
            noOfRooms: "3",
            noOfHalls: "0",
            roomId: "{R001,R002,R003}",
            hallId: "{}",
            reservedDate: "2024-01-12",
            id: 7
        },
        {
            img: holidayhome,
            //isspecial: true,
            receiptName: "Jhon Doe",
            reciptTelephone: "0765678453",
            recervationNO: '4501',
            amount: '3500',
            holidayhomename: 'Anuradhapura Lotus by nipun',
            checkindate: '2024-03-01',
            checoutdate: '2024-03-03',
            holidayHomeAddress: "89/A, Anuradhapura, Malwathuoya",
            noOfRooms: "3",
            noOfHalls: "0",
            roomId: "{R001,R002,R003}",
            hallId: "{}",
            reservedDate: "2024-01-12",
            id: 8
        },
        {
            img: holidayhome,
            //isspecial: true,
            receiptName: "Jhon Doe",
            reciptTelephone: "0765678453",
            recervationNO: '4501',
            amount: '3500',
            holidayhomename: 'kegalle Lotus by nipun',
            checkindate: '2024-03-01',
            checoutdate: '2024-03-03',
            holidayHomeAddress: "89/A, Anuradhapura, Malwathuoya",
            noOfRooms: "3",
            noOfHalls: "0",
            roomId: "{R001,R002,R003}",
            hallId: "{}",
            reservedDate: "2024-01-12",
            id: 9
        },
        {
            img: holidayhome,
            //isspecial: true,
            receiptName: "Jhon Doe",
            reciptTelephone: "0765678453",
            recervationNO: '4501',
            amount: '3500',
            holidayhomename: 'Anuradhapura Lotus by nipun',
            checkindate: '2024-03-01',
            checoutdate: '2024-03-03',
            holidayHomeAddress: "89/A, Anuradhapura, Malwathuoya",
            noOfRooms: "3",
            noOfHalls: "0",
            roomId: "{R001,R002,R003}",
            hallId: "{}",
            reservedDate: "2024-01-12",
            id: 10
        }
  ])

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