import "./style.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import {
  Grid,
  ThemeProvider,
  Container,
  Typography,
  Button,
} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import theme from "../../HomlyTheme";
import SideNavbar from "../../Components/locationAdmin/SideNavbar";
import PageTitle from "../../Components/locationAdmin/PageTitle";
import CalendarDetails from "../../Components/locationAdmin/CreateHolidayHome/popups/CalendarDetails";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import axios, { Axios } from "axios";
import dayjs from "dayjs";
import Popup from "../../Components/Common/Popup";
import AxiosClient from "../../services/AxiosClient";
var isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(isBetween);

const HolidayHomeDetails = () => {
  const localizer = momentLocalizer(moment);
  const calendarRef = useRef();
  const [showNav, setShowNav] = useState("nav_grid_deactive");
  const [holidayHomes, setHolidayHomes] = useState([]);
  const [selectedHolidayHome, setSelectedHolidayHome] = useState("");
  const [names, setNames] = useState([]);
  const [myEventsList, setMyEventsList] = useState([]);
  const [openPopup, setOpenPopup] = React.useState(false);

  const handleOpen = () => setOpenPopup(true);
  const handleClosePopUp = () => setOpenPopup(false);

  const [displayedRange, setDisplayedRange] = useState({
    start: moment().startOf("month"),
    end: moment().endOf("month"),
  });

  const CustomToolbar = (toolbar) => {
    const goToBack = () => {
      toolbar.onNavigate("PREV");
    };

    const goToNext = () => {
      toolbar.onNavigate("NEXT");
    };

    return (
      <div className="rbc-toolbar">
        <ArrowBackIosIcon onClick={goToBack} sx={{ cursor: "pointer" }} />
        <Typography
          sx={{ color: "Gray", fontSize: 18 }}
          className="rbc-toolbar-label"
        >
          {toolbar.label}
        </Typography>
        <hr />
        <ArrowForwardIosIcon onClick={goToNext} sx={{ cursor: "pointer" }} />
      </div>
    );
  };

  //Holidayhomes list
  useEffect(() => {
    AxiosClient.get(
      "http://localhost:8080/admin/auth/locationadmin/holidayhome/names"
    )
      .then((res) => {
        const data = res.data.names;

        console.log(data);
        setHolidayHomes(data);
        data.forEach((item) => {
          names.push(item.name);
        });
        // remove duplicates in name array
        const uniqueNames = [...new Set(names)];
        setNames(uniqueNames);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = () => {
    console.log("selectedHolidayHome", selectedHolidayHome);
    const homeName = selectedHolidayHome.target.value || selectedHolidayHome;
    console.log("homeName", homeName);
    let id;

    holidayHomes.forEach((item) => {
      if (item.name === homeName) {
        id = item.id;
      }
    });

    console.log("idhol", id);

    AxiosClient.get(
      `http://localhost:8080/admin/auth/locationadmin/holidayhome/reservation/${id}`
    )
      .then((res) => {
        const data = res.data.reservations;
        console.log("get", data);
        const events = data.map((item) => {
          return {
            start: dayjs(item.CheckinDate).format("YYYY-MM-DD"),
            end: dayjs(item.CheckoutDate).add(1, "day").format("YYYY-MM-DD"),
            title: item.ReservationId,
            paid: item.IsPaid,
          };
        });
        if (events.length === 0) {
          setMyEventsList([]);
          setOpenPopup(true);
        } else {
          setMyEventsList(events);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("myEventlist", myEventsList);
  };

  const handleClear = () => {
    setSelectedHolidayHome("");
  };

  // popup
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");
  const [reservationIds, setReservationIds] = useState([]);
  const [paidRooms, setPaidRooms] = useState([]);
  const [pendingRooms, setPendingRooms] = useState([]);

  const handleClickOpen = (event) => {
    const selectedDate = moment(event.start);
    console.log(selectedDate);
    const newDate = selectedDate.format("YYYY-MM-DD");
    console.log(newDate);
    setReservationIds([]);
    myEventsList.map((item) => {
      console.log("item", item);
      if (dayjs(newDate).isBetween(item.start, item.end, "day", "[)")) {
        console.log(newDate, item.title);
        setReservationIds((prev) => [
          ...prev,
          { id: item.title, paid: item.paid },
        ]);
      }
    });
    setDate(newDate);
    if (selectedHolidayHome === "") {
      setOpenAlert(true);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    console.log("reservationids array", reservationIds);
    if (reservationIds.length > 0) {
      for (let k = 0; k < reservationIds.length; k++) {
        console.log("reservation id", reservationIds[k].id);
        console.log("reservation paid", reservationIds[k].paid);
        if (reservationIds[k].paid === true) {
          console.log("in the true");
          for (let i = 0; i < reservationIds.length; i++) {
            console.log("reservation id", reservationIds[i].id);
            let reservationId = { id: reservationIds[i].id };
            AxiosClient.get(
              `http://localhost:8080/admin/auth/locationadmin/holidayhome/reserved/`,
              { params: reservationId }
            )
              .then((response) => {
                const data = response.data;
                setPaidRooms(data);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        } else {
          console.log("in the false");
          for (let i = 0; i < reservationIds.length; i++) {
            let reservationId = { id: reservationIds[i].id };
            AxiosClient.get(
              `http://localhost:8080/admin/auth/locationadmin/holidayhome/reserved/`,
              { params: reservationId }
            )
              .then((response) => {
                const data = response.data;
                setPendingRooms(data);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      }
    }
  }, [reservationIds]);

  const handleClose = (value) => {
    setOpen(false);
    setPaidRooms([]);
    setPendingRooms([]);
  };

  const [openAlert, setOpenAlert] = useState(false);

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="main_container"
        sx={{
          width: "100%",
          backgroundColor: "primary.main",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" style={{ padding: 0 }}>
          <Grid container sx={{ position: "relative" }}>
            <Grid
              className={showNav}
              xs={3}
              sx={{ backgroundColor: "primary.main", height: "100vh" }}
            >
              <SideNavbar setShowNav={setShowNav}></SideNavbar>
            </Grid>
            <Grid
              className="container_grid"
              xs={9}
              sx={{
                backgroundColor: "white",
                borderTopLeftRadius: "20px",
                padding: "10px 30px",
                height: "100vh",
                position: "relative",
              }}
            >
              <Box sx={{ height: "100%" }}>
                <PageTitle
                  setShowNav={setShowNav}
                  title={"Holiday Homes Details"}
                  bell={true}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2em",
                    marginBottom: "2em",
                  }}
                >
                  <Box sx={{ minWidth: 200 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select HolidayHome
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={
                          selectedHolidayHome !== ""
                            ? selectedHolidayHome.target.value
                            : ""
                        }
                        label="Age"
                        size="small"
                        onChange={(value) => setSelectedHolidayHome(value)}
                        // onChange={(value) => setSelectedHolidayHome(value)}
                      >
                        {names.map((item) => {
                          return <MenuItem value={item}>{item}</MenuItem>;
                        })}
                      </Select>
                    </FormControl>
                  </Box>

                  <Box sx={{ display: "flex", gap: "1em" }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "primary.main",
                        textTransform: "capitalize",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      <Typography
                        sx={{ fontFamily: "sans-serif" }}
                        variant="p"
                        onClick={handleSearch}
                      >
                        Search
                      </Typography>{" "}
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "capitalize",
                        fontWeight: "bold",
                        color: "primary.main",
                      }}
                    >
                      <Typography
                        sx={{ fontFamily: "sans-serif" }}
                        variant="p"
                        onClick={handleClear}
                      >
                        Cancel
                      </Typography>{" "}
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "90%",
                    height: "430px",
                    margin: "0 auto",
                    zIndex: -1,
                  }}
                >
                  <Calendar
                    localizer={localizer}
                    events={myEventsList}
                    views={{ month: true }}
                    components={{
                      toolbar: CustomToolbar,
                    }}
                    toolbar={true}
                    ref={calendarRef}
                    onSelectSlot={handleClickOpen}
                    selectable
                    startAccessor={(event) => moment(event.start)}
                    endAccessor={(event) => moment(event.end)}
                    defaultDate={displayedRange.start.startOf("month")}
                  />
                </Box>

                <div>
                  <Snackbar
                    open={openAlert}
                    autoHideDuration={4000}
                    onClose={handleCloseAlert}
                  >
                    <Alert
                      onClose={handleCloseAlert}
                      severity="error"
                      variant="filled"
                      sx={{ width: "100%" }}
                    >
                      Can't View | Please Select a Holiday Home
                    </Alert>
                  </Snackbar>
                </div>

                <CalendarDetails
                  open={open}
                  handleClose={handleClose}
                  date={date}
                  paidRooms={paidRooms}
                  pendingRooms={pendingRooms}
                  selectedHolidayHome={selectedHolidayHome}
                />

                {/* <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} handleClose={handleClosePopUp} handleOpen={handleOpen} /> */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HolidayHomeDetails;
