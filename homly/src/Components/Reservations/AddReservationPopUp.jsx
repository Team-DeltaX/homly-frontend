import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import BasicDatePicker from "../Common/BasicDatePicker";
import { useState, useEffect } from "react";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import Typography from "@mui/material/Typography";
import ErrorSnackbar from "../User/ErrorSnackbar";
import PayNowPopup from "../Common/PayNowPopup";
import AvailableRoomsPopUp from "../Common/AvailableRoomsPopUp";
import AvailableHallsPopUp from "../Common/AvailableHallsPopUp";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import ConfirmPopup from "../PrimaryAdmin/ConfirmPopup";
import AxiosClient from "../../services/AxiosClient";

export default function ScrollDialog({ name, id }) {
  const [open, setOpen] = React.useState(false);
  const [opened, setOpened] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [reservationId, setReservationId] = React.useState("");
  const [HolidayHomeName, setHolidayHomeName] = useState("");
  const [HolidayHomeId, setHolidayHomeId] = useState("");
  const [holidayHomes, setHolidayHomes] = React.useState([]);
  const [ServiceNO, setServiceNO] = useState("");
  const [roomPrice, setRoomPrice] = useState(0);
  const [hallPrice, setHallPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [NoOfAdults, setNoOfAdults] = useState(0);
  const [hallNoOfAdults, setHallNoOfAdults] = useState(0);
  const [hallNoOfChildren, setHallNoOfChildren] = useState(0);
  const [NoOfChildren, setNoOfChildren] = useState(0);
  const [NoOfRooms, setNoOfRooms] = useState(0);
  const [NoOfHalls, setNoOfHalls] = useState(0);
  const [CheckinDate, setCheckinDate] = useState(dayjs().add(6, "day"));
  const [CheckoutDate, setCheckoutDate] = useState(dayjs().add(7, "day"));
  const [reserveDisabled, setReserveDisabled] = useState(false); // State to manage disable state of reserve button
  const [roomCodes, setRoomCodes] = useState([]);
  const [hallCodes, setHallCodes] = useState([]);
  const [room, setRoom] = useState([]);
  const [hall, setHall] = useState([]);

  useEffect(() => {

    AxiosClient.get("/user/reservation/availableRooms", {
      params: {
        holidayHomeId: id,
        checkinDate: CheckinDate,
        checkoutDate: CheckoutDate,
      },
    }).then((res) => {
      setRoom(res.data.availableRooms);
      console.log("available room", res.data.availableRooms);
    });
  }, [id, CheckinDate, CheckoutDate]);

  useEffect(() => {
    AxiosClient.get("/user/reservation/availableHalls", {
      params: {
        holidayHomeId: id,
        checkinDate: CheckinDate,
        checkoutDate: CheckoutDate,
      },
    }).then((res) => {
      setHall(res.data.availableHalls);
      console.log("available halls", res.data.availableHalls);
    });
  }, [id, CheckinDate, CheckoutDate]);


  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });
  const [PayNow, setPayNow] = useState(false);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const selectedHome = holidayHomes.find(
      (home) => home.name === e.target.value
    );
    setHolidayHomeName(e.target.value);
    setHolidayHomeId(selectedHome.id);
  };

  const handlesubmit = (e) => {
    // Check if CheckinDate is after CheckoutDate
    if (CheckinDate.isAfter(CheckoutDate)) {
      setErrorStatus({
        isOpen: true,
        type: "error",
        message: "Check-in date cannot be after Check-out date",
      });
      return;
    }

    const data = {
      HolidayHome: id,
      CheckinDate:CheckinDate,
      CheckoutDate:CheckoutDate,
      NoOfAdults: NoOfAdults,
      hallNoOfAdults: hallNoOfAdults,
      hallNoOfChildren: hallNoOfChildren,
      NoOfChildren: NoOfChildren,
      NoOfRooms: NoOfRooms,
      NoOfHalls: NoOfHalls,
      RoomPrice: roomPrice,
      HallPrice: hallPrice,
      Price: roomPrice + hallPrice,
      IsPaid: false,
      RoomCodes: roomCodes,
      HallCodes: hallCodes,
    };

    AxiosClient
      .post(`/user/auth/reservation`, data, {
        withCredentials: true,
      })
      .then((res) => {
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "success",
          message: "Reservation added successfully",
        });
        console.log("anujjaasda"+res.data.message);
        console.log("anujjaasdsdsda"+res.data.reservationId);
        setReservationId(res.data.reservationId);
        setCheckinDate(dayjs().add(6, "day"));
        setCheckoutDate(dayjs().add(7, "day"));
        setOpen(false);
        setOpened(false);
        setPayNow(true);
        setNoOfAdults(0);
        setHallNoOfAdults(0);
        setHallNoOfChildren(0);
        setNoOfChildren(0);
        setNoOfRooms(0);
        setNoOfHalls(0);
        setTotalPrice(roomPrice+hallPrice);
        setRoomPrice(0);
        setHallPrice(0);
        setReserveDisabled(false);
        setRoomCodes([]);
        setHallCodes([]);
        setRoom([]);
        setHall([]);
      })
      .catch((error) => {
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "error",
          message: "Reservation failed",
        });
        setPayNow(false);
        console.error(error);
      });
  };

  const handleCheckinDateChange = (newDate) => {
    setCheckinDate(newDate);
    const nextDay = newDate.add(1, "day");
    setCheckoutDate(nextDay);
    setNoOfAdults(0);
    setHallNoOfAdults(0);
    setHallNoOfChildren(0);
    setNoOfChildren(0);
    setNoOfRooms(0);
    setNoOfHalls(0);
    setRoomPrice(0);
    setHallPrice(0);
    setTotalPrice(0);
    setReserveDisabled(false);
    setRoomCodes([]);
    setHallCodes([]);
    setRoom([]);
    setHall([]);
    const today = dayjs();
    if (newDate.isBefore(today)) {
      setReserveDisabled(true); // Disable reserve button
      setErrorStatus({
        isOpen: true,
        type: "warning",
        message: "Check-in date cannot be in the past",
      });
    } else {
      setReserveDisabled(false); // Enable reserve button
      setErrorStatus({
        isOpen: false,
        type: "",
        message: "",
      });
    }
  };

  const handleCheckoutDateChange = (newDate) => {
    setCheckoutDate(newDate);
    setNoOfAdults(0);
    setHallNoOfAdults(0);
    setHallNoOfChildren(0);
    setNoOfChildren(0);
    setNoOfRooms(0);
    setNoOfHalls(0);
    setRoomPrice(0);
    setHallPrice(0);
    setTotalPrice(0);
    setReserveDisabled(false);
    setRoomCodes([]);
    setHallCodes([]);
    setRoom([]);
    setHall([]);
    if ((CheckinDate.isAfter(newDate)) || (CheckinDate.isSame(newDate))) {
      setReserveDisabled(true); // Disable reserve button
      setErrorStatus({
        isOpen: true,
        type: "warning",
        message: "Check-in date cannot be same or after Check-out date",
      });
    } else {
      setReserveDisabled(false); // Enable reserve button
      setErrorStatus({
        isOpen: false,
        type: "",
        message: "",
      });
    }
  };

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
          <DialogContent
            dividers={scroll === "paper"}
            sx={{ maxHeight: { xs: "600px", md: "400px" }, overflow: "scroll" }}
          >
            <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
              <TextField
                value={name}
                fullWidth
                disabled
                title="Holiday Home"
                label="Holiday Home"
                sx={{ textTransform: "uppercase" }}
              />
              <BasicDatePicker
                required
                margin="dense"
                date={CheckinDate}
                setDate={handleCheckinDateChange}
                title="Check in Date"
                value={CheckinDate}
              />
              <BasicDatePicker
                required
                margin="normal"
                date={CheckoutDate}
                setDate={handleCheckoutDateChange}
                title="Check Out Date"
                value={CheckoutDate}
              />
              <Stack direction="row" spacing={2} marginTop={"10px"}>
                <AvailableRoomsPopUp
                  margin="dense"
                  NoOfRooms={NoOfRooms}
                  setNoOfRooms={setNoOfRooms}
                  roomCodes={roomCodes}
                  setRoomCodes={setRoomCodes}
                  NoOfAdults={NoOfAdults}
                  setNoOfAdults={setNoOfAdults}
                  NoOfChildren={NoOfChildren}
                  setNoOfChildren={setNoOfChildren}
                  roomPrice={roomPrice}
                  setRoomPrice={setRoomPrice}
                  hallPrice={hallPrice}
                  setHallPrice={setHallPrice}
                  holidayHomeName={name}
                  holidayHomeId={id}
                  room={room}
                />
                <AvailableHallsPopUp 
                  margin="dense"
                  NoOfHalls={NoOfHalls}
                  setNoOfHalls={setNoOfHalls}
                  hallCodes={hallCodes}
                  setHallCodes={setHallCodes}
                  hallNoOfAdults={hallNoOfAdults}
                  setHallNoOfAdults={setHallNoOfAdults}
                  hallNoOfChildren={hallNoOfChildren}
                  setHallNoOfChildren={setHallNoOfChildren}
                  hallPrice={hallPrice}
                  setHallPrice={setHallPrice}
                  holidayHomeName={name}
                  holidayHomeId={id}
                  hall={hall}
                />
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
              <Box component="section" sx={{ mt: 1 }}>
                <Typography variant="h6" gutterBottom>
                  Rooms :
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{
                      display: "inline-block",
                      marginLeft: "10px",
                      color: "green",
                    }}
                  ></Typography>
                  {/* show array value */}
                  {roomCodes.map((roomCode) => (
                    <Typography
                      variant="h5"
                      gutterBottom
                      style={{
                        display: "inline-block",
                        marginLeft: "10px",
                        color: "green",
                      }}
                    >
                      {roomCode}
                    </Typography>
                  ))}
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
              <Box component="section">
                <Typography variant="h6" gutterBottom>
                  Halls :
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{
                      display: "inline-block",
                      marginLeft: "10px",
                      color: "green",
                    }}
                  ></Typography>
                  {/* show array value */}
                  {hallCodes.map((hallCode) => (
                    <Typography
                      variant="h5"
                      gutterBottom
                      style={{
                        display: "inline-block",
                        marginLeft: "10px",
                        color: "green",
                      }}
                    >
                      {hallCode}
                    </Typography>
                  ))}
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
              <Box component="section" sx={{ mt: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      Adults count for Halls (Maximum) :
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
                            setHallNoOfAdults(e.target.value);
                          }}
                          value={hallNoOfAdults}
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
              {/* maximum children count for halls */}
              <Box component="section">
                <Typography variant="h6" gutterBottom>
                  Children count for Halls (Maximum) :
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
                        setHallNoOfChildren(e.target.value);
                      }}
                      value={hallNoOfChildren}
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
                    value={roomPrice + hallPrice}
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
            <ConfirmPopup
              open={opened}
              setOpen={setOpened}
              title={"Reservation Confirmation"}
              text={"Are you sure you want to confirm this Reservation?"}
              controlfunction={handlesubmit}
            />
            <Button
              variant="contained"
              type="submit"
              autoFocus
              disabled={reserveDisabled || roomPrice + hallPrice === 0} // Disable reserve button if reserveDisabled is true or roomPrice + hallPrice is 0
              onClick={() => {
                setOpened(true);
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
      {console.log("totalllls",(roomPrice+hallPrice))}
      <PayNowPopup isOpen={PayNow} setIsOpen={setPayNow} reservationId={reservationId} price={totalPrice}/>
      
    </React.Fragment>
  );
}
