import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import BasicDatePicker from "../Common/BasicDatePicker";
import { useState } from "react";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";

const HH = [
  {
    value: "ANU1",
    label: "Anuradhapura-1",
    code: "HH001",
  },
  {
    value: "ANU2",
    label: "Anuradhapura-2",
    code: "HH002",
  },
  {
    value: "KRNG",
    label: "Kurunagala-1",
    code: "HH004",
  },
  {
    value: "KGL",
    label: "Kegalle-1",
    code: "HH005",
  },
];

export default function AddSpecialReservationPopUp() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [HolidayHomeName, SetHolidayHomeName] = useState("");
  const [ServiceNo, setServiceNo] = useState("");

  const [CheckinDate, setCheckinDate] = useState(dayjs(new Date()));

  const [CheckoutDate, setCheckoutDate] = useState(dayjs(new Date()));

  const handlesubmit = (e) => {
    const data = {
      ServiceNo: ServiceNo,
      HolidayHome: HolidayHomeName,
      CheckinDate: CheckinDate,
      CheckoutDate: CheckoutDate,
    };
    console.log("aruna", data);
    axios
      .post("http://localhost:3002/admin/auth/locationadmin/reservations", data)
      .then((res) => {
        console.log("add special reservation successfully");
      })
      .catch((error) => {
        console.log(`error is  nm ${error}`);
      });

    // setadminno("");
    // setUsername("");
    // setContactno("");
    // SetEmail("");
    // SetWorklocation("");
    // setPassword("");
    // SetSubstitute("");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Special Reservation
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Add Special Reservation"}
        </DialogTitle>

        <form onSubmit={() => console.log("sumbited")}>
          <DialogContent sx={{ width: { sm: "auto", md: "411px" } }}>
            <TextField
              autoFocus
              required
              onChange={(e) => {
                setServiceNo(e.target.value);
              }}
              value={ServiceNo}
              margin="dense"
              id="serviceno"
              name="serviceno"
              label="Service Number"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              fullWidth
              id="outlined-select-holidayhome"
              margin="dense"
              select
              label="Select the holiday home"
              required
              onChange={(e) => {
                SetHolidayHomeName(e.target.value);
              }}
              value={HolidayHomeName}
              // defaultValue="EUR"
            >
              {HH.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {/* <BasicDatePicker
              fullWidth
              onChange={(e) => {
                setCheckinDate(dayjs('2019-01-25').format('DD/MM/YYYY'));
              }}
              value={CheckinDate}
              title="Check In Date"
            /> */}
            <BasicDatePicker
              date={CheckinDate}
              setDate={setCheckinDate}
              title="Check in Date"
            />
            <BasicDatePicker
              date={CheckoutDate}
              setDate={setCheckoutDate}
              title="Check Out Date"
            />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose} autoFocus>
              Close
            </Button>
            <Button
              variant="contained"
              type="submit"
              autoFocus
              onClick={handlesubmit}
            >
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
