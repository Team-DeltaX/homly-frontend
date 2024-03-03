import * as React from "react";
import Box from '@mui/material/Box';
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
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from '@mui/material/Typography';

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [HolidayHomeName, SetHolidayHomeName] = useState("");
  const [ServiceNo, setServiceNo] = useState("");
  const [Price, setPrice] = useState(600);
  const [NoOfAdults, setNoOfAdults] = useState("");
  const [NoOfChildren, setNoOfChildren] = useState("");
  const [NoOfSingleRooms, setNoOfSingleRooms] = useState("");
  const [NoOfDoubleRooms, setNoOfDoubleRooms] = useState("");
  const [NoOfTripleRooms, setNoOfTripleRooms] = useState("");

  const [CheckinDate, setCheckinDate] = useState(dayjs(new Date()));

  const [CheckoutDate, setCheckoutDate] = useState(dayjs(new Date()));
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlesubmit = (e) => {
    const data = {
      ServiceNo: ServiceNo,
      HolidayHome: HolidayHomeName,
      CheckinDate: CheckinDate,
      CheckoutDate: CheckoutDate,
      NoOfAdults: NoOfAdults,
      NoOfChildren: NoOfChildren,
      NoOfSingleRooms: NoOfSingleRooms,
      NoOfDoubleRooms: NoOfDoubleRooms,
      NoOfTripleRooms: NoOfTripleRooms,
      Price: Price,
    };
    console.log("aruna", data);
    axios
    .post("http://localhost:3002/admin/auth/primaryadmin/reservations", data)
    .then((res) => {
      console.log("add reservation successfully");
    })
    .catch((error) => {
      console.log(`error is  nm ${error}`);
    });
    //     axios
    //       .post("http://localhost:3002/admin/auth/locationadmin/reservations", data)
    //       .then((res) => {
    //         console.log("add special reservation successfully");
    //       })
    //       .catch((error) => {
    //         console.log(`error is  nm ${error}`);
    //       });

    //     // setadminno("");
    //     // setUsername("");
    //     // setContactno("");
    //     // SetEmail("");
    //     // SetWorklocation("");
    //     // setPassword("");
    //     // SetSubstitute("");
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
        <form onSubmit={() => console.log("sumbited")}>
          <DialogContent dividers={scroll === "paper"}>
            <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
            >
                <TextField
                autoFocus
                required
                disabled
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
                disabled
                id="outlined-select-holidayhome"
                margin="dense"
                label="Select the holiday home"
                required
                onChange={(e) => {
                    SetHolidayHomeName(e.target.value);
                }}
                value={HolidayHomeName}
                InputProps={{
                    readOnly: true,
                }}
                // defaultValue="EUR"
                ></TextField>
                {/* <BasicDatePicker
                fullWidth
                onChange={(e) => {
                    setCheckinDate(dayjs('2019-01-25').format('DD/MM/YYYY'));
                }}
                value={CheckinDate}
                title="Check In Date"
                /> */}
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
                margin="dense"
                date={CheckoutDate}
                setDate={setCheckoutDate}
                title="Check Out Date"
                onChange={(e) => {
                  setCheckoutDate(e.target.value);
                }}
                value={CheckoutDate}
                />
                <TextField
                fullWidth
                required
                margin="dense"
                id="outlined-number"
                label="No. of Adults"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                <TextField
                fullWidth
                required
                margin="dense"
                id="outlined-number"
                label="No. of children"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
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
                    >
                    <option aria-label="None" value="" />
                    <option value={0}>0</option>
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
                    >
                    <option aria-label="None" value="" />
                    <option value={0}>0</option>
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
                    >
                    <option aria-label="None" value="" />
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    </Select>
                </FormControl>
                </div>
                <Box component="section" sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Total Price :  
                  <Typography variant="h5" gutterBottom style={{display: 'inline-block', marginLeft: '10px', color: 'green'}}>{Price }</Typography>
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
              onClick={handlesubmit}
            >
              Reserve
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
