import * as React from "react";
import Box from "@mui/material/Box";
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
import { useState, useEffect } from "react";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import ErrorSnackbar from "../User/ErrorSnackbar";
import PayNowPopup from "../Common/PayNowPopup";
import AvailableRoomsPopUp from "../Common/AvailableRoomsPopUp";
import AvailableHallsPopUp from "../Common/AvailableHallsPopUp";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from '@mui/material/Stack';

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [HolidayHomeName, SetHolidayHomeName] = useState("");
  const [holidayHomes, setHolidayHomes] = React.useState([]);
  const [ServiceNO, setServiceNO] = useState("");
  const [Price, setPrice] = useState(600);
  const [NoOfAdults, setNoOfAdults] = useState("");
  const [NoOfChildren, setNoOfChildren] = useState("");
  const [NoOfSingleRooms, setNoOfSingleRooms] = useState(0);
  const [NoOfDoubleRooms, setNoOfDoubleRooms] = useState(0);
  const [NoOfTripleRooms, setNoOfTripleRooms] = useState(0);
  const [NoOfHalls, setNoOfHalls] = useState("");
  const [CheckinDate, setCheckinDate] = useState(dayjs(new Date()));
  const [CheckoutDate, setCheckoutDate] = useState(dayjs(new Date()));
  
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });
  const [PayNow, setPayNow] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3002/users/reservation/holidayhomes")
      .then((res) => {
        if (Response) {
          setHolidayHomes(res.data);
        } else {
          console.log("No data found");
        }
      });
  }, []);

  const handlesubmit = (e) => {
    const data = {
      ServiceNO: ServiceNO,
      HolidayHome: HolidayHomeName,
      CheckinDate: CheckinDate,
      CheckoutDate: CheckoutDate,
      NoOfAdults: NoOfAdults,
      NoOfChildren: NoOfChildren,
      NoOfSingleRooms: NoOfSingleRooms,
      NoOfDoubleRooms: NoOfDoubleRooms,
      NoOfTripleRooms: NoOfTripleRooms,
      NoOfHalls: NoOfHalls,
      Price: Price,
    };
    console.log("aruna", data);

    axios
      .post("http://localhost:3002/users/reservation", data)
      .then((res) => {
        console.log("add reservation successfully");
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "success",
          message: "reservation added successfully",
        });
        setPayNow(true);
      })
      .catch((error) => {
        console.log(`error is  nm ${error}`);
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "error",
          message: "reservation failed",
        });
        setPayNow(false);
      });
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <React.Fragment>
      <Button
        variant="contained"
        style={{ float: "right" }}
        onClick={handleClickOpen("paper")}
      >
        Reserve Now
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Reservation Form</DialogTitle>
        <form onSubmit={(e) => e.preventDefault()}>
          <DialogContent dividers={scroll === "paper"}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              <TextField
                autoFocus
                required
                onChange={(e) => {
                  setServiceNO(e.target.value);
                }}
                value={ServiceNO}
                margin="dense"
                id="serviceno"
                name="serviceno"
                label="Service Number"
                type="text"
                fullWidth
                variant="outlined"
              />
              <Select
                fullWidth
                labelId="holiday-home-label"
                id="outlined-select-holidayhome"
                value={HolidayHomeName}
                onChange={(e) => {
                  SetHolidayHomeName(e.target.value);
                }}
              >
                {holidayHomes.map((home) => (
                  <MenuItem value={home}>{home}</MenuItem>
                ))}
              </Select>
              
              <BasicDatePicker
                required
                margin="dense"
                date={CheckinDate}
                setDate={setCheckinDate}
                title="Check in Date"
                onChange={(e) => {
                  setCheckinDate(e.target.value);
                }}
                value={CheckinDate}
              />
              <BasicDatePicker
                required
                margin="normal"
                date={CheckoutDate}
                setDate={setCheckoutDate}
                title="Check Out Date"
                onChange={(e) => {
                  setCheckoutDate(e.target.value);
                }}
                value={CheckoutDate}
              />
              {/* <TextField
                fullWidth
                required
                margin="dense"
                id="outlined-number"
                label="No. of Adults"
                type="number"
                onChange={(e) => {
                  setNoOfAdults(e.target.value);
                }}
                value={NoOfAdults}
              />
              <TextField
                fullWidth
                required
                margin="dense"
                id="outlined-number"
                label="No. of children"
                type="number"
                onChange={(e) => {
                  setNoOfChildren(e.target.value);
                }}
                value={NoOfChildren}
              /> */}
              {/* <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
                <FormControl sx={{ flex: "1" }}>
                  <InputLabel htmlFor="grouped-native-select">
                    Single Rooms
                  </InputLabel>
                  <Select
                    required
                    native
                    defaultValue="0"
                    id="grouped-native-select"
                    label="Grouping"
                    onChange={(e) => {
                      setNoOfSingleRooms(e.target.value);
                    }}
                    value={NoOfSingleRooms}
                  >
                    <option selected value={0}>
                      0
                    </option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </Select>
                </FormControl>
                <FormControl sx={{ flex: "1" }}>
                  <InputLabel htmlFor="grouped-select">Double Rooms</InputLabel>
                  <Select
                    required
                    native
                    defaultValue="0"
                    id="grouped-native-select"
                    label="Grouping"
                    onChange={(e) => {
                      setNoOfDoubleRooms(e.target.value);
                    }}
                    value={NoOfDoubleRooms}
                  >
                    <option selected value={0}>
                      0
                    </option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </Select>
                </FormControl>
                <FormControl sx={{ flex: "1" }}>
                  <InputLabel htmlFor="grouped-select">Triple Rooms</InputLabel>
                  <Select
                    required
                    native
                    defaultValue="0"
                    id="grouped-native-select"
                    label="Grouping"
                    onChange={(e) => {
                      setNoOfTripleRooms(e.target.value);
                    }}
                    value={NoOfTripleRooms}
                  >
                    <option selected value={0}>
                      0
                    </option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </Select>
                </FormControl>
              </div>
              <TextField
                fullWidth
                required
                margin="dense"
                id="outlined-number"
                label="No. of Halls"
                type="number"
                onChange={(e) => {
                  setNoOfHalls(e.target.value);
                }}
                value={NoOfHalls}
              /> */}
              <Stack direction="row" spacing={2} marginTop={"10px"}>
              <AvailableRoomsPopUp margin="dense"/>
              <AvailableHallsPopUp />
              </Stack>
              
              <Box component="section" sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Total Price :
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{
                      display: "inline-block",
                      marginLeft: "10px",
                      color: "green",
                    }}
                  >
                    {Price}
                  </Typography>
                </Typography>
              </Box>
              
              
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose} autoFocus>
              Close
            </Button>
            <Button
              variant="contained"
              type="submit"
              autoFocus
              onClick={() => {
                handlesubmit();
                handleClose();
              }}
            >
              Reserve
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <ErrorSnackbar
        isOpen={errorStatus.isOpen}
        type={errorStatus.type}
        message={errorStatus.message}
        setIsOpen={(val) => setErrorStatus({ ...errorStatus, isOpen: val })}
      />
      <PayNowPopup isOpen={PayNow} setIsOpen={setPayNow} />
    </React.Fragment>
  );
}
