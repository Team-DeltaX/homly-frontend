import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import Typography from "@mui/material/Typography";
import ErrorSnackbar from "../User/ErrorSnackbar";
import BasicDatePicker from "../Common/BasicDatePicker";
import PayNowPopup from "../Common/PayNowPopup";
import AvailableRoomsPopUp from "../Common/AvailableRoomsPopUp";
import AvailableHallsPopUp from "../Common/AvailableHallsPopUp";
import ConfirmPopup from "../PrimaryAdmin/ConfirmPopup";
import AxiosClient from "../../services/AxiosClient";
import { SocketioContext } from "../../Contexts/SocketioContext";

export default function ScrollDialog({ name, id }) {
  const [open, setOpen] = React.useState(false);
  const [opened, setOpened] = React.useState(false);
  const { socket } = React.useContext(SocketioContext);
  const [scroll, setScroll] = React.useState("paper");
  const [reservationId, setReservationId] = React.useState("");
  const [employeeDetails, setEmployeeDetails] = React.useState([]);
  const [userDetails, setUserDetails] = React.useState([]);
  const [employeeName, setEmployeeName] = React.useState("");
  const [roomPrice, setRoomPrice] = React.useState(0);
  const [hallPrice, setHallPrice] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [NoOfAdults, setNoOfAdults] = React.useState(0);
  const [hallNoOfAdults, setHallNoOfAdults] = React.useState(0);
  const [hallNoOfChildren, setHallNoOfChildren] = React.useState(0);
  const [NoOfChildren, setNoOfChildren] = React.useState(0);
  const [NoOfRooms, setNoOfRooms] = React.useState(0);
  const [NoOfHalls, setNoOfHalls] = React.useState(0);
  const [CheckinDate, setCheckinDate] = React.useState(dayjs().add(6, "day"));
  const [CheckoutDate, setCheckoutDate] = React.useState(dayjs().add(7, "day"));
  const [reserveDisabled, setReserveDisabled] = React.useState(false);
  const [roomCodes, setRoomCodes] = React.useState([]);
  const [hallCodes, setHallCodes] = React.useState([]);
  const [room, setRoom] = React.useState([]);
  const [hall, setHall] = React.useState([]);

  React.useEffect(() => {
    AxiosClient.get("/user/reservation/availableRooms", {
      params: {
        holidayHomeId: id,
        checkinDate: CheckinDate,
        checkoutDate: CheckoutDate,
      },
    }).then((res) => {
      setRoom(res.data.availableRooms);
    });
  }, [id, CheckinDate, CheckoutDate]);
  React.useEffect(() => {
    AxiosClient.get("/user/reservation/availableHalls", {
      params: {
        holidayHomeId: id,
        checkinDate: CheckinDate,
        checkoutDate: CheckoutDate,
      },
    }).then((res) => {
      setHall(res.data.availableHalls);
    });
  }, [id, CheckinDate, CheckoutDate]);
  const [errorStatus, setErrorStatus] = React.useState({
    isOpen: false,
    type: "",
    message: "",
  });
  const [PayNow, setPayNow] = React.useState(false);
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handlesubmit = (e) => {
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
      CheckinDate: CheckinDate,
      CheckoutDate: CheckoutDate,
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
    AxiosClient.post(`/user/auth/reservation`, data, {
      withCredentials: true,
    })
      .then((res) => {
        setEmployeeDetails(res.data.employeeDetails[0]);
        setUserDetails(res.data.userDetails[0]);
        setEmployeeName(res.data.empName);
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "success",
          message: "Reservation added successfully",
        });
        socket.emit("newNotification", {
          senderId: res.data.empName,
          receiverId: "HomlyPriAdmin",
          data: `New Reservation has added by ${res.data.empName} for ${res.data.holidayHomeName}`,
          type: "New Reservation Added",
          time: new Date(),
        });
        socket.emit("newNotification", {
          senderId: res.data.empName,
          receiverId: res.data.adminNumber,
          data: `New Reservation has added by ${res.data.empName} for ${res.data.holidayHomeName}`,
          type: "New Reservation Added",
          time: new Date(),
        });
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
        setTotalPrice(roomPrice + hallPrice);
        setRoomPrice(0);
        setHallPrice(0);
        setReserveDisabled(false);
        setRoomCodes([]);
        setHallCodes([]);
        setRoom([]);
        setHall([]);
      })
      .catch((error) => {
        console.log("error", error);
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "error",
          message: error.response.data.text,
        });
        setPayNow(false);
      });
  };
  const handleCheckinDateChange = (newDate) => {
    setCheckinDate(newDate);
    setNoOfAdults(0);
    setHallNoOfAdults(0);
    setHallNoOfChildren(0);
    setNoOfChildren(0);
    setNoOfRooms(0);
    setNoOfHalls(0);
    setRoomPrice(0);
    setHallPrice(0);
    setTotalPrice(0);
    setRoomCodes([]);
    setHallCodes([]);
    setRoom([]);
    setHall([]);
    if (CheckoutDate.isBefore(newDate) || CheckoutDate.isSame(newDate)) {
      setReserveDisabled(true);
      if (CheckoutDate.isBefore(newDate)) {
        setErrorStatus({
          isOpen: true,
          type: "error",
          message: "Check-in date cannot be after Check-out date",
        });
      } else {
        setErrorStatus({
          isOpen: true,
          type: "error",
          message: "Check-in date & Check-out date cannot be same",
        });
      }
      const nextDay = newDate.add(1, "day");
      setCheckinDate(newDate);
      setCheckoutDate(nextDay);
      setReserveDisabled(false);
    } else {
      setReserveDisabled(false);
      setErrorStatus({
        isOpen: false,
        type: "",
        message: "",
      });
    }
  };
  const handleCheckoutDateChange = (newDate) => {
    setNoOfAdults(0);
    setHallNoOfAdults(0);
    setHallNoOfChildren(0);
    setNoOfChildren(0);
    setNoOfRooms(0);
    setNoOfHalls(0);
    setRoomPrice(0);
    setHallPrice(0);
    setTotalPrice(0);
    setRoomCodes([]);
    setHallCodes([]);
    setRoom([]);
    setHall([]);
    setCheckoutDate(newDate);
    setReserveDisabled(false);
    setErrorStatus({
      isOpen: false,
      type: "",
      message: "",
    });

    console.log("checkout date", CheckoutDate);
  };
  React.useEffect(() => {
    if (CheckinDate.isAfter(CheckoutDate) || CheckinDate.isSame(CheckoutDate)) {
      setReserveDisabled(true);
      if (CheckinDate.isAfter(CheckoutDate)) {
        setErrorStatus({
          isOpen: true,
          type: "error",
          message: "Check-in date cannot be after Check-out date",
        });
      } else {
        setErrorStatus({
          isOpen: true,
          type: "eroor",
          message: "Check-in date & Check-out date cannot be same",
        });
      }
      const nextDay = CheckoutDate.add(1, "day");
      setCheckinDate(CheckoutDate);
      setCheckoutDate(nextDay);
      setReserveDisabled(false);
    }
  }, [CheckinDate, CheckoutDate]);

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
        <DialogTitle id="scroll-dialog-title">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Reservation Form</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
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
                            border: "none",
                          },
                          "&:hover fieldset": {
                            border: "none",
                          },
                          "&.Mui-focused fieldset": {
                            border: "none",
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
                          border: "none",
                        },
                        "&:hover fieldset": {
                          border: "none",
                        },
                        "&.Mui-focused fieldset": {
                          border: "none",
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
                            border: "none",
                          },
                          "&:hover fieldset": {
                            border: "none",
                          },
                          "&.Mui-focused fieldset": {
                            border: "none",
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
                            border: "none",
                          },
                          "&:hover fieldset": {
                            border: "none",
                          },
                          "&.Mui-focused fieldset": {
                            border: "none",
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
                            border: "none",
                          },
                          "&:hover fieldset": {
                            border: "none",
                          },
                          "&.Mui-focused fieldset": {
                            border: "none",
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
                            border: "none",
                          },
                          "&:hover fieldset": {
                            border: "none",
                          },
                          "&.Mui-focused fieldset": {
                            border: "none",
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
                          border: "none",
                        },
                        "&:hover fieldset": {
                          border: "none",
                        },
                        "&.Mui-focused fieldset": {
                          border: "none",
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
                          border: "none",
                        },
                        "&:hover fieldset": {
                          border: "none",
                        },
                        "&.Mui-focused fieldset": {
                          border: "none",
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
                          border: "none",
                        },
                        "&:hover fieldset": {
                          border: "none",
                        },
                        "&.Mui-focused fieldset": {
                          border: "none",
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
              disabled={reserveDisabled || roomPrice + hallPrice === 0}
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
      <PayNowPopup
        isOpen={PayNow}
        setIsOpen={setPayNow}
        reservationId={reservationId}
        price={totalPrice}
        employeeDetails={employeeDetails}
        userDetails={userDetails}
      />
    </React.Fragment>
  );
}
