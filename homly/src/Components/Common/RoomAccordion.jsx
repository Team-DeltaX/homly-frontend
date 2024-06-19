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
import Divider from "@mui/material/Divider";
import { useState, useEffect } from "react";

export default function AccordionUsage({
  index,
  room,
  NoOfRooms,
  setNoOfRooms,
  roomCodes,
  setRoomCodes,
  NoOfAdults,
  setNoOfAdults,
  NoOfChildren,
  setNoOfChildren,
  roomPrice,
  setRoomPrice,
}) {
  const [reserve, setReserve] = useState(false);
  useEffect(() => {
    if (roomCodes.includes(room.roomCode)) {
      setReserve(true);
    }
  }, []);
  const isOdd = index % 2 === 1;

  return (
    <Box>
      <Accordion
        key={room.id}
        sx={{ backgroundColor: isOdd ? "#f0f0f0" : "inherit" }}
        defaultExpanded={index === 0}
      >
        <AccordionSummary
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
          {reserve ? (
            <Typography
              variant="button"
              sx={{ color: "green", ml: "20%", flexShrink: 0 }}
            >
              Reserved
            </Typography>
          ) : (
            " "
          )}
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
          <Button
            disabled={!reserve}
            onClick={() => {
              setReserve(false);
              setNoOfRooms(NoOfRooms - 1);
              setNoOfAdults(NoOfAdults - room.NoOfAdults);
              setNoOfChildren(NoOfChildren - room.NoOfChildren);
              setRoomPrice(roomPrice - room.roomRental);
              setRoomCodes(roomCodes.filter((code) => code !== room.roomCode));
            }}
          >
            Cancel
          </Button>
          <Button
            disabled={reserve}
            onClick={() => {
              setReserve(true);
              setNoOfRooms(NoOfRooms + 1);
              setNoOfAdults(NoOfAdults + room.NoOfAdults);
              setNoOfChildren(NoOfChildren + room.NoOfChildren);
              setRoomPrice(roomPrice + room.roomRental);
              setRoomCodes([...roomCodes, room.roomCode]);
            }}
          >
            Reserve
          </Button>
        </AccordionActions>
        <Divider />
      </Accordion>
    </Box>
  );
}
