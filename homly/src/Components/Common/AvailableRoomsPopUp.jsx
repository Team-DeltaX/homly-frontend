import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import AccordionUsage from "./RoomAccordion";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AvailableRoomsPopUp({
  holidayHomeId,
  holidayHomeName,
  room,
  roomCodes,
  setRoomCodes,
  NoOfRooms,
  setNoOfRooms,
  NoOfAdults,
  setNoOfAdults,
  NoOfChildren,
  setNoOfChildren,
  roomPrice,
  setRoomPrice,

}) {
  const [open, setOpen] = React.useState(false);
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
        Available Rooms for {holidayHomeName}
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", height: '10%' }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h5" component="div">
              Available Rooms
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
        <List sx={{overflow: 'hidden', overflowY: 'scroll', height: '80%'}}>
          {room.length > 0 ? (
            room.map((room, index) => (
              room.HolidayHomeId === holidayId && (
                <AccordionUsage
                  index={index}
                  room={room}
                  NoOfRooms={ NoOfRooms}
                  setNoOfRooms={ setNoOfRooms}
                  roomCodes={ roomCodes}
                  setRoomCodes={ setRoomCodes}
                  NoOfAdults={ NoOfAdults}
                  setNoOfAdults={ setNoOfAdults}
                  NoOfChildren={ NoOfChildren}
                  setNoOfChildren={ setNoOfChildren}
                  roomPrice={ roomPrice}
                  setRoomPrice={ setRoomPrice}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f00000" : "#ffffff",
                  }}
                />
              )
            ))
          ) : (
            <Typography variant="h6">No Available Rooms</Typography>
          )}
        </List>
        <AppBar
          position="fixed"
          color="primary"
          sx={{ top: "auto", bottom: 0 }}
        >
          <Toolbar sx={{height: '10%'}}>
            <Box 
              sx={{ 
                display: { xs: 'flex', sm: 'flex', md: 'flex' },
                width: {xs:'30%', sm:'30%',  md:"15%"},
                
                flexShrink: 0
              }}
            >
              <Typography 
                sx={{ 
                  width: "100%", 
                  flexShrink: 0, 
                  fontSize: '1rem',
                }}>
                NO of Rooms : { NoOfRooms}
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' },width: "60%", flexShrink: 1}}>  
              <Box
                sx={{ width: "30%", flexShrink: 0 }}
                display="flex"
              >
                <Stack direction="row" spacing={{ xs: 0, sm: 0, md: 1 }}> 
                  <Stack direction="column" spacing={0}>
                    <Typography sx={{fontSize: '1rem'}}>Maximum Adults </Typography>
                    <Typography sx={{fontSize: '1rem', display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' }}}>for this reservation</Typography>
                  </Stack>
                  <Typography
                    variant="h6"
                    sx={{ width: "5%", flexShrink: 0, fontSize: '1rem' }}
                  >
                    { NoOfAdults}
                  </Typography>
                </Stack>
              </Box>              
              <Box
                sx={{ width: "30%", flexShrink: 0 }}
                display="flex"
              >
                <Stack direction="row" spacing={{ xs: 0, sm:0 , md: 1, lg: 2 }}> 
                  <Stack direction="column" spacing={0}>
                    <Typography sx={{fontSize: '1rem'}}>Maximum Children </Typography>
                    <Typography sx={{fontSize: '1rem', display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' }}}>for this reservation </Typography>
                  </Stack>
                  <Typography
                    variant="h6"
                    sx={{ width: "5%", flexShrink: 0, fontSize: '1rem' }}
                  >
                    { NoOfChildren}
                  </Typography>
                </Stack>
              </Box>
              <Box sx={{ width: "40%", flexShrink: 0 }}>
                <Typography
                  variant="h6"
                  sx={{ marginLeft: "2%", fontSize: '1rem'}}
                >
                  reserved rooms : {roomCodes}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex' },width: {xs:'60%', sm:'60%',  md:"25%"}, flexShrink: 0}}>
              <Typography
                variant="h6"
                sx={{ marginLeft: "10%", width: "70%", flexShrink: 0, fontSize: '1rem' }}
              >
                Total Rental : { roomPrice}
              </Typography>
              <Button
                autoFocus
                color="inherit"
                onClick={handleClose}
                sx={{ marginLeft: "auto" }}
              >
                Confirm
              </Button>
            </Box>   
          </Toolbar>
        </AppBar>
      </Dialog>
    </React.Fragment>
  );
}
