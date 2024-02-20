import React from 'react'
import ReservationCard from '../ReservationCard/ReservationCard'
import { Box , Stack} from '@mui/material'

export default function pastReservation(props) {
  return (
    <Stack direction='column' sx={{height:{md:'380px'},overflowY:{xs:'none',md:'scroll'}}}>
      <Box sx={{marginTop:'10px'}}>
          <ReservationCard
          HHreservation="Past"
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
      <Box sx={{marginTop:'10px'}}>
          <ReservationCard
          HHreservation="Past"
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
      <Box sx={{marginTop:'10px'}}>
          <ReservationCard
          HHreservation="Past"
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
    </Stack>
  )
}
