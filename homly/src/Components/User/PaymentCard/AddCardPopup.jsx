import React, { useState } from "react";
import {
  ThemeProvider,
  Button,
  Dialog,
  TextField,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Stack,
  ToggleButton,
} from "@mui/material";
import theme from "../../../HomlyTheme";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function AddCardPopup({
  open,
  setOpen,
  cardDetails,
  setCardDetails,
  cardCount,
}) {
  const [details, setDetails] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    isDefault: false,
  });

  const [error, setError] = useState({
    cardName: false,
    cardNumber: false,
    expiryDate: false,
    cvv: false,
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeCardNumber = (value) => {
    const cardNumber = value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
    setDetails({ ...details, cardNumber });
  };

  const handleChangeExpiryDate = (value) => {
    // only allow numbers and forward slash
    const expiryDate = value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{2})/g, "$1/")
      .trim();

    console.log("expiryDate", expiryDate, expiryDate.length); // "12/23"
    // check if the date is valid
    if (expiryDate.length < 7) {
      if (expiryDate.length === 5) {
        const [month, year, empty] = expiryDate.split("/");
        const currentYear = dayjs().format("YY");
        const currentMonth = dayjs().format("MM");

        if (month > 12 || month < 1) {
          setError({ ...error, expiryDate: true });
        } else if (month < currentMonth && year === currentYear) {
          setError({ ...error, expiryDate: true });
        } else if (year < currentYear) {
          setError({ ...error, expiryDate: true });
        } else {
          setError({ ...error, expiryDate: false });
        }
      }
      setDetails({ ...details, expiryDate });
    }
  };

  const handleChangedCvv = (value) => {
    // only allow numbers
    const cvv = value.replace(/[^\dA-Z]/g, "");
    setDetails({ ...details, cvv });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardDetails([...cardDetails, details]);
    setOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Card</DialogTitle>
        <DialogContent>
          <DialogContentText>Add card details</DialogContentText>
          <form onSubmit={handleSubmit}>
            <Stack direction="column">
              <TextField
                value={details.cardName}
                autoFocus
                margin="dense"
                id="cardName"
                name="cardName"
                label="Card Name"
                type="text"
                fullWidth
                required
                onChange={(e) =>
                  setDetails({ ...details, cardName: e.target.value })
                }
              />
              <TextField
                value={details.cardNumber}
                margin="dense"
                id="cardNumber"
                name="cardNumber"
                label="Card Number"
                type="text"
                fullWidth
                required
                onChange={(e) => handleChangeCardNumber(e.target.value)}
              />
              <Stack direction={{ xs: "column", sm: "row" }}>
                {/* <TextField
                  value={details.expiryDate}
                  error={error.expiryDate}
                  margin="dense"
                  id="expiryDate"
                  name="expiryDate"
                  label="Expiry Date"
                  type="text"
                  helperText={error.expiryDate ? "Invalid date" : ""}
                  fullWidth
                  required
                  onChange={(e) => handleChangeExpiryDate(e.target.value)}
                /> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker views={['month', 'year']} label="Basic date picker" />
                  </DemoContainer>
                </LocalizationProvider>
                <TextField
                  value={details.cvv}
                  margin="dense"
                  id="cvv"
                  name="cvv"
                  label="CVV"
                  type="text"
                  fullWidth
                  required
                  onChange={(e) => handleChangedCvv(e.target.value)}
                />
              </Stack>
              <ToggleButton
                value="check"
                selected={details.isDefault}
                onChange={(e) =>
                  setDetails({ ...details, isDefault: !details.isDefault })
                }
                sx={{
                  display: cardCount > 0 ? "flex" : "none",
                  fontWeight: "bold",
                  color: details.isDefault ? "success.light" : "error.light",
                  borderColor: details.isDefault
                    ? "success.main"
                    : "error.main",
                  margin: "10px 0",
                }}
              >
                Set as default {details.isDefault ? "✓" : ""}
              </ToggleButton>
            </Stack>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
