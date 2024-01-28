import React from 'react';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import holidayhome from '../../../Assets/images/holidayHome.jpg';
import MainHolidayHomePhoto from './MainHolidayHomePhoto';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
  

export default function HolidayHomeGrid() {
    const [reservations, setReservations] = useState([
    
        {
            img: holidayhome,
            //isspecial: true,
            receiptName: "Jhon Doe",
            reciptTelephone: "0765678453",
            recervationNO: '4501',
            amount: '3500',
            holidayhomename: 'Anuradhapura Lotus',
            checkindate: '2024-03-01',
            checoutdate: '2024-03-03',
            holidayHomeAddress: "89/A, Anuradhapura, Malwathuoya",
            noOfRooms: "3",
            noOfHalls: "0",
            roomId: "R001,R002,R003",
            hallId: "",
            reservedDate: "2024-01-12",
            id: 1
        }
        // },
        //     {
        //         img: holidayhome,
        //         //isspecial: true,
        //         receiptName: "Jhon Doe",
        //         reciptTelephone: "0765678453",
        //         recervationNO: '4501',
        //         amount: '3500',
        //         holidayhomename: 'Anuradhapura Lotus by nipun',
        //         checkindate: '2024-03-01',
        //         checoutdate: '2024-03-03',
        //         holidayHomeAddress: "89/A, Anuradhapura, Malwathuoya",
        //         noOfRooms: "3",
        //         noOfHalls: "0",
        //         //const [roomId,setRoomId] = useState(["R001","R002","R003"]),
        //         roomId: "R001,R002,R003",
        //         hallId: "",
        //         reservedDate: "2024-01-12",
        //         id: 2
        //     },
        //     {
        //         img: holidayhome,
        //         //isspecial: true,
        //         receiptName: "Jhon Doe",
        //         reciptTelephone: "0765678453",
        //         recervationNO: '4501',
        //         amount: '3500',
        //         holidayhomename: 'Anuradhapura Lotus by nipun',
        //         checkindate: '2024-03-01',
        //         checoutdate: '2024-03-03',
        //         holidayHomeAddress: "89/A, Anuradhapura, Malwathuoya",
        //         noOfRooms: "3",
        //         noOfHalls: "0",
        //         roomId: "R001,R002,R003",
        //         hallId: "",
        //         reservedDate: "2024-01-12",
        //         id: 3
        //     },
        //     {
        //         img: holidayhome,
        //         //isspecial: true,
        //         receiptName: "Jhon Doe",
        //         reciptTelephone: "0765678453",
        //         recervationNO: '4501',
        //         amount: '3500',
        //         holidayhomename: 'Anuradhapura Lotus by nipun',
        //         checkindate: '2024-03-01',
        //         checoutdate: '2024-03-03',
        //         holidayHomeAddress: "89/A, Anuradhapura, Malwathuoya",
        //         noOfRooms: "3",
        //         noOfHalls: "0",
        //         roomId: "R001,R002,R003",
        //         hallId: "",
        //         reservedDate: "2024-01-12",
        //         id: 4
        //     },
        //     {
        //         img: holidayhome,
        //         //isspecial: true,
        //         receiptName: "Jhon Doe",
        //         reciptTelephone: "0765678453",
        //         recervationNO: '4501',
        //         amount: '3500',
        //         holidayhomename: 'Anuradhapura Lotus by nipun',
        //         checkindate: '2024-03-01',
        //         checoutdate: '2024-03-03',
        //         holidayHomeAddress: "89/A, Anuradhapura, Malwathuoya",
        //         noOfRooms: "3",
        //         noOfHalls: "0",
        //         roomId: "R001,R002,R003",
        //         hallId: "",
        //         reservedDate: "2024-01-12",
        //         id: 5
        //     },
        //     {
        //         img: holidayhome,
        //         //isspecial: true,
        //         receiptName: "Jhon Doe",
        //         reciptTelephone: "0765678453",
        //         recervationNO: '4501',
        //         amount: '3500',
        //         holidayhomename: 'Anuradhapura Lotus by nipun',
        //         checkindate: '2024-03-01',
        //         checoutdate: '2024-03-03',
        //         holidayHomeAddress: "89/A, Anuradhapura, Malwathuoya",
        //         noOfRooms: "3",
        //         noOfHalls: "0",
        //         roomId: "R001,R002,R003",
        //         hallId: "",
        //         reservedDate: "2024-01-12",
        //         id: 6
        //     },
        //     {
        //         img: holidayhome,
        //         //isspecial: true,
        //         receiptName: "Jhon Doe",
        //         reciptTelephone: "0765678453",
        //         recervationNO: '4501',
        //         amount: '3500',
        //         holidayhomename: 'kurunagala Lotus by nipun',
        //         checkindate: '2024-03-01',
        //         checoutdate: '2024-03-03',
        //         holidayHomeAddress: "89/A, Anuradhapura, Malwathuoya",
        //         noOfRooms: "3",
        //         noOfHalls: "0",
        //         roomId: "R001,R002,R003",
        //         hallId: "",
        //         reservedDate: "2024-01-12",
        //         id: 7
        //     },
        //     {
        //         img: holidayhome,
        //         //isspecial: true,
        //         receiptName: "Jhon Doe",
        //         reciptTelephone: "0765678453",
        //         recervationNO: '4501',
        //         amount: '3500',
        //         holidayhomename: 'Anuradhapura Lotus',
        //         checkindate: '2024-03-01',
        //         checoutdate: '2024-03-03',
        //         holidayHomeAddress: "89/A, Anuradhapura, Malwathuoya",
        //         noOfRooms: "3",
        //         noOfHalls: "0",
        //         roomId: "R001,R002,R003",
        //         hallId: "",
        //         reservedDate: "2024-01-12",
        //         id: 8
        //     },
        //     {
        //         img: holidayhome,
        //         //isspecial: true,
        //         receiptName: "Jhon Doe",
        //         reciptTelephone: "0765678453",
        //         recervationNO: '4501',
        //         amount: '3500',
        //         holidayhomename: 'Anuradhapura Lotus by nipun',
        //         checkindate: '2024-03-01',
        //         checoutdate: '2024-03-03',
        //         holidayHomeAddress: "89/A, Anuradhapura, Malwathuoya",
        //         noOfRooms: "3",
        //         noOfHalls: "0",
        //         roomId: "R001,R002,R003",
        //         hallId: "",
        //         reservedDate: "2024-01-12",
        //         id: 9
        //     },
        //     {
        //         img: holidayhome,
        //         //isspecial: true,
        //         receiptName: "Jhon Doe",
        //         reciptTelephone: "0765678453",
        //         recervationNO: '4501',
        //         amount: '3500',
        //         holidayhomename: 'Anuradhapura Lotus by nipun',
        //         checkindate: '2024-03-01',
        //         checoutdate: '2024-03-03',
        //         holidayHomeAddress: "89/A, Anuradhapura, Malwathuoya",
        //         noOfRooms: "3",
        //         noOfHalls: "0",
        //         roomId: "R001,R002,R003",
        //         hallId: "",
        //         reservedDate: "2024-01-12",
        //         id: 10
        //     }
      ])
  return (
    <Grid container spacing={2}>
        <Grid xs={8}>
            <Item><img className="reservation-photo" src={<MainHolidayHomePhoto />} alt="" /></Item>
        </Grid>
        <Grid xs={4}>
            <Stack spacing={2}>
              <Item>Item 1</Item>
              <Item>Item 2</Item>
            </Stack>
        </Grid>
    </Grid> 
  )
}
