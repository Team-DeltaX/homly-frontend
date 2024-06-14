import { Grid, Box, Button } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import HomeDetailsView from "./HomeDetailsView";
import CareTakerDetailsView from "./CareTakerDetailsView";
import CreatePageHomeBreakDownView from "./HolidayHomeCreate/CreatePageHomeBreakDownView";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import AxiosClient from "../../../services/AxiosClient";
import { SocketioContext } from "../../../Contexts/SocketioContext";

const CreateHolidayHomeContent = () => {
  const navigate = useNavigate();
  const { socket } = useContext(SocketioContext);

  const [value, setValue] = useState({
    name: "",
    address: "",
    district: "",
    description: "",
    contactNo1: "",
    contactNo2: "",
    category: "",
    status: "",
  });

  const [valueCareTaker, setValueCareTaker] = useState({
    caretakerName: "",
    caretakerContactNo: "",
    caretakerStatus: "",
    caretakerAddress: "",
    caretakerDescription: "",
  });

  const [caretaker1Image, setCaretaker1Image] = useState(null);

  const [valueSecond, setValueSecond] = useState({
    caretakerName: "",
    caretakerContactNo: "",
    caretakerStatus: "",
    caretakerAddress: "",
    caretakerDescription: "",
  });

  const [caretaker2Image, setCaretaker2Image] = useState(null);

  const [bdValue, setBdValue] = useState({
    otherCharges: "",
    serviceCharges: "",
    facilities: "",
    gym: false,
    kitchen: false,
    park: false,
    wifi: false,
    pool: false,
    bar: false,
  });

  const [adultsCount, setAdultsCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const [roomArray, setRoomArray] = useState([]);
  const [unitArray, setUnitArray] = useState([]);
  const [hallArray, setHallArray] = useState([]);
  const [roomTypeArray, setRoomTypeArray] = useState([]);
  const [settingRoomRentalArray, setSettingRoomRentalArray] = useState([]);

  const [submitDisable, setSubmitDisable] = useState(true);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [open, setOpen] = React.useState(false);

  const [mainImage, setMainImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  console.log("Holidayhome details", value.name);

  const handleSubmit = (e) => {
    let formData = {
      holidayHomeDetails: value,
      mainImage: mainImage,
      image1: image1,
      image2: image2,
      image3: image3,
      caretaker1: valueCareTaker,
      caretaker1Image: caretaker1Image,
      caretaker2: valueSecond,
      caretaker2Image: caretaker2Image,
      homeBreakDown: { bdValue, adultsCount, childCount },
      roomArray: roomArray,
      unitArray: unitArray,
      hallArray: hallArray,
      roomTypeArray: roomTypeArray,
      settingRoomRentalArray: settingRoomRentalArray,
    };
    e.preventDefault();
    setSubmitClicked(true);
    console.log("allvalues", formData);
    AxiosClient.post("/admin/auth/locationadmin/holidayhome/", formData)
      .then((res) => {
        console.log(res);
        navigate("/locationadmin/manage");
      })
      .catch((err) => {
        console.log(err);
      });
    socket.emit("newNotification", {
      senderId: sessionStorage.getItem("userId"),
      receiverId: "HomlyPriAdmin",
      data: `${value.name} - Holiday Home has been added successfully`,
      type: "Authorization Denied",
      time: new Date(),
    });
    setOpen(true);
  };

  const [holidayHomeSubmit, setHolidayHomeSubmit] = useState(false);
  const [caretakerSubmit, setCaretakerSubmit] = useState(false);
  const [homeBreakdownSubmit, setHomeBreakdownSubmit] = useState(false);

  useEffect(() => {
    if (holidayHomeSubmit && caretakerSubmit && homeBreakdownSubmit) {
      setSubmitDisable(false);
    } else {
      setSubmitDisable(true); // Make sure to set to false or true explicitly
    }
  }, [holidayHomeSubmit, caretakerSubmit, homeBreakdownSubmit]);

  return (
    <Box className="content_container" sx={{ maxHeight: "90vh" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ marginBottom: "16px " }}>
          <Grid item md={6} sm={12} xs={12}>
            <HomeDetailsView
              submit={holidayHomeSubmit}
              setSubmit={setHolidayHomeSubmit}
              submitClicked={submitClicked}
              setSubmitClicked={setSubmitClicked}
              value={value}
              setValue={setValue}
              setMainImage={setMainImage}
              setImage1={setImage1}
              setImage2={setImage2}
              setImage3={setImage3}
            />
            {/* <HomeDetailsView setSubmit={setSubmit} /> */}
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <CareTakerDetailsView
              submit={caretakerSubmit}
              setSubmit={setCaretakerSubmit}
              submitClicked={submitClicked}
              setSubmitClicked={setSubmitClicked}
              value={valueCareTaker}
              setValue={setValueCareTaker}
              valueSecond={valueSecond}
              setValueSecond={setValueSecond}
              setImage1={setCaretaker1Image}
              setImage2={setCaretaker2Image}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <CreatePageHomeBreakDownView
              submit={homeBreakdownSubmit}
              setSubmit={setHomeBreakdownSubmit}
              submitClicked={submitClicked}
              setSubmitClicked={setSubmitClicked}
              bdValue={bdValue}
              setBdValue={setBdValue}
              roomArray={roomArray}
              setRoomArray={setRoomArray}
              unitArray={unitArray}
              setUnitArray={setUnitArray}
              hallArray={hallArray}
              setHallArray={setHallArray}
              adultsCount={adultsCount}
              childCount={childCount}
              setAdultsCount={setAdultsCount}
              setChildCount={setChildCount}
              roomTypeArray={roomTypeArray}
              setRoomTypeArray={setRoomTypeArray}
              settingRoomRentalArray={settingRoomRentalArray}
              setSettingRoomRentalArray={setSettingRoomRentalArray}
            />
          </Grid>
        </Grid>

        <Box
          sx={{
            minHeight: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: "3em",
          }}
        >
          {/* <Button type="submit" variant="contained" disabled={true} sx={{ marginBottom: "1.25em" }}>Submit</Button> */}
          {/* {holidayHomeError ?
            <Typography variant="p" sx={{ marginRight: "20px", marginBottom: "18px", color: "red", display: 'flex', alignItems: 'center' }}>Invalid input detected. Please correct the errors before submitting<ErrorIcon sx={{ marginLeft: "5px" }} /></Typography>
            : ""} */}
          <Button
            id="submitBtn"
            type="submit"
            variant="contained"
            disabled={submitDisable}
            sx={{ marginBottom: "1.25em" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateHolidayHomeContent;
