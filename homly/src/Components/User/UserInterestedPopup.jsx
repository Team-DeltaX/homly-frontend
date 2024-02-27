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
  Stack,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "@mui/material";
import theme from "../../HomlyTheme";

// change toggle button style
const style = {
  margin: "2px",
  border: "1px solid #872341",
  borderRadius: "50px",
  padding: "5px 30px",
}

const styleSelected = {
  margin: "2px",
  border: "1px solid #872341",
  borderRadius: "50px",
  padding: "5px 30px",
  backgroundColor: "#f8abc3",
  
}

export default function UserInterestedPopup({ open, setOpen }) {
  const [interests, setInterests] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormat = (event, newInterest) => {
    if(interests.length < 4){
      setInterests(newInterest);
    } 
    console.log(interests,);
  };

  const handleSubmit = () => {
    if(interests.length>0){
      console.log("submitted", interests);
      setOpen(false);
    }else{
      console.log("skipped");
      setOpen(false);
    }

  }

  return (
    <ThemeProvider theme={theme}>
    <Dialog open={open} keepMounted onClose={handleClose}>
      <DialogTitle>Choose Your Interest</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Hello there! Let's customize your experience. Pick your top 3
          interests in order
        </DialogContentText>
        <Stack direction='column'>
          <Box >
          <ToggleButtonGroup sx={{flexWrap:"wrap"}}>
            {
              interests.map((interest, index) => {
                return <ToggleButton value={interest} aria-label={interest} style={styleSelected} disabled>{interest}</ToggleButton>
              })
            }
            </ToggleButtonGroup>
            <Divider sx={{display:interests.length>0?"block":"none",marginTop:"3px",}}/>
          </Box>
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
              <ToggleButton value="Value For money" aria-label="money" style={style}>Value For money</ToggleButton>
              <ToggleButton value="bold6" aria-label="food6" style={style}>Food</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>close</Button>
        <Button onClick={handleSubmit}>{interests.length>0?"Confirm":"Skip"}</Button>
      </DialogActions>
    </Dialog>
    </ThemeProvider>
  );
}
