import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Checkbox from '@mui/material/Checkbox';
import AccordionUsage from './Accordion';
import Stack from "@mui/material/Stack";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AvailableRoomsPopUp() {
  const [open, setOpen] = React.useState(false);
  const [rooms, setRooms] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    fetch('http://localhost:3002/api/rooms')
      .then(response => response.json())
      .then(data => setRooms(data));
  }, []);
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} margin="normal">
        Available Rooms
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {/* Top App Bar */}
        <AppBar sx={{ position: 'relative' }}>
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
        {/* middle List */}
        <List>
  {/* {rooms.map((room) => (
    <ListItem key={room.id}>
      <ListItemText
        primary={room.name}
        secondary={`Max Adults: ${room.maxAdults}, Max Children: ${room.maxChildren}, Rental: ${room.rental}`}
      />
    </ListItem>
  ))} */}
  < AccordionUsage />
  < AccordionUsage />
  < AccordionUsage />
</List>
        {/* botom app bar */}
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
          <Toolbar>
            <Typography sx={{ width: "20%", flexShrink: 0 }}>
              NO of Rooms : {3}
            </Typography>
            <Typography variant="h6" sx={{ width: "fit-content", flexShrink: 0 }}>
              <Stack direction="column" spacing={0}>
                <Typography>Maximum Adults </Typography>
                <Typography>for this reservation </Typography>
              </Stack>
            </Typography>
            <Typography variant="h6" sx={{ marginLeft:"2%", width: "5%", flexShrink: 0 }}>
              {1}
            </Typography>
            <Typography variant="h6" sx={{ width: "fit-content", flexShrink: 0 }}>
              <Stack direction="column" spacing={0}>
                <Typography>Maximum Children </Typography>
                <Typography>for this reservation </Typography>
              </Stack>
            </Typography>
            <Typography variant="h6" sx={{ marginLeft:"2%", width: "5%", flexShrink: 0 }}>
              {1}
            </Typography>
            <Typography variant="h6" sx={{ marginLeft:"10%", width: "20%", flexShrink: 0 }}>
              Total Rental : {1000}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose} sx={{ marginLeft: 'auto' }}>
              Confirm
            </Button>
          </Toolbar>
        </AppBar>
      </Dialog>
    </React.Fragment>
  );
}
