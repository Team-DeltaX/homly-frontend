import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  ThemeProvider,
  Box,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import theme from "../../HomlyTheme";

// change toggle button style
const style = {
  margin: "2px",
  border: "1px solid #872341",
  borderRadius: "50px",
  padding: "5px 30px",
  
  
}

export default function UserInterestedPopup({ open, setOpen }) {
  const [interests, setInterests] = useState([]);
  const [count, setCount] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormat = (event, newInterest) => {
    if(newInterest.length > 3){

    }else{
      setInterests(newInterest);
      setCount(count + 1);
    }
    console.log(interests);
  };

  return (
    <ThemeProvider theme={theme}>
    <Dialog open={open} keepMounted onClose={handleClose}>
      <DialogTitle>Choose Your Interest</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Hello there! Let's customize your experience. Pick your top 3
          interests in order
        </DialogContentText>
        <Box sx={{margin:"7px 0"}}>
          <ToggleButtonGroup
            value={interests}
            onChange={handleFormat}
            aria-label="interests facilities"
            sx={{
                flexWrap: "wrap",
              
              ".css-q9gk48-MuiButtonBase-root-MuiToggleButton-root.Mui-selected, .css-q9gk48-MuiButtonBase-root-MuiToggleButton-root.Mui-selected:hover": {
                backgroundColor: "#f8abc3",
              },
            }}
          >
            
            <ToggleButton value="food" aria-label="food" style={style}>Food</ToggleButton>
            <ToggleButton value="location" aria-label="location" style={style}>Location</ToggleButton>
            <ToggleButton value="wifi" aria-label="wifi" style={style}>wifi</ToggleButton>
            <ToggleButton value="staff" aria-label="staff" style={style}>Staff</ToggleButton>
            <ToggleButton value="money" aria-label="money" style={style}>Value For money</ToggleButton>
            <ToggleButton value="bold6" aria-label="food6" style={style}>Food</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>close</Button>
        <Button onClick={handleClose}>Agree</Button>
      </DialogActions>
    </Dialog>
    </ThemeProvider>
  );
}
