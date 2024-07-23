import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ViewRoomBreakdown from "./ViewRoomBreakdown";
import { useParams } from "react-router-dom";
import AxiosClient from "../../../../services/AxiosClient";

const ViewRoom = ({
  roomArray,
  setRoomArray,
  setAdultsCount,
  setChildCount,
}) => {
  // open pop up for add room
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("sm");

  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const { homeId } = useParams();

  useEffect(() => {
    if (isEditMode && editIndex !== null) {
      // Editing an existing room
      const editedRoom = roomArray[editIndex];
      setValues({
        roomCode: editedRoom.roomCode,
        roomAc: editedRoom.roomAc,
        RoomType: editedRoom.RoomType,
        FloorLevel: editedRoom.FloorLevel,
        NoOfAdults: editedRoom.NoOfAdults,
        NoOfChildren: editedRoom.NoOfChildren,
        roomRemarks: editedRoom.roomRemarks,
        roomRental: editedRoom.roomRental,
        groupByUnit: editedRoom.groupByUnit,
      });
    } else {
      // Adding a new room
      setValues({
        roomCode: "",
        roomAc: "",
        RoomType: "",
        FloorLevel: "",
        NoOfAdults: "",
        NoOfChildren: "",
        roomRemarks: "",
        roomRental: "",
        groupByUnit: false,
      });
    }
  }, [isEditMode, editIndex, roomArray]);

  const handleClickOpen = () => {
    setValues({
      roomCode: "",
      roomAc: "",
      RoomType: "",
      FloorLevel: "",
      NoOfAdults: "",
      NoOfChildren: "",
      roomRemarks: "",
      roomRental: "",
      groupByUnit: false,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //remove room alert
  const [openAlert, setOpenAlert] = useState(false);

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  //room - all fields should filled warning
  const [openRoomFillAlert, setOpenRoomFillAlert] = useState(false);

  const handleCloseRoomFillAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenRoomFillAlert(false);
  };

  //room - same room no exist warning

  const [openRoomExistAlert, setOpenRoomExistAlert] = useState(false);

  const handleCloseRoomExistAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenRoomExistAlert(false);
  };

  const [values, setValues] = useState({
    roomCode: "",
    roomAc: "",
    RoomType: "",
    FloorLevel: "",
    NoOfAdults: "",
    NoOfChildren: "",
    roomRemarks: "",
    roomRental: "",
    groupByUnit: false,
  });

  const handleSaveRoom = () => {
    if (
      values.roomCode === "" ||
      values.roomAc === "" ||
      values.RoomType === "" ||
      values.FloorLevel === "" ||
      values.NoOfAdults === "" ||
      values.NoOfChildren === "" ||
      values.roomRemarks === "" ||
      values.roomRental === ""
    ) {
      setOpenRoomFillAlert(true);
      return;
    }

    // if (roomExist) {
    //     setOpenRoomExistAlert(true);
    //     return;
    // }

    if (isEditMode && editIndex !== null) {
      // Editing an existing room
      let noOfAdults = values.NoOfAdults;
      let noOfChildren = values.NoOfChildren;
      console.log(noOfAdults);
      console.log(noOfChildren);
      const updatedRoomArray = [...roomArray];
      updatedRoomArray[editIndex] = {
        ...updatedRoomArray[editIndex],
        ...values,
        rentalArray: [...rentalArray], // Copy the rentalArray as well
      };

      setRoomArray(updatedRoomArray);
      setAdultsCount(
        (prevCount) => prevCount + parseInt(values.NoOfAdults, 10)
      );
      setChildCount(
        (prevCount) => prevCount + parseInt(values.NoOfChildren, 10)
      );
    } else {
      // Adding a new room
      const updatedValues = { ...values, rentalArray };
      setRoomArray([...roomArray, updatedValues]);
      // setRoomArray([...roomArray, values]);
      setAdultsCount(
        (prevCount) => prevCount + parseInt(values.NoOfAdults, 10)
      );
      setChildCount(
        (prevCount) => prevCount + parseInt(values.NoOfChildren, 10)
      );
    }

    setRentalArray([]);

    // Close the dialog and reset state
    setOpen(false);
    setIsEditMode(false);
    setEditIndex(null);
  };

  const handleRoomDelete = (
    roomCode,
    groupByUnit,
    noOfAdults,
    noOfChildren
  ) => {
    //for room breakdown component
    if (groupByUnit) {
      setOpenAlert(true);
    } else {
      const newRoomArray = roomArray.filter(
        (item) => item.roomCode !== roomCode
      );
      setRoomArray(newRoomArray);
      setAdultsCount((prevCount) => prevCount - parseInt(noOfAdults, 10));
      setChildCount((prevCount) => prevCount - parseInt(noOfChildren, 10));
    }
  };

  const handleRoomEdit = (index) => {
    const editedRoom = roomArray[index];

    setValues({
      roomCode: editedRoom.roomCode,
      roomAc: editedRoom.roomAc,
      RoomType: editedRoom.RoomType,
      FloorLevel: editedRoom.FloorLevel,
      NoOfAdults: editedRoom.NoOfAdults,
      NoOfChildren: editedRoom.NoOfChildren,
      roomRemarks: editedRoom.roomRemarks,
      roomRental: editedRoom.roomRental,
      groupByUnit: editedRoom.groupByUnit,
    });

    AxiosClient.get(
      `admin/auth/locationadmin/holidayhome/rental/${homeId}/${editedRoom.roomCode}`
    )
      .then((res) => {
        console.log("get");
        const rental = res.data.roomRental;
        console.log(rental);
        for (let i = 0; i < rental.length; i++) {
          console.log("in");
          console.log(rental[i].Month);
          setRental({
            district: rental[i].Month,
            weekDays: rental[i].WeekRental,
            weekEnds: rental[i].WeekEndRental,
          });

          console.log("rental", rental);

          setRentalArray(rental); // Use functional update
          console.log("rental array", rentalArray);
        }

        setOpen(true);
        setEditIndex(index);
        setIsEditMode(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [error, setError] = useState({
    ctName: false,
    ctAddress: false,
    ctDescription: false,
    ctContactNo: false,
  });

  const [roomExist, setRoomExist] = useState(false);

  const [rental, setRental] = useState({
    district: "",
    weekDays: "",
    weekEnds: "",
  });

  const [newRoomWeekDayValue, setNewRoomWeekDayValue] = useState("");
  const [newRoomWeekendValue, setNewRoomWeekendValue] = useState("");

  const [rentalArray, setRentalArray] = useState([]);
  const handleAdd = () => {
    if (
      rental.district === "" ||
      rental.weekDays === "" ||
      rental.weekEnds === ""
    )
      return;
    setRentalArray([...rentalArray, rental]);
    setRental({
      district: "",
      weekDays: "",
      weekEnds: "",
    });

    setNewRoomWeekDayValue("");
    setNewRoomWeekendValue("");
  };

  const handleRemoveRentalItem = (no) => {
    const newRentalArray = rentalArray.filter((item, index) => index !== no);
    setRentalArray(newRentalArray);
  };
  //dropdowns

  //AC room
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(roomArray);

  return (
    <Box>
      <fieldset style={{ borderRadius: "8px" }}>
        <legend>Rooms Breakdown</legend>

        {roomArray.length === 0 ? (
          <Box
            sx={{ display: "flex", padding: "2em", justifyContent: "center" }}
          >
            <Typography variant="p" sx={{ color: "grey", textAlign: "center" }}>
              No Rooms Added Yet <br></br>Add Rooms to Submit form
            </Typography>
          </Box>
        ) : (
          roomArray.map((item, index) => {
            return (
              <ViewRoomBreakdown
                key={index}
                roomCode={item.roomCode}
                roomAc={item.roomAc}
                roomType={item.RoomType}
                FloorLevel={item.FloorLevel}
                noOfAdults={item.NoOfAdults}
                noOfChildren={item.NoOfChildren}
                roomRemarks={item.roomRemarks}
                roomRental={item.roomRental}
                groupByUnit={item.groupByUnit}
                handleRoomEdit={handleRoomEdit}
                handleRoomDelete={handleRoomDelete}
                index={index}
              />
            );
          })
        )}
      </fieldset>

      {/* Add new room popup */}
      <React.Fragment>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>Add New Room</DialogTitle>
          <form>
            <DialogContent sx={{ maxHeight: "350px" }}>
              <Box
                className="input_container"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1em",
                  marginBottom: "20px",
                }}
              >
                <Box
                  sx={{ minWidth: "100px", maxWidth: "200px" }}
                  className="label_container"
                >
                  <Typography variant="p" sx={{ color: "black" }}>
                    Room No
                  </Typography>
                </Box>
                <TextField
                  className="input_field"
                  required
                  id="outlined-required"
                  label="Enter Room No"
                  placeholder="Enter No"
                  fullWidth
                  size="small"
                  value={values.roomCode}
                />
              </Box>
              <Box
                className="input_container"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1em",
                  marginBottom: "12px",
                }}
              >
                <Box
                  sx={{ minWidth: "100px", maxWidth: "200px" }}
                  className="label_container"
                >
                  <Typography variant="p" sx={{ color: "black" }}>
                    AC/Non-AC
                  </Typography>
                </Box>

                <FormControl sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-label">select</InputLabel>
                  <Select
                    required
                    xs={{ width: "5%" }}
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.roomAc}
                    label="Age"
                  >
                    <MenuItem value={"AC"}>AC</MenuItem>
                    <MenuItem value={"Non-AC"}>Non-AC</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box
                className="input_container"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1em",
                  marginBottom: "12px",
                }}
              >
                <Box
                  sx={{ minWidth: "100px", maxWidth: "200px" }}
                  className="label_container"
                >
                  <Typography variant="p" sx={{ color: "black" }}>
                    Room Type
                  </Typography>
                </Box>

                <FormControl sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-label">Select</InputLabel>
                  <Select
                    required
                    xs={{ width: "5%" }}
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.RoomType}
                    label="Age"
                  >
                    <MenuItem value={"SingleRoom"}>Single Room</MenuItem>
                    <MenuItem value={"DoubleRoom"}>Double Room</MenuItem>
                    <MenuItem value={"TripleRoom"}>Triple Room</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box
                className="input_container"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1em",
                  marginBottom: "12px",
                }}
              >
                <Box
                  sx={{ minWidth: "100px", maxWidth: "200px" }}
                  className="label_container"
                >
                  <Typography variant="p" sx={{ color: "black" }}>
                    Floor Level
                  </Typography>
                </Box>
                <TextField
                  type="number"
                  error={error.ctName}
                  required
                  id="outlined-required"
                  label=""
                  placeholder="No of beds"
                  fullWidth
                  size="small"
                  value={values.FloorLevel}
                />
              </Box>
              <Box
                className="input_container"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1em",
                  marginBottom: "12px",
                }}
              >
                <Box
                  sx={{ minWidth: "100px", maxWidth: "200px" }}
                  className="label_container"
                >
                  <Typography variant="p" sx={{ color: "black" }}>
                    Number Of Adults
                  </Typography>
                </Box>
                <TextField
                  type="number"
                  error={error.ctName}
                  required
                  id="outlined-required"
                  label=""
                  placeholder="No of Adults"
                  fullWidth
                  size="small"
                  value={values.NoOfAdults}
                />
              </Box>
              <Box
                className="input_container"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1em",
                  marginBottom: "12px",
                }}
              >
                <Box
                  sx={{ minWidth: "100px", maxWidth: "200px" }}
                  className="label_container"
                >
                  <Typography variant="p" sx={{ color: "black" }}>
                    Number Of Children
                  </Typography>
                </Box>
                <TextField
                  type="number"
                  error={error.ctName}
                  required
                  id="outlined-required"
                  label=""
                  placeholder="No of Children"
                  fullWidth
                  size="small"
                  value={values.NoOfChildren}
                />
              </Box>

              <Box
                className="input_container"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1em",
                  marginBottom: "12px",
                }}
              >
                <Box
                  sx={{ minWidth: "100px", maxWidth: "200px" }}
                  className="label_container"
                >
                  <Typography variant="p" sx={{ color: "black" }}>
                    Remark
                  </Typography>
                </Box>
                <TextField
                  error={error.ctName}
                  required
                  id="outlined-required"
                  label="Remark"
                  placeholder="Enter Remark"
                  fullWidth
                  size="small"
                  value={values.roomRemarks}
                />
              </Box>
              <Box
                className="input_container"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1em",
                  marginBottom: "12px",
                }}
              >
                <Box
                  sx={{ minWidth: "100px", maxWidth: "200px" }}
                  className="label_container"
                >
                  <Typography variant="p" sx={{ color: "black" }}>
                    Rental
                  </Typography>
                </Box>
                <TextField
                  type="number"
                  error={error.ctName}
                  required
                  id="outlined-required"
                  label="Rental"
                  placeholder="Rental"
                  fullWidth
                  size="small"
                  value={values.roomRental}
                />
              </Box>
              <Box className="rental_container">
                {rentalArray.map((item, index) => {
                  return (
                    <Box>
                      <Paper
                        sx={{
                          display: "flex",
                          padding: "1.2em 2em",
                          justifyContent: "space-between",
                          marginBottom: "1em",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="p"
                            sx={{
                              color: "black",
                              marginRight: "0.6em",
                              fontWeight: "bold",
                            }}
                          >
                            Month
                          </Typography>
                          <Typography
                            variant="p"
                            sx={{ color: "grey", fontWeight: "500" }}
                          >
                            {item.Month}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            variant="p"
                            sx={{
                              color: "black",
                              marginRight: "0.6em",
                              fontWeight: "bold",
                            }}
                          >
                            WeekDays
                          </Typography>
                          <Typography
                            variant="p"
                            sx={{ color: "grey", fontWeight: "500" }}
                          >
                            {item.WeekRental}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            variant="p"
                            sx={{
                              color: "black",
                              marginRight: "0.6em",
                              fontWeight: "bold",
                            }}
                          >
                            WeekEnd
                          </Typography>
                          <Typography
                            variant="p"
                            sx={{ color: "grey", fontWeight: "500" }}
                          >
                            {item.WeekEndRental}
                          </Typography>
                        </Box>
                      </Paper>
                    </Box>
                  );
                })}
              </Box>
            </DialogContent>
            <DialogActions>
              <Button variant="outlined" onClick={handleClose}>
                Close
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </React.Fragment>
    </Box>
  );
};

export default ViewRoom;
