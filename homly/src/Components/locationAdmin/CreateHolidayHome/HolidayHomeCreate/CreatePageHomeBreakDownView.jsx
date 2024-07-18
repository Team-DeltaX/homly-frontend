import React, { useEffect, useState } from "react";
import { Box, TextField, Typography, Grid, Button } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import CancelIcon from "@mui/icons-material/Cancel";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import EditRoom from "./EditRoom";
import EditUnit from "./EditUnit";
import EditHall from "./EditHall";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const CreatePageHomeBreakDownView = ({
  setSubmit,
  setAllValues,
  submitClicked,
  setHomeBreakDownError,
  bdValue,
  setBdValue,
  roomArray,
  setRoomArray,
  unitArray,
  setUnitArray,
  hallArray,
  setHallArray,
  adultsCount,
  setAdultsCount,
  childCount,
  setChildCount,
  settingRoomRentalArray,
  setSettingRoomRentalArray,
  roomTypeArray,
  setRoomTypeArray,
}) => {
  const [value, setValue] = useState(0);
  const [settingsRoomType, setSettingsRoomType] = useState({
    type: "",
    adults: "",
    children: "",
  });
  const [settingsRoomRental, setSettingsRoomRental] = useState({
    type: "",
    acNonAc: "",
    rental: "",
  });

  const [roomTypeAddButton, setRoomTypeAddButton] = useState(true);
  const [roomSettingsRentalAddButton, setRoomSettingsRentalAddButton] =
    useState(true);

  const [error, setError] = useState({
    tRental: false,
    oCharges: false,
    sCharges: false,
  });

  console.log("break", error);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlefacilityChange = (e) => {
    setBdValue({ ...bdValue, facilities: e.target.value });
  };

  const hangleGymChange = (e) => {
    setBdValue({ ...bdValue, gym: e.target.value });
  };

  const handleKitchenChange = (e) => {
    setBdValue({ ...bdValue, kitchen: e.target.value });
  };

  const handleParkChange = (e) => {
    setBdValue({ ...bdValue, park: e.target.value });
  };

  const handleWifiChange = (e) => {
    setBdValue({ ...bdValue, wifi: e.target.value });
  };

  const handlePoolChange = (e) => {
    setBdValue({ ...bdValue, pool: e.target.value });
  };

  const handleBarChange = (e) => {
    setBdValue({ ...bdValue, bar: e.target.value });
  };

  const handleSettingsTypeChange = (e) => {
    setSettingsRoomType({ ...settingsRoomType, type: e.target.value });
  };

  const handleSettingsAdultsChange = (e) => {
    const inputValue = e.target.value;

    // Check if the input value is a positive integer
    if (inputValue === "" || /^\d+$/.test(inputValue)) {
      setSettingsRoomType({ ...settingsRoomType, adults: inputValue });
    }
  };

  const handleSettingsChildrenChange = (e) => {
    const inputValue = e.target.value;

    // Check if the input value is a positive integer
    if (inputValue === "" || /^\d+$/.test(inputValue)) {
      setSettingsRoomType({ ...settingsRoomType, children: inputValue });
    }
  };

  const handleAddRoomTypes = () => {
    let flag = true;
    if (roomTypeArray.length === 0) {
      roomTypeArray.push(settingsRoomType);
      console.log("array", roomTypeArray);
      setSettingsRoomType({ type: "", adults: "", children: "" });
    } else {
      for (let i = 0; i < roomTypeArray.length; i++) {
        if (roomTypeArray[i].type === settingsRoomType.type) {
          flag = false;
        }
      }
      if (flag) {
        roomTypeArray.push(settingsRoomType);
        console.log("array", roomTypeArray);
        setSettingsRoomType({ type: "", adults: "", children: "" });
      } else {
        setTypeExistAlert(true);
        setSettingsRoomType({ type: "", adults: "", children: "" });
      }
    }
  };

  useEffect(() => {
    if (
      settingsRoomType.type === "" ||
      settingsRoomType.adults === "" ||
      settingsRoomType.children === ""
    ) {
      setRoomTypeAddButton(true);
    } else {
      setRoomTypeAddButton(false);
    }
  }, [settingsRoomType]);

  const handleDeleteRoomTypes = (ind) => {
    const tempArray = roomTypeArray.filter((item, index) => index !== ind);
    setRoomTypeArray(tempArray);
  };

  const handleSettingsRentalTypeChange = (e) => {
    setSettingsRoomRental({ ...settingsRoomRental, type: e.target.value });
  };
  const handleSettingsRentalAcNonAcChange = (e) => {
    setSettingsRoomRental({ ...settingsRoomRental, acNonAc: e.target.value });
  };
  const handleSettingsRentalRentalChange = (e) => {
    const inputValue = e.target.value;

    // Check if the input value is a positive integer
    if (inputValue === "" || /^\d+$/.test(inputValue)) {
      setSettingsRoomRental({ ...settingsRoomRental, rental: inputValue });
    }
  };

  const handleAddRoomRentalSettings = () => {
    let flag = true;
    if (settingRoomRentalArray.length === 0) {
      settingRoomRentalArray.push(settingsRoomRental);
      console.log("array", settingRoomRentalArray);
      setSettingsRoomRental({ type: "", acNonAc: "", rental: "" });
    } else {
      for (let i = 0; i < settingRoomRentalArray.length; i++) {
        if (
          settingRoomRentalArray[i].type === settingsRoomRental.type &&
          settingRoomRentalArray[i].acNonAc === settingsRoomRental.acNonAc
        ) {
          flag = false;
        }
      }
      if (flag) {
        settingRoomRentalArray.push(settingsRoomRental);
        console.log("array", settingRoomRentalArray);
        setSettingsRoomRental({ type: "", acNonAc: "", rental: "" });
      } else {
        setTypeExistAlert(true);
        setSettingsRoomRental({ type: "", acNonAc: "", rental: "" });
      }
    }
  };

  useEffect(() => {
    if (
      settingsRoomRental.type === "" ||
      settingsRoomRental.acNonAc === "" ||
      settingsRoomRental.rental === ""
    ) {
      setRoomSettingsRentalAddButton(true);
    } else {
      setRoomSettingsRentalAddButton(false);
    }
  }, [settingsRoomRental]);

  const handleDeleteRoomRentalSettings = (ind) => {
    const tempArray = settingRoomRentalArray.filter(
      (item, index) => index !== ind
    );
    setSettingRoomRentalArray(tempArray);
  };

  useEffect(() => {
    const areErrorsEmpty = !error.oCharges && !error.sCharges && !error.tRental;

    if (areErrorsEmpty) {
      // setHomeBreakDownError(true)
    }

    if (roomArray.length > 0 && unitArray.length > 0 && areErrorsEmpty) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  }, [roomArray, unitArray, setSubmit, error]);

  const [typeExistAlert, setTypeExistAlert] = useState(false);

  const handleTypeExistAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setTypeExistAlert(false);
  };

  return (
    <Box>
      <fieldset
        style={{
          borderRadius: "16px",
          color: "grey",
          padding: "1.2em",
          paddingBottom: "0px",
        }}
      >
        <legend>Holiday Home Breakdown</legend>
        <Grid container spacing={3}>
          <Grid item md={6} sm={12} xs={12}>
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
                  Maximum Adults
                </Typography>
              </Box>
              <TextField
                value={adultsCount}
                type="number"
                id="outlined-required"
                label="Maximum Adults"
                placeholder="Maximum Adults"
                fullWidth
                size="small"
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
                  Maximum Childern
                </Typography>
              </Box>
              <TextField
                value={childCount}
                type="number"
                id="outlined-required"
                label="Maximum Children"
                placeholder="Maximum Children"
                fullWidth
                size="small"
              />
            </Box>
            <FormGroup
              sx={{
                display: "flex",
                width: "100%",
                gap: "0.5em ",
                marginTop: "1em",
              }}
            >
              <Box sx={{ display: "flex", gap: "1em" }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Gym"
                  checked={bdValue.gym}
                  onChange={hangleGymChange}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Park"
                  checked={bdValue.park}
                  onChange={handleParkChange}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Kitchen"
                  checked={bdValue.kitchen}
                  onChange={handleKitchenChange}
                />
              </Box>
              <Box sx={{ display: "flex", gap: "1em" }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Bar"
                  checked={bdValue.bar}
                  onChange={handleBarChange}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Wifi"
                  checked={bdValue.wifi}
                  onChange={handleWifiChange}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Pool"
                  checked={bdValue.pool}
                  onChange={handlePoolChange}
                />
              </Box>
            </FormGroup>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
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
                <Typography
                  value={bdValue.facilities}
                  variant="p"
                  sx={{ color: "black" }}
                >
                  Enter facilities
                </Typography>
              </Box>
              <TextField
                id="outlined-required"
                label="Facilities"
                placeholder="Enter Facilities"
                fullWidth
                size="small"
                onChange={handlefacilityChange}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          sx={{ marginTop: "15px", marginBottom: "15px" }}
        >
          <Grid item md={12} sm={12} xs={12}>
            <Box>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Room Type Settings
              </Typography>
            </Box>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Box sx={{ display: "flex", gap: "1em", alignItems: "center" }}>
              <Box
                className="input_container"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.8em",
                  marginBottom: "12px",
                }}
              >
                <Box sx={{ maxWidth: "200px" }} className="label_container">
                  <Typography variant="p" sx={{ color: "black" }}>
                    Type
                  </Typography>
                </Box>
                <FormControl sx={{ width: "100px" }}>
                  <InputLabel id="demo-simple-select-label">Select</InputLabel>
                  <Select
                    required
                    xs={{ width: "5%" }}
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={settingsRoomType.type}
                    label="Age"
                    onChange={handleSettingsTypeChange}
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
                  justifyContent: "center",
                  gap: "1em",
                  marginBottom: "12px",
                }}
              >
                <Box sx={{}} className="label_container">
                  <Typography variant="p" sx={{ color: "black" }}>
                    Adults
                  </Typography>
                </Box>
                <TextField
                  type="text"
                  error={error.ctName}
                  required
                  id="outlined-required"
                  label=""
                  sx={{ width: "75px" }}
                  size="small"
                  onChange={handleSettingsAdultsChange}
                  value={settingsRoomType.adults}
                  inputProps={{ pattern: "\\d*", inputMode: "numeric" }}
                />
              </Box>
              <Box
                className="input_container"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1em",
                  marginBottom: "12px",
                }}
              >
                <Box sx={{ width: "50px" }} className="label_container">
                  <Typography variant="p" sx={{ color: "black" }}>
                    Children
                  </Typography>
                </Box>
                <TextField
                  type="text"
                  error={error.ctName}
                  required
                  id="outlined-required"
                  label=""
                  size="small"
                  sx={{ width: "75px" }}
                  onChange={handleSettingsChildrenChange}
                  value={settingsRoomType.children}
                  inputProps={{ pattern: "\\d*", inputMode: "numeric" }}
                />
              </Box>
              <Box sx={{ display: "flex", marginBottom: "12px" }}>
                <Button
                  variant="contained"
                  size={"small"}
                  onClick={handleAddRoomTypes}
                  disabled={roomTypeAddButton}
                >
                  add
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item md={12} sm={12} xs={12} display={"flex"} flexWrap={"wrap"}>
            {roomTypeArray.length === 0
              ? ""
              : roomTypeArray.map((item, index) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#e3e3e3",
                        width: "300px",
                        padding: "0.3em",
                        borderRadius: "10px",
                        boxShadow:
                          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                        marginBottom: "12px",
                        marginLeft: "25px",
                      }}
                    >
                      <Box sx={{ display: "flex", gap: "1.5em" }}>
                        <Box sx={{ width: "100px" }}>
                          <Typography variant="p">{item.type}</Typography>
                        </Box>
                        <Box sx={{ width: "60px" }}>
                          <Typography variant="p">A : {item.adults}</Typography>
                        </Box>
                        <Box>
                          <Typography variant="p">
                            C : {item.children}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ justifySelf: "flex-end" }}>
                        <CancelIcon
                          sx={{ cursor: "pointer", color: "black" }}
                          onClick={() => handleDeleteRoomTypes(index)}
                        />
                      </Box>
                    </Box>
                  );
                })}
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          sx={{ marginTop: "15px", marginBottom: "15px" }}
        >
          <Grid item md={12} sm={12} xs={12}>
            <Box>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Room Rental Settings
              </Typography>
            </Box>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Box sx={{ display: "flex", gap: "1em", alignItems: "center" }}>
              <Box
                className="input_container"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.8em",
                  marginBottom: "12px",
                }}
              >
                <Box sx={{ maxWidth: "200px" }} className="label_container">
                  <Typography variant="p" sx={{ color: "black" }}>
                    Type
                  </Typography>
                </Box>
                <FormControl sx={{ width: "100px" }}>
                  <InputLabel id="demo-simple-select-label">Select</InputLabel>
                  <Select
                    required
                    xs={{ width: "5%" }}
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={settingsRoomRental.type}
                    label="Age"
                    onChange={handleSettingsRentalTypeChange}
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
                    AC/Non-AC
                  </Typography>
                </Box>

                <FormControl sx={{ width: "100px" }}>
                  <InputLabel id="demo-simple-select-label">select</InputLabel>
                  <Select
                    required
                    xs={{ width: "75px  " }}
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={settingsRoomRental.acNonAc}
                    label="Age"
                    onChange={handleSettingsRentalAcNonAcChange}
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
                  justifyContent: "center",
                  gap: "1em",
                  marginBottom: "12px",
                }}
              >
                <Box sx={{ width: "50px" }} className="label_container">
                  <Typography variant="p" sx={{ color: "black" }}>
                    Rental
                  </Typography>
                </Box>
                <TextField
                  type="text"
                  error={error.ctName}
                  required
                  id="outlined-required"
                  label=""
                  size="small"
                  sx={{ width: "75px" }}
                  onChange={handleSettingsRentalRentalChange}
                  value={settingsRoomRental.rental}
                  inputProps={{ pattern: "\\d*", inputMode: "numeric" }}
                />
              </Box>
              <Box sx={{ display: "flex", marginBottom: "12px" }}>
                <Button
                  variant="contained"
                  size={"small"}
                  onClick={handleAddRoomRentalSettings}
                  disabled={roomSettingsRentalAddButton}
                >
                  add
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item md={12} sm={12} xs={12} display={"flex"} flexWrap={"wrap"}>
            {settingRoomRentalArray.length === 0
              ? ""
              : settingRoomRentalArray.map((item, index) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#e3e3e3",
                        width: "300px",
                        padding: "0.3em",
                        borderRadius: "10px",
                        boxShadow:
                          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                        marginBottom: "12px",
                        marginLeft: "25px",
                      }}
                    >
                      <Box sx={{ display: "flex", gap: "1.5em" }}>
                        <Box sx={{ width: "100px" }}>
                          <Typography variant="p">{item.type}</Typography>
                        </Box>
                        <Box sx={{ width: "60px" }}>
                          <Typography variant="p">{item.acNonAc}</Typography>
                        </Box>
                        <Box>
                          <Typography variant="p">{item.rental}</Typography>
                        </Box>
                      </Box>
                      <Box>
                        <CancelIcon
                          sx={{ cursor: "pointer", color: "black" }}
                          onClick={() => handleDeleteRoomRentalSettings(index)}
                        />
                      </Box>
                    </Box>
                  );
                })}
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item md={12} sm={12} xs={12} sx={{ marginTop: "2em" }}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Rooms/Units" {...a11yProps(0)} />
                  <Tab label="Halls" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <EditRoom
                  roomArray={roomArray}
                  setRoomArray={setRoomArray}
                  adultsCount={adultsCount}
                  childCount={childCount}
                  setAdultsCount={setAdultsCount}
                  setChildCount={setChildCount}
                  roomTypeArray={roomTypeArray}
                  settingRoomRentalArray={settingRoomRentalArray}
                />
                <EditUnit
                  roomArray={roomArray}
                  setRoomArray={setRoomArray}
                  unitArray={unitArray}
                  setUnitArray={setUnitArray}
                />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <EditHall hallArray={hallArray} setHallArray={setHallArray} />
              </CustomTabPanel>
            </Box>
          </Grid>
        </Grid>
      </fieldset>

      {/* alert type already exist*/}
      <div>
        <Snackbar
          open={typeExistAlert}
          autoHideDuration={4000}
          onClose={handleTypeExistAlert}
        >
          <Alert
            onClose={handleTypeExistAlert}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Can't Add | Type Already Exist
          </Alert>
        </Snackbar>
      </div>
    </Box>
  );
};

export default CreatePageHomeBreakDownView;
