import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import theme from "../../../HomlyTheme";
import RatingComponent from "./RatingComponent";
import { ThemeProvider } from "@mui/material";
import axios from "axios";
import ErrorSnackbar from "../ErrorSnackbar";
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function AddReviewPopup({ open, setOpen }) {
  const [foodRating, setFoodRating] = useState(0);
  const [valueForMoneyRating, setvalueForMoneyRating] = useState(0);
  const [staffRating, setstaffRating] = useState(0);
  const [locationRating, setlocationRating] = useState(0);
  const [furnitureRating, setfurnitureRating] = useState(0);
  const [wifiRating, setwifiRating] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });

  const [value, setValue] = useState(2);

  const handleSubmit = () => {
    const fromData = {
      foodRating: foodRating,
      valueForMoneyRating : valueForMoneyRating,
      staffRating : staffRating,
      locationRating : locationRating,
      furnitureRating : furnitureRating,
      wifiRating : wifiRating,
      
    };
    axios
      .post(`${global.API_BASE_URL}/users/auth/review`, fromData, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success) {
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "success",
            message: res.data.message,
          });
          handleClose();
        }
      })
      .catch((err) => {
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "error",
          message: err.message,
        });
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          "& .MuiDialog-paper": {
            width: "400px", 
            maxWidth: "90%",
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 4 }} id="customized-dialog-title">
          Rate Your Experience
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>

          {/* ratings */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div>Food</div>
          <RatingComponent
            value={foodRating}
            setValue={setFoodRating}
          />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>Value For Money</div>

          <RatingComponent  
            value={valueForMoneyRating}
            setValue={setvalueForMoneyRating}
          />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>Staff</div>
          <RatingComponent   
            value={staffRating}
            setValue={setstaffRating}
          />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>Location</div>
          <RatingComponent 
            value={locationRating}
            setValue={setlocationRating}
          />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>Furniture</div>
          <RatingComponent
            value={furnitureRating}
            setValue={setfurnitureRating}
          />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>Wifi</div>
          <RatingComponent
            value={wifiRating}
            setValue={setwifiRating}
          />
          </div>


          <div>
          <div> Review about Holiday Home </div>
          <form noValidate autoComplete="off">
            <FormControl sx={{ width: '25ch' }}>
              <OutlinedInput placeholder="Please enter text" />
            </FormControl>
          </form>
          </div>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit}>
            Rate Now
          </Button>
        </DialogActions>
      </Dialog>
      <ErrorSnackbar
        isOpen={errorStatus.isOpen}
        type={errorStatus.type}
        message={errorStatus.message}
        setIsOpen={(value) => setErrorStatus({ ...errorStatus, isOpen: value })}
      />
    </ThemeProvider>
  );
}
