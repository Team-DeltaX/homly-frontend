import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import StairsIcon from "@mui/icons-material/Stairs";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useState } from "react";



export default function AccordionUsage({room,NoOfRooms,setNoOfRooms,NoOfAdults,setNoOfAdults,NoOfChildren,setNoOfChildren,roomPrice,setRoomPrice}) {
  const [reserve,setReserve] = useState(false);
  
  return (
    <div>
      <Accordion key={room.id}>
        <AccordionSummary
          //disabled={this.state.disabled}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{ width: "100%" }}
        >
          <Typography variant="h5" sx={{ width: "20%", flexShrink: 0 }}>
            {room.roomCode}
          </Typography>
          <Typography variant="h6" sx={{ width: "20%", flexShrink: 0 }}>
            {room.roomAc}
          </Typography>
          <Typography variant="h6" sx={{ width: "20%", flexShrink: 0 }}>
            {room.roomType}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              {room.roomRental}LKR
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
              per day
            </Typography>
          </Stack>
          {/* <Typography variant="h6" sx={{ ml:20, flexShrink: 0 }}>
          <Checkbox />
          </Typography> */}
          {reserve?<Typography variant="button"
          sx={{color:'green',ml: "20%", flexShrink: 0 }}>Reserved</Typography>:" "}
          
        </AccordionSummary>
        <AccordionDetails>
          {room.roomRemarks}
          <Box>
            <Stack direction="row" spacing={2}>
              <PersonIcon />
              <Typography>Max Adults: {room.NoOfAdults}</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <ChildCareIcon />
              <Typography>Max Children: {room.NoOfChildren}</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <StairsIcon />
              <Typography>Floor Number: 0</Typography>
            </Stack>
          </Box>
        </AccordionDetails>
        <AccordionActions>
          <Button disabled={!reserve} onClick={() =>{setReserve(false) 
          setNoOfRooms(NoOfRooms-1)
          setNoOfAdults(NoOfAdults-room.NoOfAdults)
          setNoOfChildren(NoOfChildren-room.NoOfChildren)
          setRoomPrice(roomPrice-room.roomRental)}}>Cancel</Button>
          <Button disabled={reserve} onClick={() => {setReserve(true)
          setNoOfRooms(NoOfRooms+1)
          setNoOfAdults(NoOfAdults+room.NoOfAdults)
          setNoOfChildren(NoOfChildren+room.NoOfChildren)
          setRoomPrice(roomPrice+room.roomRental)}}>Reserve</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
