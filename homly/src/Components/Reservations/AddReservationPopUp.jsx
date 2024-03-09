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
import Stack from "@mui/material/Stack";

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [HolidayHomeName, SetHolidayHomeName] = useState("");
  const [holidayHomes, setHolidayHomes] = React.useState([]);
  const [ServiceNO, setServiceNO] = useState("");
  const [roomPrice, setRoomPrice] = useState(0);
  const [hallPrice, setHallPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [NoOfAdults, setNoOfAdults] = useState(0);
  const [NoOfChildren, setNoOfChildren] = useState(0);
  const [NoOfRooms, setNoOfRooms] = useState(0);
  const [NoOfHalls, setNoOfHalls] = useState(0);
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
      HolidayHome: HolidayHomeName,
      CheckinDate: CheckinDate,
      CheckoutDate: CheckoutDate,
      NoOfAdults: NoOfAdults,
      NoOfChildren: NoOfChildren,
      NoOfRooms: NoOfRooms,
      NoOfHalls: NoOfHalls,
      Price: roomPrice+hallPrice,
    };
    console.log("aruna", data);

    axios
      .post("http://localhost:3002/users/auth/reservation", data,{withCredentials:true})
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
  }, []);
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

        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Reservation Form</DialogTitle>
        <form onSubmit={(e) => e.preventDefault()}>
          <DialogContent dividers={scroll === "paper"}
          sx={{maxHeight:{xs:'600px',md:'400px'}, overflow:'scroll'}}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              {/* <TextField
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
              /> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Holiday Home*
                </InputLabel>
                <Select
                  fullWidth
                  labelId="holiday-home-label"
                  label="Holiday Home"
                  isSearchable={true}
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
              </FormControl>
              
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

              <Stack direction="row" spacing={2} marginTop={"10px"}>
                <AvailableRoomsPopUp margin="dense" 
                  NoOfRooms={NoOfRooms} setNoOfRooms={setNoOfRooms}
                  NoOfAdults={NoOfAdults} setNoOfAdults={setNoOfAdults}
                  NoOfChildren={NoOfChildren} setNoOfChildren={setNoOfChildren}
                  roomPrice={roomPrice} setRoomPrice={setRoomPrice}
                  hallPrice={hallPrice} setHallPrice={setHallPrice}
                />
                <AvailableHallsPopUp />
              </Stack>
              <Box component="section" sx={{ mt: 1 }}>
                <Typography variant="h6" gutterBottom>
                  Number of Rooms :
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{
                      display: "inline-block",
                      marginLeft: "10px",
                      color: "green",
                    }}
                  >
                    <TextField
                      required
                      disabled
                      type="number"
                      onChange={(e) => {
                        setNoOfRooms(e.target.value);
                      }}
                      value={NoOfRooms}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "none", // Change this line
                          },
                          "&:hover fieldset": {
                            border: "none", // Change this line
                          },
                          "&.Mui-focused fieldset": {
                            border: "none", // Change this line
                          },
                        },
                        mt: -1.5,
                      }}
                    />
                  </Typography>
                </Typography>
              </Box>
              <Box component="section">
                <Typography variant="h6" gutterBottom>
                  Number of Halls :
                  <TextField
                    required
                    disabled
                    type="number"
                    onChange={(e) => {
                      setNoOfHalls(e.target.value);
                    }}
                    value={NoOfHalls}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "none", // Change this line
                        },
                        "&:hover fieldset": {
                          border: "none", // Change this line
                        },
                        "&.Mui-focused fieldset": {
                          border: "none", // Change this line
                        },
                      },
                      mt: -1.5,
                    }}
                  />
                </Typography>
              </Box>
              <Box component="section" sx={{ mt: 1 }}>
                <Typography variant="h6" gutterBottom>
                  Adults count for Rooms (Maximum) :
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{
                      display: "inline-block",
                      marginLeft: "10px",
                      color: "green",
                    }}
                  >
                    <TextField
                      required
                      disabled
                      type="number"
                      onChange={(e) => {
                        setNoOfAdults(e.target.value);
                      }}
                      value={NoOfAdults}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "none", // Change this line
                          },
                          "&:hover fieldset": {
                            border: "none", // Change this line
                          },
                          "&.Mui-focused fieldset": {
                            border: "none", // Change this line
                          },
                        },
                        mt: -1.5,
                      }}
                    />
                  </Typography>
                </Typography>
              </Box>
              <Box component="section">
                <Typography variant="h6" gutterBottom>
                  Children count for Rooms (Maximum) :
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{
                      display: "inline-block",
                      marginLeft: "10px",
                      color: "green",
                    }}
                  >
                    <TextField
                      required
                      disabled
                      type="number"
                      onChange={(e) => {
                        setNoOfChildren(e.target.value);
                      }}
                      value={NoOfChildren}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "none", // Change this line
                          },
                          "&:hover fieldset": {
                            border: "none", // Change this line
                          },
                          "&.Mui-focused fieldset": {
                            border: "none", // Change this line
                          },
                        },
                        mt: -1,
                      }}
                    />
                  </Typography>
                </Typography>
              </Box>
              <Box component="section">
                <Typography variant="h6" gutterBottom>
                  Total Price for Rooms :
                  <TextField
                    required
                    disabled
                    type="number"
                    onChange={(e) => {
                      setRoomPrice(e.target.value);
                    }}
                    
                    value={roomPrice}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "none", // Change this line
                        },
                        "&:hover fieldset": {
                          border: "none", // Change this line
                        },
                        "&.Mui-focused fieldset": {
                          border: "none", // Change this line
                        },
                      },
                      mt: -1.5,
                    }}
                  />
                </Typography>
              </Box>
              <Box component="section">
                <Typography variant="h6" gutterBottom>
                  Total Price for Halls:
                  <TextField
                    required
                    disabled
                    type="number"
                    onChange={(e) => {
                      setHallPrice(e.target.value);
                    }}
                    value={hallPrice}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "none", // Change this line
                        },
                        "&:hover fieldset": {
                          border: "none", // Change this line
                        },
                        "&.Mui-focused fieldset": {
                          border: "none", // Change this line
                        },
                      },
                      mt: -1.5,
                    }}
                  />
                </Typography>
              </Box>
              <Box component="section">
                <Typography variant="h6" gutterBottom>
                  Total Price :
                  <TextField
                    required
                    disabled
                    type="number"
                    onChange={(e) => {
                      setTotalPrice(e.target.value);
                    }}
                    // totalPrice={roomPrice+hallPrice}
                    value={roomPrice+hallPrice}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "none", // Change this line
                        },
                        "&:hover fieldset": {
                          border: "none", // Change this line
                        },
                        "&.Mui-focused fieldset": {
                          border: "none", // Change this line
                        },
                      },
                      mt: -1.5,
                    }}
                  />
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
              disabled={roomPrice+hallPrice === 0?true:false}
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
