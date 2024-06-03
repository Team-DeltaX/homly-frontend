import React, { useState, useEffect } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useParams } from "react-router-dom";
import EditUnitBreakDown from "./EditUnitBreakDown";
import AxiosClient from "../../../../services/AxiosClient";
const EditUnit = ({
  roomArray,
  setRoomArray,
  unitArray,
  setUnitArray,
  selectedRoomDetails,
  setSelectedRoomDetails,
}) => {
  const { homeId } = useParams();
  const [openUnit, setOpenUnit] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("sm");
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  console.log("unitArray", unitArray);

  useEffect(() => {
    if (isEditMode && editIndex !== null) {
      // Editing an existing room
      const editedUnit = unitArray[editIndex];
      setUnitValues({
        unitCode: editedUnit.unitCode,
        unitAc: editedUnit.unitAc,
        floorLevel: editedUnit.floorLevel,
        unitRemark: editedUnit.unitRemark,
        unitRental: editedUnit.unitRental,
        roomAttached: editedUnit.roomAttached,
        selectedRooms: editedUnit.selectedRooms,
      });
    } else {
      // Adding a new room
      setUnitValues({
        roomCode: "",
        roomAc: "",
        RoomType: "",
        NoOfBeds: "",
        NoOfAdults: "",
        NoOfChildren: "",
        roomRemarks: "",
        roomRental: "",
        groupByUnit: false,
      });
    }
  }, [isEditMode, editIndex, roomArray, unitArray]);

  console.log("selectedroomdetailsobject", selectedRoomDetails);

  // const handleUnitRemake = (unitCode) => {
  //   //roomArray update

  //   setRoomArray((prevRoomArray) => {
  //     const updatedRoomArray = prevRoomArray.map((room) => {
  //       if (
  //         selectedRoomDetails[unitCode].some(
  //           (item) => item.roomCode === room.roomCode
  //         )
  //       ) {
  //         return { ...room, groupByUnit: true };
  //       }
  //       return room;
  //     });

  //     return updatedRoomArray;
  //   });

  //   const updatedUnitArray = unitArray.map((unit) => {
  //     return {
  //       ...unit,
  //       selectedRooms: selectedRoomDetails[unit.unitCode] || [],
  //       roomAttached: selectedRoomDetails[unit.unitCode] ? true : false,
  //     };
  //   });

  //   setUnitArray(updatedUnitArray);
  // };

  // //dropdowns

  //AC room
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpenUnit = () => {
    setUnitValues({
      unitCode: "",
      unitAc: "",
      floorLevel: "",
      unitRemark: "",
      unitRental: "",
      roomAttached: false,
    });
    setOpenUnit(true);
  };

  const handleCloseUnit = () => {
    setOpenUnit(false);
  };

  const [error, setError] = useState({
    ctName: false,
    ctAddress: false,
    ctDescription: false,
    ctContactNo: false,
  });

  const [unitValues, setUnitValues] = useState({
    unitCode: "",
    unitAc: "",
    floorLevel: "",
    unitRemark: "",
    unitRental: "",
    roomAttached: false,
    selectedRooms: [],
  });
  const [unitExist, setUnitExist] = useState(false);

  const handleUnitCodeChange = (e) => {
    const unitCodeExists = unitArray.some(
      (unit) => unit.unitCode === e.target.value
    );
    if (unitCodeExists) {
      setUnitExist(true);
    } else {
      setUnitExist(false);
    }
    setUnitValues({ ...unitValues, unitCode: e.target.value });
  };

  const handleUnitAcChange = (e) => {
    setUnitValues({ ...unitValues, unitAc: e.target.value });
  };

  const handleFloorLevelChange = (e) => {
    setUnitValues({ ...unitValues, floorLevel: e.target.value });
  };

  const handleUnitRemarkChange = (e) => {
    setUnitValues({ ...unitValues, unitRemark: e.target.value });
  };

  const handleSaveUnit = () => {
    if (
      unitValues.unitCode === "" ||
      unitValues.unitAc === "" ||
      unitValues.floorLevel === "" ||
      unitValues.unitRemark === ""
    ) {
      setOpenUnitFillAlert(true);
      return;
    }
    if (isEditMode && editIndex !== null) {
      // Editing an existing room
      const updatedUnitArray = [...unitArray];
      updatedUnitArray[editIndex] = {
        ...updatedUnitArray[editIndex],
        ...unitValues,
        unitRentalArray: [...unitRentalArray], // Copy the rentalArray as well
      };
      setUnitArray(updatedUnitArray);
    } else {
      // Adding a new room
      const newUnit = {
        ...unitValues,
        selectedRooms: [],
      };
      setUnitArray([...unitArray, newUnit]);
    }
    setUnitRentalArray([]);
    setOpenUnit(false);
    setIsEditMode(false);
    setEditIndex(null);
  };

  const handleUnitEdit = (index) => {
    const editedUnit = unitArray[index];
    setUnitValues({
      unitCode: editedUnit.unitCode,
      unitAC: editedUnit.unitAc,
      floorLevel: editedUnit.floorLevel,
      unitRemark: editedUnit.unitRemark,
      unitRental: editedUnit.unitRental,
      roomAttached: editedUnit.roomAttached,
      selectedRooms: editedUnit.selectedRooms,
    });

    // axios
    //   .get(
    //     `http://localhost:8080/admin/auth/locationadmin/holidayhome/rental/${homeId}/${editedUnit.unitCode}`
    //   )
    AxiosClient.get(
      `/admin/auth/locationadmin/holidayhome/rental/${homeId}/${editedUnit.unitCode}`
    )
      .then((res) => {
        const rental = res.data.roomRental;
        for (let i = 0; i < rental.length; i++) {
          console.log("in");
          console.log(rental[i].Month);
          setUnitRentalArray(rental); // Use functional update
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUnitDelete = (unitCode, selectedRooms) => {
    setRoomArray((prevRoomArray) => {
      const updatedRoomArray = prevRoomArray.map((room) => {
        if (selectedRooms.some((item) => item.roomCode === room.roomCode)) {
          return { ...room, groupByUnit: false };
        }
        return room;
      });

      return updatedRoomArray;
    });

    selectedRooms.length = 0;

    setUnitArray((prevUnitArray) => {
      const newUnitArray = prevUnitArray.filter(
        (item) => item.unitCode !== unitCode
      );
      return newUnitArray;
    });
  };

  const [unitRentalArray, setUnitRentalArray] = useState([]);

  //unit - all fields should filled warning
  const [openUnitFillAlert, setOpenUnitFillAlert] = useState(false);
  const handleCloseUnitFillAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenUnitFillAlert(false);
  };

  //unit - same unit no exist warning
  const [openUnitExistAlert, setOpenUnitExistAlert] = useState(false);
  const handleCloseUnitExistAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenUnitExistAlert(false);
  };
  //unit - same unit no exist warning
  const [openHallExistAlert, setOpenHallExistAlert] = useState(false);

  console.log("unit array in editunit", unitArray);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "12px",
          marginBottom: "12px",
        }}
      >
        <Button
          size="small"
          variant="contained"
          sx={{ backgroundColor: "primary.main" }}
          onClick={handleClickOpenUnit}
        >
          Add Unit
        </Button>
      </Box>
      <fieldset style={{ borderRadius: "8px" }}>
        <legend>Units Breakdown</legend>
        {unitArray.length === 0 ? (
          <Box
            sx={{ display: "flex", padding: "2em", justifyContent: "center" }}
          >
            <Typography variant="p" sx={{ color: "grey" }}>
              No Units Added Yet
            </Typography>
          </Box>
        ) : (
          unitArray.map((item, index) => {
            return (
              <EditUnitBreakDown
                key={index}
                unitCode={item.unitCode}
                unitAc={item.unitAc}
                floorLevel={item.floorLevel}
                unitNoOfAdults={item.unitNoOfAdults}
                unitNoOfChildren={item.unitNoOfChildren}
                unitRemarks={item.unitRemarks}
                unitRental={item.unitRental}
                roomArray={roomArray}
                setRoomArray={setRoomArray}
                selectedRooms={selectedRoomDetails[item.unitCode] || []}
                handleUnitDelete={handleUnitDelete}
                handleUnitEdit={handleUnitEdit}
                index={index}
                setSelectedRoomDetails={setSelectedRoomDetails}
                // handleUnitRemake={handleUnitRemake}
              />
            );
          })
        )}
      </fieldset>

      {/* Add new Unit popup */}
      <React.Fragment>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={openUnit}
          onClose={handleCloseUnit}
        >
          <DialogTitle>Add New Unit</DialogTitle>
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
                    Unit No {}
                  </Typography>
                </Box>
                <TextField
                  className="input_field"
                  value={unitValues.unitCode}
                  required
                  id="outlined-required"
                  placeholder="Enter Unit No"
                  fullWidth
                  size="small"
                  onChange={handleUnitCodeChange}
                  helperText={unitExist ? "Already exist" : ""}
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
                    value={
                      unitValues.unitAc === "AC"
                        ? "AC"
                        : unitValues.unitAc === "Non-AC"
                        ? "Non-AC"
                        : ""
                    }
                    label="Age"
                    onChange={handleUnitAcChange}
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
                    Floor Level
                  </Typography>
                </Box>
                <TextField
                  type="number"
                  value={unitValues.floorLevel}
                  error={error.ctName}
                  required
                  id="outlined-required"
                  label=""
                  placeholder="Floor Level"
                  fullWidth
                  size="small"
                  onChange={handleFloorLevelChange}
                  helperText={error.ctName ? "Invalid Input" : ""}
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
                  value={unitValues.unitRemark}
                  required
                  id="outlined-required"
                  label="Remark"
                  placeholder="Enter Remark"
                  fullWidth
                  size="small"
                  onChange={handleUnitRemarkChange}
                  helperText={error.ctName ? "Invalid Input" : ""}
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={handleSaveUnit}>
                Save
              </Button>
              <Button variant="outlined" onClick={handleCloseUnit}>
                Close
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </React.Fragment>
      {/* alert add unit all should fill*/}
      <div>
        <Snackbar
          open={openUnitFillAlert}
          autoHideDuration={4000}
          onClose={handleCloseUnitFillAlert}
        >
          <Alert
            onClose={handleCloseUnitFillAlert}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Can't Save | You must fill all the fields
          </Alert>
        </Snackbar>
      </div>

      {/* alert same unit exist add room popup*/}
      <div>
        <Snackbar
          open={openUnitExistAlert}
          autoHideDuration={4000}
          onClose={handleCloseUnitExistAlert}
        >
          <Alert
            onClose={handleCloseUnitExistAlert}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Can't Save | Unit No already exist
          </Alert>
        </Snackbar>
      </div>
    </Box>
  );
};

export default EditUnit;
