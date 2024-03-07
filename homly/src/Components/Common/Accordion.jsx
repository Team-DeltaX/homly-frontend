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
import Checkbox from "@mui/material/Checkbox";



export default function AccordionUsage() {
  
  return (
    <div>
      <Accordion>
        <AccordionSummary
          //disabled={this.state.disabled}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{ width: "100%" }}
        >
          <Typography variant="h5" sx={{ width: "20%", flexShrink: 0 }}>
            R001
          </Typography>
          <Typography variant="h6" sx={{ width: "20%", flexShrink: 0 }}>
            AC
          </Typography>
          <Typography variant="h6" sx={{ width: "20%", flexShrink: 0 }}>
            Single Room
          </Typography>
          <Stack direction="row" spacing={1}>
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              1000LKR
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
              per day
            </Typography>
          </Stack>
          {/* <Typography variant="h6" sx={{ ml:20, flexShrink: 0 }}>
          <Checkbox />
          </Typography> */}
          
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          <Box>
            <Stack direction="row" spacing={2}>
              <PersonIcon />
              <Typography>Max Adults: 1</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <ChildCareIcon />
              <Typography>Max Children: 0</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <StairsIcon />
              <Typography>Floor Number: 0</Typography>
            </Stack>
          </Box>
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Reserve</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
