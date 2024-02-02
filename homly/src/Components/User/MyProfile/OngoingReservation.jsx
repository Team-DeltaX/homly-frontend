import React from 'react'

import ReservationCard from '../ReservationCard/ReservationCard'
import { Box } from '@mui/material'

export default function ongoingReservation() {
  return (
    <Box>
      <ReservationCard 
      HHreservation="Ongoing"
      HHpayment={false}
      HHName="Holiday Home"
      HHAddress="No. 1, Holiday Home, Holiday Road, Holiday City"
      HHReservedDate="2021-10-20"
      HHCheckIn="2021-10-20"
      HHCheckOut="2021-10-21"
      HHPrice="1000"
      HHAdults={3}
      HHChildren={2}
      HHRooms={2}
      />
      <ReservationCard 
      HHreservation="Ongoing"
      HHpayment={true}
      HHName="Holiday Home"
      HHAddress="No. 1, Holiday Home, Holiday Road, Holiday City"
      HHReservedDate="2021-10-20"
      HHCheckIn="2021-10-20"
      HHCheckOut="2021-10-21"
      HHPrice="1000"
      HHAdults={3}
      HHChildren={2}
      HHRooms={2}
      />
    </Box>
  )
}
