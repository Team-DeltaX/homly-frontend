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
import { useState, useEffect } from "react";



export default function AccordionUsage({index,hall,NoOfHalls,setNoOfHalls,hallCodes,setHallCodes,hallNoOfAdults,setHallNoOfAdults,hallNoOfChildren,setHallNoOfChildren,hallPrice,setHallPrice}) {
  const [reserve,setReserve] = useState(false);

  // check hall id is in hall codes
  useEffect(() => {
    if(hallCodes.includes(hall.hallCode)){
      setReserve(true)
    }
  },[])
  const isOdd = index % 2 === 1;

  return (
    <div>
      <Accordion key={hall.id} sx={{backgroundColor: isOdd? '#f0f0f0' : 'inherit'}} defaultExpanded={index === 0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{ width: "100%" }}
        >
          <Typography variant="h5" sx={{ width: "20%", flexShrink: 0 }}>
            {hall.hallCode}
          </Typography>
          <Typography variant="h6" sx={{ width: "20%", flexShrink: 0 }}>
            {hall.hallAc}
          </Typography>
          <Typography variant="h6" sx={{ width: "20%", flexShrink: 0 }}>
            {hall.hallType}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              {hall.hallRental}LKR
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
          {hall.hallRemarks}
          <Box>
            <Stack direction="row" spacing={2}>
              <PersonIcon />
              <Typography>Max Adults: {hall.hallNoOfAdults}</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <ChildCareIcon />
              <Typography>Max Children: {hall.hallNoOfChildren}</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <StairsIcon />
              <Typography>Floor Number: 0</Typography>
            </Stack>
          </Box>
        </AccordionDetails>
        <AccordionActions>
          <Button disabled={!reserve} onClick={() =>{setReserve(false) 
          setNoOfHalls(NoOfHalls-1)
          setHallNoOfAdults(hallNoOfAdults-hall.hallNoOfAdults)
          setHallNoOfChildren(hallNoOfChildren-hall.hallNoOfChildren)
          setHallPrice(hallPrice-hall.hallRental)
          // remove hall code from hall code array
          setHallCodes(hallCodes.filter(code => code !== hall.hallCode))
          }}>Cancel</Button>
          <Button disabled={reserve} onClick={() => {setReserve(true)
          setNoOfHalls(NoOfHalls+1)
          setHallNoOfAdults(hallNoOfAdults+hall.hallNoOfAdults)
          setHallNoOfChildren(hallNoOfChildren+hall.hallNoOfChildren)
          setHallPrice(hallPrice+hall.hallRental)
          // add hall code to set hallcode array
          setHallCodes([...hallCodes,hall.hallCode])
          console.log("halllllss",hallCodes)
          }}>Reserve</Button>
        </AccordionActions>

        </Accordion>
    </div>
  );
}
