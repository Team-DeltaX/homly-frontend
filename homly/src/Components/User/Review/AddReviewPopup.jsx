import React, { useState, useEffect } from "react";
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
import ErrorSnackbar from "../ErrorSnackbar";
import AxiosClient from "../../../services/AxiosClient";

export default function AddReviewPopup({
  open,
  setOpen,
  isEdit,
  setIsEdit,
  reservationId,
  setIsAddReview,
}) {
  const [foodRating, setFoodRating] = useState(0);
  const [valueForMoneyRating, setvalueForMoneyRating] = useState(0);
  const [staffRating, setstaffRating] = useState(0);
  const [locationRating, setlocationRating] = useState(0);
  const [furnitureRating, setfurnitureRating] = useState(0);
  const [wifiRating, setwifiRating] = useState(0);

  const [review, setReview] = useState("");
  const [tempReview, setTempReview] = useState("");

  useEffect(() => {
    if (open && isEdit) {
      AxiosClient.get(`/user/auth/review/holidayhome`, {
        params: {
          reservationId: reservationId,
        },
      })
        .then((res) => {
          if (res.data) {
            setReview(res.data.review[0].UserReview);
            setTempReview(res.data.review[0].UserReview);
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
    }
  }, [isEdit, open]);

  const handleClose = () => {
    setOpen(false);
    setReview(tempReview);
  };

  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });

  const handleSubmit = () => {
    const formData = {
      reservationID: reservationId,
      food_rating: foodRating,
      value_for_money_rating: valueForMoneyRating,
      staff_rating: staffRating,
      location_rating: locationRating,
      furniture_rating: furnitureRating,
      wifi_rating: wifiRating,
      review: review,
    };

    if (isEdit) {
      AxiosClient.put(`/user/auth/review`, {
        reservationID: reservationId,
        review: review,
      })
        .then((res) => {
          if (res.data.success) {
            setErrorStatus({
              ...errorStatus,
              isOpen: true,
              type: "success",
              message: res.data.message,
            });
            setIsAddReview(true);
            setIsEdit(false);
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
    } else {
      if (
        foodRating < 0.5 ||
        valueForMoneyRating < 0.5 ||
        staffRating < 0.5 ||
        locationRating < 0.5 ||
        furnitureRating < 0.5 ||
        wifiRating < 0.5
      ) {
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "error",
          message: "Please Rate your experience for all the fields",
        });
        return;
      }
      AxiosClient.post(`/user/auth/review`, formData)
        .then((res) => {
          if (res.data.success) {
            setErrorStatus({
              ...errorStatus,
              isOpen: true,
              type: "success",
              message: res.data.message,
            });
            setIsAddReview(true);
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
    }
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
          {!isEdit ? (
            <>
              <RatingComponent
                value={foodRating}
                setValue={setFoodRating}
                label={"Food"}
              />

              <RatingComponent
                value={valueForMoneyRating}
                setValue={setvalueForMoneyRating}
                label={"Value For Money"}
              />

              <RatingComponent
                value={staffRating}
                setValue={setstaffRating}
                label={"Staff"}
              />

              <RatingComponent
                value={locationRating}
                setValue={setlocationRating}
                label={"Location"}
              />
              <RatingComponent
                value={furnitureRating}
                setValue={setfurnitureRating}
                label={"Furniture"}
              />
              <RatingComponent
                value={wifiRating}
                setValue={setwifiRating}
                label={"Wifi"}
              />
              <Box sx={{ mt: "7px" }}>
                <Typography>
                  {" "}
                  {isEdit
                    ? "Edit your review about Holiday Home"
                    : "Review about Holiday Home"}{" "}
                </Typography>
                <TextField
                  id="outlined-multiline-flexible"
                  multiline
                  maxRows={4}
                  value={review}
                  fullWidth
                  onChange={(e) => setReview(e.target.value)}
                />
              </Box>
            </>
          ) : (
            <Box sx={{ mt: "7px" }}>
              <Typography>
                {" "}
                {isEdit
                  ? "Edit your review about Holiday Home"
                  : "Review about Holiday Home"}{" "}
              </Typography>
              <TextField
                id="outlined-multiline-flexible"
                multiline
                maxRows={4}
                value={review}
                fullWidth
                onChange={(e) => setReview(e.target.value)}
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit}>
            {isEdit ? "Edit Review" : "Add Review"}
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


