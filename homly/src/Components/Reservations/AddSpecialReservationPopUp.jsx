import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import BasicDatePicker from "../Common/BasicDatePicker";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ErrorSnackbar from "../User/ErrorSnackbar";
import ConfirmPopup from "../PrimaryAdmin/ConfirmPopup";
import AxiosClient from "../../services/AxiosClient";
import { SocketioContext } from "../../Contexts/SocketioContext";

export default function AddSpecialReservationPopUp() {
  const [open, setOpen] = React.useState(false);
  const [opened, setOpened] = React.useState(false);
  const theme = useTheme();
  const { socket } = React.useContext(SocketioContext);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [reserveDisabled, setReserveDisabled] = useState(false);
  const [HolidayHomeName, SetHolidayHomeName] = useState("");
  const [holidayHomes, setHolidayHomes] = React.useState([]);
  const [ServiceNo, setServiceNo] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [maxAdults, setMaxAdults] = useState(0);
  const [NoofRooms, setNoofRooms] = useState(0);
  const [NoofHalls, setNoofHalls] = useState(0);
  const [maxChildren, setMaxChildren] = useState(0);
  const [roomRental, setRoomRental] = useState(0);
  const [hallRental, setHallRental] = useState(0);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });
  const [CheckinDate, setCheckinDate] = useState(dayjs().add(6, "day"));
  const [CheckoutDate, setCheckoutDate] = useState(dayjs().add(7, "day")); 
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
      ServiceNO: ServiceNo,
      HolidayHome: HolidayHomeName,
      CheckinDate: CheckinDate,
      CheckoutDate: CheckoutDate,
      NoOfAdults: maxAdults,
      NoOfChildren: maxChildren,
      NoOfRooms: NoofRooms,
      NoOfHalls: NoofHalls,
      RoomPrice: roomRental,
      HallPrice: hallRental,
      Price: roomRental + hallRental,
      IsPaid: false,
    };
    console.log("aruna", data);
    AxiosClient.post("/admin/auth/specialreservation", data, {
      withCredentials: true,
    })
      .then((res) => {
        console.log("add special reservation successfully", ServiceNo);
        socket.emit("newNotification", {
          senderId: "HomlyPriAdmin",
          receiverId: ServiceNo,
          data: "Your request about special reservation is accepted.Please find email for more details.",
          type: "Authorization Successful",
          time: new Date(),
        });
        console.log("Victim Admin NO : ",res.data.adminNumber);
        socket.emit("newNotification", {
          senderId: "HomlyPriAdmin",
          receiverId: res.data.adminNumber,
          data: "New Special Reservation is allocated for one of your Holiday home.check it out",
          type: "New Reservation Added",
          time: new Date(),
        });
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "success",
          message: "Special Reservation added successfully",
        });
        setOpen(false);
        setOpened(false);
        let serviceNos = res.data.cancelServiceNo;
        for (let serviceNo of serviceNos) {
          console.log("victim service no : ", serviceNo);
          socket.emit("newNotification", {
            senderId: "HomlyPriAdmin",
            receiverId: serviceNo,
            data: "Due to Special Reservation allocating your Reservation has cancelled by Administration.We send you an email for more details.",
            type: "Cancel Reservation",
            time: new Date(),
          });
        }
        setReserveDisabled(false);
        setServiceNo("");
        setEmployeeName("");
        SetHolidayHomeName("");
        setMaxAdults(0);
        setMaxChildren(0);
        setNoOfRooms(0);
        setNoOfHalls(0);
        setRoomRental(0);
        setHallRental(0);
        setCheckinDate(dayjs().add(6, "day"));
        setCheckoutDate(dayjs().add(7, "day"));
      })
      .catch((error) => {
        console.log(`error is  nm ${error}`);
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "error",
          message: "Reservation failed",
        });
        setOpen(false);
      });
  };

  const handleCheckinDateChange = (newDate) => {
    setCheckinDate(newDate);
    const nextDay = newDate.add(1, "day");
    setCheckoutDate(nextDay);
    // Check if CheckinDate is after CheckoutDate
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

    //setCheckoutDate(newDate.add(1, "day")); // Add one day to CheckinDate
  };

  const handleCheckoutDateChange = (newDate) => {
    setCheckoutDate(newDate);
    // Check if CheckinDate is after CheckoutDate
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
  
  useEffect(() => {
    if (ServiceNo) {
      AxiosClient.get(`/admin/auth/locationadmin/employee/${ServiceNo}`)
        .then((res) => {
          const employeeData = res.data[0];
          setEmployeeName(employeeData.name);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [ServiceNo]);
  useEffect(() => {
    if (HolidayHomeName) {
      AxiosClient.get(`/user/reservation/getTotalRoomRental/${HolidayHomeName}`)
        .then((response) => {
          setNoofRooms(response.data.NoofRooms);
          setNoofHalls(response.data.NoofHalls);
          setMaxAdults(response.data.maxAdults);
          setMaxChildren(response.data.maxChildren);
          setNoOfRooms(response.data.noOfRooms);
          setNoOfHalls(response.data.noOfHalls);
          setRoomRental(response.data.totalRoomRental);
          setHallRental(response.data.totalHallRental); //
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [HolidayHomeName]);



  
  useEffect(() => {
    axios
      .get("http://localhost:8080/user/reservation/holidayhomes")
      .then((res) => {
        if (Response) {
          setHolidayHomes(res.data);
        } else {
          console.log("No data found");
        }
      });
  }, []);

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

        <form onSubmit={(e) => e.preventDefault()}>
          <DialogContent sx={{ width: { sm: "auto", md: "411px" } }}>
            <TextField
              autoFocus
              required
              onChange={(e) => {
                setServiceNo(e.target.value);
                setEmployeeName(employeeName);
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
              autoFocus
              required
              disabled
              value={employeeName}
              margin="dense"
              id="empname"
              name="empname"
              label="Employee Name"
              title="Employee Name"
              type="text"
              fullWidth
              variant="outlined"
            />

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
                  setRoomRental(roomRental);
                  setHallRental(hallRental);
                }}
              >
                {holidayHomes.map((home) => (
                  <MenuItem key={home.id} value={home.id}>
                    {home.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              autoFocus
              required
              disabled
              value={maxAdults}
              margin="dense"
              id="maxAdults"
              name="maxAdults"
              label="Maximum Adults"
              title="Maximum Adults"
              type="number"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              required
              disabled
              value={maxChildren}
              margin="dense"
              id="maxChildren"
              name="maxChildren"
              label="Maximum Children"
              title="Maximum Children"
              type="number"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              required
              disabled
              value={NoofRooms}
              margin="dense"
              id="NoofRooms"
              name="NoofRooms"
              label="Room Count"
              title="Room Count"
              type="number"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              required
              disabled
              value={NoofHalls}
              margin="dense"
              id="NoofHalls"
              name="NoofHalls"
              label="Hall Count"
              title="Hall Count"
              type="number"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              required
              disabled
              value={roomRental}
              margin="dense"
              id="totalroomrental"
              name="totalroomrental"
              label="Total Room Rental"
              title="Total Room Rental"
              type="number"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              required
              disabled
              value={hallRental}
              margin="dense"
              id="totalhallrental"
              name="totalhallrental"
              label="Total Hall Rental"
              title="Total Hall Rental"
              type="number"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              required
              disabled
              value={roomRental + hallRental}
              margin="dense"
              id="totalrental"
              name="totalrental"
              label="Total Rental"
              title="Total Rental"
              type="text"
              fullWidth
              variant="outlined"
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
              disabled={reserveDisabled===0 || (ServiceNo==="" || HolidayHomeName==="")}
              onClick={() => {
                setOpened(true);
              }}
            >
              Submit
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
    </React.Fragment>
  );
}
