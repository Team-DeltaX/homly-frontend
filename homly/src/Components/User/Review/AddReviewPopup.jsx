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
import { ThemeProvider, Typography, Box, TextField } from "@mui/material";
import axios from "axios";
import ErrorSnackbar from "../ErrorSnackbar";

export default function AddReviewPopup({ open, setOpen, reservationId }) {
  const [foodRating, setFoodRating] = useState(0);
  const [valueForMoneyRating, setvalueForMoneyRating] = useState(0);
  const [staffRating, setstaffRating] = useState(0);
  const [locationRating, setlocationRating] = useState(0);
  const [furnitureRating, setfurnitureRating] = useState(0);
  const [wifiRating, setwifiRating] = useState(0);

  const [review, setReview] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });

  const handleSubmit = () => {
    const fromData = {
      reservationID: reservationId,
      food_rating: foodRating,
      value_for_money_rating: valueForMoneyRating,
      staff_rating: staffRating,
      location_rating: locationRating,
      furniture_rating: furnitureRating,
      wifi_rating: wifiRating,
      review: review,
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
          setFoodRating(0);
          setwifiRating(0);
          setvalueForMoneyRating(0);
          setstaffRating(0);
          setlocationRating(0);
          setfurnitureRating(0);
          setReview("");
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
            width: { xs: "300px", md: "500px" },
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
          <RatingComponent
            value={foodRating}
            setValue={setFoodRating}
            lable={"Food"}
          />

          <RatingComponent
            value={valueForMoneyRating}
            setValue={setvalueForMoneyRating}
            lable={"Value For Money"}
          />

          <RatingComponent
            value={staffRating}
            setValue={setstaffRating}
            lable={"Staff"}
          />

          <RatingComponent
            value={locationRating}
            setValue={setlocationRating}
            lable={"Location"}
          />
          <RatingComponent
            value={furnitureRating}
            setValue={setfurnitureRating}
            lable={"Furniture"}
          />
          <RatingComponent
            value={wifiRating}
            setValue={setwifiRating}
            lable={"Wifi"}
          />

          <Box sx={{ mt: "7px" }}>
            <Typography> Review about Holiday Home </Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              maxRows={4}
              fullWidth
              onChange={(e) => setReview(e.target.value)}
            />
          </Box>
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
