import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Checkbox from "@mui/material/Checkbox";
import AccordionUsage from "./HallAccordion";
import Stack from "@mui/material/Stack";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AvailableHallsPopUp({
  holidayHomeId,
  holidayHomeName,
  hall,
  hallCodes,
  setHallCodes,
  NoOfHalls,
  setNoOfHalls,
  hallNoOfAdults,
  setHallNoOfAdults,
  hallNoOfChildren,
  setHallNoOfChildren,
  hallPrice,
  setHallPrice,

}) {
  const [open, setOpen] = React.useState(false);
  const [halls, setHalls] = React.useState([]);
  //const [holidayId, setHolidayId] = React.useState( holidayHomeId);
  console.log("holidayhomeId",holidayHomeId)
  console.log("hallCodessss",hallCodes);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const holidayId = holidayHomeId;
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} margin="normal">
        Available Halls for {holidayHomeName}
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {/* Top App Bar */}
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h5" component="div">
              Available Halls
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* middle List */}
        <List>
        {console.log("hall",hall)}
        {hall.length > 0 ? (
             hall.map((hall, index) => (
              console.log("hall",hall),
              hall.HolidayHomeId === holidayId && (// TODO: remove this hard-coded hall code
                <AccordionUsage
                  index= {index}
                  key={hall.id}
                  hall={hall}
                  NoOfHalls={ NoOfHalls}
                  setNoOfHalls={ setNoOfHalls}
                  hallCodes={ hallCodes}
                  setHallCodes={ setHallCodes}
                  hallNoOfAdults={ hallNoOfAdults}
                  setHallNoOfAdults={ setHallNoOfAdults}
                  hallNoOfChildren={ hallNoOfChildren}
                  setHallNoOfChildren={ setHallNoOfChildren}
                  hallPrice={ hallPrice}
                  setHallPrice={ setHallPrice}
                />
              )
            ))
          ) : (
            <Typography variant="h6">No Available Halls</Typography>
          )}
          
        </List>
        {/* botom app bar */}
        <AppBar
          position="fixed"
          color="primary"
          sx={{ top: "auto", bottom: 0 }}
        >
          <Toolbar>
            <Typography sx={{ width: "20%", flexShrink: 0 }}>
              NO of Halls : { NoOfHalls}
            </Typography>
            <Typography
              variant="h6"
              sx={{ width: "fit-content", flexShrink: 0 }}
            >
              <Stack direction="column" spacing={0}>
                <Typography>Maximum Adults </Typography>
                <Typography>for this reservation </Typography>
              </Stack>
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginLeft: "2%", width: "5%", flexShrink: 0 }}
            >
              { hallNoOfAdults }
            </Typography>
            <Typography
              variant="h6"
              sx={{ width: "fit-content", flexShrink: 0 }}
            >
              <Stack direction="column" spacing={0}>
                <Typography>Maximum Children </Typography>
                <Typography>for this reservation </Typography>
              </Stack>
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginLeft: "2%", width: "5%", flexShrink: 0 }}
            >
              { hallNoOfChildren }
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginLeft: "2%", width: "5%", flexShrink: 0 }}
            >
              reserved halls : { hallCodes}
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginLeft: "10%", width: "20%", flexShrink: 0 }}
            >
              Total Rental : { hallPrice}
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={handleClose}
              sx={{ marginLeft: "auto" }}
            >
              Confirm
            </Button>
          </Toolbar>
        </AppBar>
      </Dialog>
    </React.Fragment>
  );
}
